// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';
import youtubePlugin from './src/remark/youtube.js';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'School Attendance Challenges',
  tagline: 'Youth Mental Health Canada',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://sac.ymhc.ngo',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Youth Mental Health Canada', // Usually your GitHub org/user name.
  projectName: 'sac.ymhc.ngo', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          beforeDefaultRemarkPlugins: [youtubePlugin],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],


  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          { from: '/about/', to: '/docs/sac/about' },
          { from: '/contact/', to: '/docs/sac/contact' },
          { from: '/survey/', to: '/docs/sac/national-survey' },
          { from: '/training/', to: '/docs/sac/resources-training' },
          { from: '/submit-your-story/', to: '/stories' },
          { from: '/2021/12/22/primary-school-sample/', to: '/stories' },
          { from: '/participate/', to: '/docs/survey/participate' },
          { from: '/2022/01/16/13-yrs-grade-8/', to: '/stories' },
          { from: '/2022/01/18/13-yrs-grade-7/', to: '/stories' },
          { from: '/2022/01/08/6-yrs-grade-1/', to: '/stories' },
          { from: '/2022/01/01/8-yrs-grade-3/', to: '/stories' },
          { from: '/2022/01/24/10-yrs-grade-5/', to: '/stories' },
          { from: '/2022/01/18/9-yrs-grade-3/', to: '/stories' },
          { from: '/2022/01/06/12-yrs-grade-7/', to: '/stories' },
          { from: '/2022/01/17/10-yrs-grade-5-2/', to: '/stories' },
          { from: '/2022/01/25/10-yrs-grade-5-3/', to: '/stories' },
          { from: '/2022/01/23/9-yrs-grade-3-2/', to: '/stories' },
          { from: '/2022/01/29/10-yrs-grade-5-4/', to: '/stories' },
          { from: '/2022/01/28/13-yrs-grade-7-2/', to: '/stories' },
          { from: '/2022/01/09/12-yrs-grade-6/', to: '/stories' },
          { from: '/2022/01/18/8-yrs-grade-2/', to: '/stories' },
          { from: '/2022/01/09/8-yrs-grade-2-2/', to: '/stories' },
          { from: '/2022/01/04/9-yrs-grade-4/', to: '/stories' },
          { from: '/2022/01/09/9-yrs-grade-4-2/', to: '/stories' },
          { from: '/2022/01/22/13-yrs-grade-7-3/', to: '/stories' },
          { from: '/2022/01/05/8-yrs-grade-2-3/', to: '/stories' },
          { from: '/2022/01/04/10-yrs-grade-5-5/', to: '/stories' },
          { from: '/2022/01/07/7-yrs-grade-2/', to: '/stories' },
          { from: '/2022/01/11/7-yrs-grade-2-2/', to: '/stories' },
          { from: '/2022/01/06/12-yrs-grade-6-2/', to: '/stories' },
          { from: '/2022/01/30/7-yrs-grade-2-3/', to: '/stories' },
          { from: '/2022/01/24/13-yrs-grade-7-4/', to: '/stories' },
          { from: '/2022/01/04/14-yrs-grade-8/', to: '/stories' },
          { from: '/2022/01/11/11-yrs-grade-5/', to: '/stories' },
          { from: '/2022/01/11/13-yrs-grade-8-2/', to: '/stories' },
          { from: '/2022/01/04/8-yrs-grade-3-2/', to: '/stories' },
          { from: '/2022/01/24/11-yrs-grade-5-2/', to: '/stories' },
          { from: '/2022/01/15/12-yrs-grade-7-2/', to: '/stories' },
          { from: '/2022/01/20/8-yrs-grade-3-3/', to: '/stories' },
          { from: '/2022/01/24/14-yrs-grade-8-2/', to: '/stories' },
          { from: '/2022/01/25/13-yrs-grade-8-3/', to: '/stories' },
          { from: '/2022/01/12/13-yrs-grade-8-4/', to: '/stories' },
          { from: '/2022/01/07/13-yrs-grade-8-5/', to: '/stories' },
          { from: '/2022/01/05/8-yrs-grade-3-4/', to: '/stories' },
          { from: '/2022/01/01/13-yrs-grade-8-6/', to: '/stories' },
          { from: '/2022/01/15/10-yrs-grade-5-6/', to: '/stories' },
          { from: '/2022/01/29/8-yrs-grade-3-5/', to: '/stories' },
          { from: '/2022/01/09/9-yrs-grade-4-3/', to: '/stories' },
          { from: '/2022/01/19/10-yrs-grade-5-7/', to: '/stories' },
          { from: '/2022/01/23/11-yrs-grade-6/', to: '/stories' },
          { from: '/2022/01/20/11-yrs-grade-6-2/', to: '/stories' },
          { from: '/2022/01/25/13-yrs-grade-8-7/', to: '/stories' },
          { from: '/2022/01/21/10-yrs-grade-5-8/', to: '/stories' },
          { from: '/2022/01/01/10-yrs-grade-5-9/', to: '/stories' },
          { from: '/2022/01/04/10-yrs-grade-5-10/', to: '/stories' },
          { from: '/2022/01/26/11-yrs-grade-6-3/', to: '/stories' },
          { from: '/2022/01/20/15-yrs-grade-10/', to: '/stories' },
          { from: '/2022/01/06/18-yrs-grade-12/', to: '/stories' },
          { from: '/2022/01/30/15-yrs-grade-9/', to: '/stories' },
          { from: '/2022/01/25/17-yrs-grade-10/', to: '/stories' },
          { from: '/2022/01/08/14-yrs-grade-9/', to: '/stories' },
          { from: '/2022/01/19/16-yrs-grade-11/', to: '/stories' },
          { from: '/2022/01/23/16-yrs-grade-11-2/', to: '/stories' },
          { from: '/2022/01/21/15-yrs-grade-10-2/', to: '/stories' },
          { from: '/2022/01/06/17-yrs-grade-12/', to: '/stories' },
          { from: '/2022/01/24/16-yrs-grade-11-3/', to: '/stories' },
          { from: '/2022/01/15/17-yrs-grade-12-2/', to: '/stories' },
          { from: '/2022/01/17/15-yrs-grade-9-2/', to: '/stories' },
          { from: '/2022/01/07/17-yrs-grade-10-2/', to: '/stories' },
          { from: '/2022/01/16/15-yrs-grade-9-3/', to: '/stories' },
          { from: '/2022/01/17/16-yrs-grade-11-4/', to: '/stories' },
          { from: '/2022/01/25/16-yrs-grade-10/', to: '/stories' },
          { from: '/2022/01/07/16-yrs-grade-11-5/', to: '/stories' },
          { from: '/2022/01/18/14-yrs-grade-9-2/', to: '/stories' },
          { from: '/2022/01/10/15-yrs-grade-10-3/', to: '/stories' },
          { from: '/2022/01/18/15-yrs-grade-9-4/', to: '/stories' },
          { from: '/2022/01/13/14-yrs-grade-10/', to: '/stories' },
          { from: '/2022/01/12/17-yrs-grade-11/', to: '/stories' },
          { from: '/2022/01/12/18-yrs/', to: '/stories' },
          { from: '/2022/01/03/15-yrs-grade-9-5/', to: '/stories' },
          { from: '/2022/01/25/14-yrs-grade-9-3/', to: '/stories' },
          { from: '/2022/01/12/15-yrs-grade-10-4/', to: '/stories' },
          { from: '/2022/01/20/14-yrs-grade-10-2/', to: '/stories' },
          { from: '/2022/01/07/17-yrs-grade-12-3/', to: '/stories' },
          { from: '/2022/01/06/15-yrs-grade-10-5/', to: '/stories' },
          { from: '/2022/01/10/18-yrs-grade-12-2/', to: '/stories' },
          { from: '/2022/01/15/16-yrs-grade-11-6/', to: '/stories' },
          { from: '/2022/01/19/16-yrs-grade-11-7/', to: '/stories' },
          { from: '/2022/01/21/16-yrs-grade-11-8/', to: '/stories' },
          { from: '/2022/01/18/15-yrs-grade-10-6/', to: '/stories' },
          { from: '/2022/01/02/17-yrs-grade-12-4/', to: '/stories' },
          { from: '/2022/01/11/17-yrs-grade-11-2/', to: '/stories' },
          { from: '/2022/01/04/15-yrs-grade-10-7/', to: '/stories' },
          { from: '/2022/01/25/13-yrs-grade-9/', to: '/stories' },
          { from: '/2022/01/06/14-yrs-grade-10-3/', to: '/stories' },
          { from: '/2022/01/09/15-yrs-grade-11/', to: '/stories' },
          { from: '/2022/01/24/16-yrs-grade-11-9/', to: '/stories' },
          { from: '/2022/01/25/15-yrs-grade-10-8/', to: '/stories' },
          { from: '/2022/01/08/19-yrs-grade-12/', to: '/stories' },
          { from: '/2022/01/11/18-yrs-grade-12-3/', to: '/stories' },
          { from: '/2022/01/09/14-yrs-grade-9-4/', to: '/stories' },
          { from: '/2022/01/25/17-yrs-grade-12-5/', to: '/stories' },
          { from: '/2022/01/25/16-yrs-grade-10-2/', to: '/stories' },
          { from: '/2022/01/19/15-yrs-grade-9-6/', to: '/stories' },
          { from: '/2022/01/24/16-yrs-grade-11-10/', to: '/stories' },
          { from: '/2022/01/11/16-yrs-grade-11-11/', to: '/stories' },
          { from: '/2022/01/25/17-yrs-grade-12-6/', to: '/stories' },
          { from: '/2022/01/07/14-yrs-grade-9-5/', to: '/stories' },
          { from: '/2022/01/11/17-yrs-grade-11-3/', to: '/stories' },
          { from: '/2022/01/29/14-yrs-grade-9-6/', to: '/stories' },
          { from: '/2022/01/13/16-yrs-grade-11-12/', to: '/stories' },
          { from: '/2022/01/27/14-yrs-grade-9-7/', to: '/stories' },
          { from: '/2022/01/12/16-yrs-grade-10-3/', to: '/stories' },
          { from: '/survey/background-on-school-phobia/', to: '/docs/survey/background' },
          { from: '/survey/report-student-background/', to: '/docs/survey/participants' },
          { from: '/survey/school-mental-wellness-protective-factors/', to: '/docs/survey/protective-factors' },
          { from: '/survey/report-school-experience-disability-support/', to: '/docs/survey/disability-support' },
          { from: '/survey/the-experience-of-parents/', to: '/docs/survey/parents-experience' },
          { from: '/survey/a-needs-based-approach/', to: '/docs/survey/needs-based-approach' },
          { from: '/survey/conclusion/', to: '/docs/survey/conclusion' },
          { from: '/survey/school-phobia-and-chronic-absenteeism-recommendations/', to: '/docs/sac/shared-commitment/definition-chronic-absenteeism' },
          { from: '/survey/references-for-survey-reports/', to: '/docs/survey/references' },
          { from: '/full-interactive-report-visuals/', to: '/docs/survey/interactive-report' },
          { from: '/survey/experience-of-educational-exclusion/', to: '/docs/survey/punitive-approaches' },
          { from: '/submit-your-story/thank-you-for-submitting-your-story/', to: '/stories' },
          { from: '/search/', to: '/docs/sac/shared-commitment/research' },
          { from: '/2022/10/19/being-denied-the-right-to-learn/', to: '/stories' },
          { from: '/2024/03/28/my-teen-school-phobia/', to: '/stories' },
          { from: '/2024/03/28/the-anxious-child-undiagnosed-by-clueless-elementary-school-staff/', to: '/stories' },
          { from: '/resources/courses-school-exclusion-refusal/', to: '/docs/sac/resources-training' },
          { from: '/resources/courses-school-exclusion-refusal/school-refusal-professional-certificate-training-course/', to: '/docs/sac/resources-training' },
          { from: '/resources/courses-school-exclusion-refusal/school-refusal-school-avoidance-training-courses-and-workshops-for-education-professionals/', to: '/docs/sac/resources-training' },
          { from: '/2024/03/28/training-resources-for-school-teachers-on-addressing-school-avoidance-school-refusal-and-school-phobia/', to: '/stories' },
          { from: '/2024/03/25/join-our-april-2024-school-phobia-training-course/', to: '/stories' },
          { from: '/2024/02/05/professional-certificate-course-and-resources-in-school-phobia-avoidance-and-absenteeism/', to: '/stories' },
          { from: '/2024/02/16/school-refusal-school-avoidance-resources-for-educators/', to: '/stories' },
          { from: '/2024/01/04/strategies-for-addressing-school-refusal-school-avoidance-school-phobia/', to: '/stories' },
          { from: '/2026/03/06/resources-for-parents-caregivers/', to: '/stories' },
          { from: '/resources-for-parents-caregivers/', to: '/docs/sac/resources-training' }
        ],
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'School Attendance Challenges',
        logo: {
          alt: 'YMHC Site Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'sacSidebar',
            position: 'left',
            label: 'Understanding SAC',
          },
          {
            type: 'docSidebar',
            sidebarId: 'surveySidebar',
            position: 'left',
            label: 'National Survey',
          },
          { to: '/stories', label: 'Story Wall', position: 'left' },
          {
            href: 'https://ymhc.ngo/',
            label: 'ymhc.ngo',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'SAC',
                to: '/docs/sac/shared-commitment',
              },
              {
                label: 'Survey',
                to: '/docs/survey/introduction',
              },
            ],
          },
          {
            title: 'Youth Mental Health Canada',
            items: [
              {
                label: 'YMHC home',
                href: 'https://ymhc.ngo/',
              },
              {
                label: 'Follow us',
                href: 'https://linktr.ee/ymhc',
              },
            ],
          },
          {
            title: 'Policies & Contact',
            items: [
              {
                label: 'Privacy policy',
                href: 'https://ymhc.ngo/policies/privacy-policy',
              },
              {
                label: 'Terms of service',
                href: 'https://ymhc.ngo/policies/terms-of-service',
              },
              {
                label: 'Contact information',
                href: 'https://ymhc.ngo/policies/contact-information',
              },
              {
                label: 'Land Acknowledgement and Commitment',
                href: 'https://ymhc.ngo/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Youth Mental Health Canada.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
