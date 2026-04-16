import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: (
      <Translate
        id="homepage.features.pathways.title"
        description="Homepage feature card title about support pathways">
        Support Pathways for Families and Schools
      </Translate>
    ),
    imgSrc: require('@site/static/img/Study-scaled-800x533.jpg').default,
    description: (
      <Translate
        id="homepage.features.pathways.description"
        description="Homepage feature card description about support pathways">
        Provides practical guidance to help families and educators recognize warning signs, understand barriers to education, and take coordinated steps to support students.
      </Translate>
    ),
    link: '/docs/sac/shared-commitment',
    linkText: (
      <Translate
        id="homepage.features.pathways.cta"
        description="Homepage feature card button to learn more">
        Learn More
      </Translate>
    ),
  },
  {
    title: (
      <Translate
        id="homepage.features.survey.title"
        description="Homepage feature card title about survey findings and research">
        YMHC National SAC Survey and Research Evidence
      </Translate>
    ),
    imgSrc: require('@site/static/img/Story-scaled.jpg').default,
    description: (
      <Translate
        id="homepage.features.survey.description"
        description="Homepage feature card description about survey findings and research">
        Presents findings from YMHC&apos;s national School Attendance Challenges survey and research to increase awareness of school attendance challenges and inform better policies and practices.
      </Translate>
    ),
    link: '/docs/survey/introduction',
    linkText: (
      <Translate
        id="homepage.features.survey.cta"
        description="Homepage feature card button to read the survey">
        Read the Survey
      </Translate>
    ),
  },
  {
    title: (
      <Translate
        id="homepage.features.resources.title"
        description="Homepage feature card title about resources and training">
        Resources, Training, and Educational Tools
      </Translate>
    ),
    imgSrc: require('@site/static/img/online-course-1.png').default,
    description: (
      <Translate
        id="homepage.features.resources.description"
        description="Homepage feature card description about resources and training">
        Offers tiered resources, workbooks, workshops, and online courses that help schools and communities implement practical strategies to support student well-being and attendance.
      </Translate>
    ),
    link: '/docs/sac/resources-training',
    linkText: (
      <Translate
        id="homepage.features.resources.cta"
        description="Homepage feature card button to explore resources">
        Explore Resources
      </Translate>
    ),
  },
];

function Feature({ imgSrc, title, description, link, linkText }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={imgSrc} className={styles.featureImage} alt="" />
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
                alt=""
                className={styles.fullWidthImage}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
