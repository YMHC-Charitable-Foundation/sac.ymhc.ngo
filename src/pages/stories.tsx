import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import Papa from 'papaparse';
import clsx from 'clsx';
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
            // Shuffle the stories
            const shuffled = results.data.sort(() => 0.5 - Math.random());
            setStories(shuffled);
            setLoading(false);
          },
        });
      })
      .catch((err) => {
        console.error("Error loading stories:", err);
        setLoading(false);
      });
  }, []);

  // Determine an elegant preview length
  const MAX_PREVIEW_LENGTH = 180;

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
      title="Story Wall"
      description="Read real stories from students and families experiencing school attendance challenges">
      <main className={styles.mainContainer}>
        <div className="container padding-vert--xl">
          <div className="text--center margin-bottom--xl">
            <h1 className={styles.heroTitle}>Story Wall</h1>
            <p className={styles.heroSubtitle}>
              Real experiences shared by students and their families navigating school attendance challenges.
            </p>
          </div>

          {loading ? (
            <div className={styles.loader}>Loading stories...</div>
          ) : (
            <div className={styles.masonryGrid}>
              {stories.map((story, idx) => {
                if (!story.Content || !story.Content.trim()) return null;
                const isLong = story.Content.length > MAX_PREVIEW_LENGTH;
                const previewText = isLong
                  ? story.Content.substring(0, MAX_PREVIEW_LENGTH) + '...'
                  : story.Content;

                // Color assignation based on ID (to be stable but random-looking)
                const hue = ((parseInt(story.id) || idx) * 137.508) % 360;

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
                        Read full story →
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </main>

      {/* Modal for full story */}
      {selectedStory && (
        <div className={styles.modalOverlay} onClick={() => setSelectedStory(null)}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <button
              className={styles.closeButton}
              onClick={() => setSelectedStory(null)}
              aria-label="Close modal"
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
              {/* Split by newlines to render paragraphs */}
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
