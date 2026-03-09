// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  sacSidebar: [
    {
      type: 'category',
      label: 'Shared Commitment to Change',
      link: {type: 'doc', id: 'sac/shared-commitment'},
      items: [
        'sac/shared-commitment/what-do-we-know',
        'sac/shared-commitment/language-use',
        'sac/shared-commitment/ymhc-asap-model',
        'sac/shared-commitment/student-lived-experience',
        'sac/shared-commitment/research'
      ],
    },
    'sac/families',
    'sac/schools',
    'sac/student-well-being',
    'sac/national-survey',
    {
      type: 'category',
      label: 'Resources & Training',
      link: {type: 'doc', id: 'sac/resources-training'},
      items: [
        'sac/resources-training/tier-1',
        'sac/resources-training/tier-2-3',
        'sac/resources-training/virtual-workshops',
        'sac/resources-training/online-courses'
      ],
    },
    'sac/about',
    'sac/contact',
  ],
  surveySidebar: [
    'survey/introduction',
    'survey/background',
    'survey/participants',
    'survey/protective-factors',
    'survey/disability-support',
    'survey/parents-experience',
    'survey/punitive-approaches',
    'survey/needs-based-approach',
    'survey/conclusion',
    'survey/recommendations',
    'survey/references',
    'survey/interactive-report',
    'survey/participate'
  ]
};

export default sidebars;
