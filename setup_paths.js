const fs = require('fs');
const path = require('path');

const docsDir = path.join(__dirname, 'docs');

const files = [
  'sac/shared-commitment/what-do-we-know.md',
  'sac/shared-commitment/language-use.md',
  'sac/shared-commitment/ymhc-asap-model.md',
  'sac/shared-commitment/student-lived-experience.md',
  'sac/shared-commitment/research.md',
  'sac/families.md',
  'sac/schools.md',
  'sac/student-well-being.md',
  'sac/national-survey.md',
  'sac/resources-training/tier-1.md',
  'sac/resources-training/tier-2-3.md',
  'sac/resources-training/virtual-workshops.md',
  'sac/resources-training/online-courses.md',
  'sac/about.md',
  'sac/contact.md',
  'survey/introduction.md',
  'survey/background.md',
  'survey/participants.md',
  'survey/protective-factors.md',
  'survey/disability-support.md',
  'survey/parents-experience.md',
  'survey/punitive-approaches.md',
  'survey/needs-based-approach.md',
  'survey/conclusion.md',
  'survey/references.md'
];

const fileTitles = {
  'sac/shared-commitment/what-do-we-know.md': 'What Do We Know About School Attendance in Canada?',
  'sac/shared-commitment/language-use.md': 'Language Use',
  'sac/shared-commitment/ymhc-asap-model.md': 'YMHC ASAP Model',
  'sac/shared-commitment/student-lived-experience.md': 'Student Lived Experience',
  'sac/shared-commitment/research.md': 'Research',
  'sac/families.md': 'Families',
  'sac/schools.md': 'Schools',
  'sac/student-well-being.md': 'Student Well-Being',
  'sac/national-survey.md': 'National Survey',
  'sac/resources-training/tier-1.md': 'Tier 1 Resources (Print, Digital Fillable, Photocopiable)',
  'sac/resources-training/tier-2-3.md': 'Tier 2 & 3 Resources (Print, Digital Fillable, Photocopiable)',
  'sac/resources-training/virtual-workshops.md': 'Virtual Workshops',
  'sac/resources-training/online-courses.md': 'Online Courses',
  'sac/about.md': 'About',
  'sac/contact.md': 'Contact',
  'survey/introduction.md': 'Survey Introduction',
  'survey/background.md': 'Background on School Attendance Challenges',
  'survey/participants.md': 'Participants Background and Demographics',
  'survey/protective-factors.md': 'School Mental Wellness Protective Factors',
  'survey/disability-support.md': 'School Experience: Disability Support',
  'survey/parents-experience.md': 'The Experience of Parents',
  'survey/punitive-approaches.md': 'Punitive Approaches and Experience of Educational Exclusion',
  'survey/needs-based-approach.md': 'A Needs-Based Approach',
  'survey/conclusion.md': 'Conclusion',
  'survey/references.md': 'References for Survey Reports'
};

files.forEach(file => {
  const fullPath = path.join(docsDir, file);
  const dir = path.dirname(fullPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  const title = fileTitles[file];
  const content = "---\nsidebar_label: '" + title.replace(/'/g, "\\'") + "'\ntitle: '" + title.replace(/'/g, "\\'") + "'\n---\n\n# " + title + "\n\nThis page is empty.";
  fs.writeFileSync(fullPath, content);
});

console.log('Done!');
