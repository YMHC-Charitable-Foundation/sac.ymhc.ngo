import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Support Pathways for Families and Schools',
    imgSrc: require('@site/static/img/Study-scaled-800x533.jpg').default,
    description: (
      <>
        Provides practical guidance to help families and educators recognize warning signs, understand barriers to education, and take coordinated steps to support students.
      </>
    ),
    link: '/docs/sac/shared-commitment',
    linkText: 'Learn More',
  },
  {
    title: 'YMHC National SAC Survey and Research Evidence',
    imgSrc: require('@site/static/img/Story-scaled.jpg').default,
    description: (
      <>
        Presents findings from YMHC’s national School Attendance Challenges survey and research to increase awareness of school attendance challenges and inform better policies and practices.
      </>
    ),
    link: '/docs/survey/introduction',
    linkText: 'Read the Survey',
  },
  {
    title: 'Resources, Training, and Educational Tools',
    imgSrc: require('@site/static/img/online-course-1.png').default,
    description: (
      <>
        Offers tiered resources, workbooks, workshops, and online courses that help schools and communities implement practical strategies to support student well-being and attendance.
      </>
    ),
    link: '/docs/sac/resources-training',
    linkText: 'Explore Resources',
  },
];

function Feature({ imgSrc, title, description, link, linkText }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={imgSrc} className={styles.featureImage} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <div className="margin-top--md margin-bottom--lg">
          <Link className="button button--secondary button--block" to={link}>
            {linkText}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <div className="row" style={{ marginTop: '3rem', marginBottom: '2rem' }}>
          <div className="col col--12 text--center">
            <a href="https://ymhc.ngo/conference" target="_blank" rel="noopener noreferrer">
              <img
                src={require('@site/static/img/Conference-Event-Cover-16x9-v2.jpg').default}
                alt="YMHC Conference Event"
                className={styles.fullWidthImage}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
