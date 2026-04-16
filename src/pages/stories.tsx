import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Papa from 'papaparse';
import {translate} from '@docusaurus/Translate';
import Layout from '@theme/Layout';
import styles from './stories.module.css';

export default function Stories() {
  const [stories, setStories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedStory, setSelectedStory] = useState<any>(null);

  useEffect(() => {
    fetch('/data/stories.csv')
      .then((response) => response.text())
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            const shuffled = results.data.sort(() => 0.5 - Math.random());
            setStories(shuffled);
            setLoading(false);
          },
        });
      })
      .catch((err) => {
        console.error('Error loading stories:', err);
        setLoading(false);
      });
  }, []);

  const maxPreviewLength = 180;

  const getBadgeClass = (category: string) => {
    if (!category) return styles.badgeOther;
    const cat = category.toLowerCase();
    if (cat.includes('elementary')) return styles.badgeElementary;
    if (cat.includes('secondary') || cat.includes('high')) return styles.badgeSecondary;
    if (cat.includes('middle')) return styles.badgeMiddle;
    return styles.badgeOther;
  };

  return (
    <Layout
      title={translate({
        id: 'stories.metaTitle',
        description: 'Story Wall page HTML title',
        message: 'Story Wall',
      })}
      description={translate({
        id: 'stories.metaDescription',
        description: 'Story Wall page meta description',
        message: 'Read real stories from students and families experiencing school attendance challenges',
      })}>
      <main className={styles.mainContainer}>
        <div className="container padding-vert--xl">
          <div className="text--center margin-bottom--xl">
            <h1 className={styles.heroTitle}>
              {translate({
                id: 'stories.heroTitle',
                description: 'Story Wall page heading',
                message: 'Story Wall',
              })}
            </h1>
            <p className={styles.heroSubtitle}>
              {translate({
                id: 'stories.heroSubtitle',
                description: 'Story Wall page subtitle',
                message: 'Real experiences shared by students and their families navigating school attendance challenges.',
              })}
            </p>
          </div>

          {loading ? (
            <div className={styles.loader}>
              {translate({
                id: 'stories.loading',
                description: 'Loading label shown while stories are fetched',
                message: 'Loading stories...',
              })}
            </div>
          ) : (
            <div className={styles.masonryGrid}>
              {stories.map((story, idx) => {
                if (!story.Content || !story.Content.trim()) return null;
                const isLong = story.Content.length > maxPreviewLength;
                const previewText = isLong
                  ? `${story.Content.substring(0, maxPreviewLength)}...`
                  : story.Content;
                const hue = ((parseInt(story.id, 10) || idx) * 137.508) % 360;

                return (
                  <div
                    key={idx}
                    className={styles.storyCard}
                    onClick={() => setSelectedStory(story)}
                  >
                    <div
                      className={styles.cardHeader}
                      style={{ borderTopColor: `hsl(${hue}, 70%, 50%)` }}
                    >
                      <h3 className={styles.cardTitle}>{story.Title}</h3>
                      {story.Categories && (
                        <span className={clsx(styles.categoryBadge, getBadgeClass(story.Categories))}>
                          {story.Categories}
                        </span>
                      )}
                    </div>
                    <div className={styles.cardBody}>
                      <p>"{previewText}"</p>
                    </div>
                    {isLong && (
                      <div className={styles.readMore}>
                        {translate({
                          id: 'stories.readFullStory',
                          description: 'Call to action shown on story cards with a truncated preview',
                          message: 'Read full story ->',
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </main>

      {selectedStory && (
        <div className={styles.modalOverlay} onClick={() => setSelectedStory(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.closeButton}
              onClick={() => setSelectedStory(null)}
              aria-label={translate({
                id: 'stories.closeModal',
                description: 'Accessible label for the Story Wall modal close button',
                message: 'Close modal',
              })}
            >
              &times;
            </button>
            <h2 className={styles.modalTitle}>{selectedStory.Title}</h2>
            {selectedStory.Categories && (
              <div className={styles.modalBadgeWrapper}>
                <span className={clsx(styles.categoryBadge, getBadgeClass(selectedStory.Categories))}>
                  {selectedStory.Categories}
                </span>
              </div>
            )}
            <div className={styles.modalBody}>
              {selectedStory.Content.split('\n').map((paragraph, i) => (
                paragraph.trim() && <p key={i}>"{paragraph.trim()}"</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
