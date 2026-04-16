import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          <Translate id="homepage.heroTitle" description="Homepage hero title">
            School Attendance Challenges
          </Translate>
        </Heading>
        <p className="hero__subtitle">
          <Translate
            id="homepage.heroSubtitle"
            description="Homepage hero subtitle describing the site's purpose">
            Addressing Barriers to Education with Tiered School-Wide Strategies
          </Translate>
        </p>
        <p style={{ fontSize: '1rem', marginTop: '-1rem', marginBottom: '2rem' }}>
          <Translate
            id="homepage.presentedBy"
            description="Homepage line under the site tagline naming the presenting organization">
            presented by Youth Mental Health Canada
          </Translate>
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/sac/shared-commitment"
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
            <Translate id="homepage.startHereCta" description="Homepage primary call to action button">
              Start Here
            </Translate>
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/sac/resources-training"
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
            <Translate id="homepage.resourcesCta" description="Homepage button linking to resources">
              Resources
            </Translate>
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/sac/resources-training/online-courses"
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            <Translate id="homepage.trainingCta" description="Homepage button linking to training">
              Training
            </Translate>
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="https://ymhc.ngo/conference"
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            <Translate id="homepage.conferenceCta" description="Homepage button linking to the conference page">
              Conference
            </Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const siteTitle = translate({
    id: 'homepage.heroTitle',
    description: 'Homepage hero title',
    message: 'School Attendance Challenges',
  });
  return (
    <Layout
      title={translate(
        {
          id: 'homepage.metaTitle',
          description: 'Home page HTML title',
          message: 'Home - {siteTitle}',
        },
        {siteTitle},
      )}
      description={translate({
        id: 'homepage.metaDescription',
        description: 'Home page meta description',
        message: 'Youth Mental Health Canada - School Attendance Challenges',
      })}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
