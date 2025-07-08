import GL from '../../assets/thumbnail/Thumbnail2.png';
import GM from '../../assets/thumbnail/Thumbnail.jpg';
import GM1 from '../../assets/GentleMonsterWebsite/1.png'
import GM2 from '../../assets/GentleMonsterWebsite/2.png'
import GM3 from '../../assets/GentleMonsterWebsite/3.png'
import GM4 from '../../assets/GentleMonsterWebsite/4.png'
import GM5 from '../../assets/GentleMonsterWebsite/5.png'
import GL1 from '../../assets/GrayLemon/1.png'
import GL2 from '../../assets/GrayLemon/2.png'
import GL3 from '../../assets/GrayLemon/3.png'
import GL4 from '../../assets/GrayLemon/4.png'
import GL5 from '../../assets/GrayLemon/5.png'
import GL6 from '../../assets/GrayLemon/6.png'


export const projectsData = [
  {
    id: 1,
    title: 'Gray Lemon: Workforce UX Reinvented',
    description:
      'Turning workplace complexity into an elegant, user-friendly experience for teams.',
    image: GL,
    link: '/projects',
  },
  {
    id: 2,
    title: 'Gentle Monster Re-Engineered Website',
    description: 'An icon reborn for the web.',
    image: GM,
    link: '/projects',
  },
];

// NEW - Grouped projects by category
export const projectsByCategory = {
  uiux: [
    {
      id: 1,
      title: 'Gray Lemon: Workforce UX Reinvented',
      description:
        'I designed a brand new, sleek interface for Gray Lemon Tech’s employee management system. During my internship, I didn’t have enough time to revamp the entire platform, so I turned it into a personal project to fully realize my vision.',
      caption:
        'Future-ready UI for effortless workforce management.',
      github: 'https://github.com/example/gray-lemon-figma',
      website: 'https://graylemon.example.com',
      main: GL,
      images: [GL1, GL2, GL3, GL4, GL5, GL6],
      client: 'Concept',
      service: 'Frontend Development, UI Engineering',
      industry: 'Enterprise Solutions',
    },
  ],
  frontend: [
    {
      id: 2,
      title: 'Gentle Monster Re-Engineered Website',
      description:
        'This is my interpretation of a sleek, contemporary e-commerce platform designed for an iconic brand like Gentle Monster. The focus is on a clean aesthetic and seamless user experience, though backend functionality and database integration are still in progress.',
      caption: 'A fresh digital face for an iconic brand',
      github: 'https://github.com/example/gray-lemon-figma',
      website: 'https://graylemon.example.com',
      main: GM,
      client: 'Concept',
      images: [GM1, GM2, GM3, GM4, GM5],
      service: 'Web Development, Digital Branding',
      industry: 'Fashion & Retail',
    },
  ],
  branding: [],
  graphicdesign: [],
  motiondesign: [],
};