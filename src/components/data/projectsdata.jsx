import GL from '../../assets/thumbnail/Thumbnail.png';
import GM from '../../assets/thumbnail/Thumbnail2.jpg';
import U4 from '../../assets/thumbnail/Thumbnail3.png';
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
import U41 from '../../assets/4U/1.png'
import U42 from '../../assets/4U/2.png'
import U43 from '../../assets/4U/3.png'
import U44 from '../../assets/4U/4.png'
import U45 from '../../assets/4U/5.png'
import U46 from '../../assets/4U/6.png'



export const projectsData = [
  {
    id: 1,
    title: 'Gray Lemon: Workforce UX Reinvented',
    description:'Turning workplace complexity into an elegant, user-friendly experience for teams.',
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
  {
    id: 3,
    title: '4U Grocery // POS and Inventory Management System',
    description: 'Manages checkout transactions and monitors stock levels efficiently.',
    image: U4,
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
        'I created a modern interface for Gray Lemon Tech’s employee system, turning it into a personal project to fully realize my design vision.',
      caption:
        'Future-ready UI for effortless workforce management.',
      github: 'https://github.com/example/gray-lemon-figma',
      website: 'https://graylemon.example.com',
      main: GL,
      images: [GL1, GL2, GL3, GL4, GL5, GL6],
      client: 'Concept',
      collaborators: ['Nicklaus Ling'],
      industry: 'Enterprise Solutions',
    },
  ],
  web: [
    {
      id: 2,
      title: 'Gentle Monster Re-Engineered Website',
      description:
        'A sleek e-commerce concept for Gentle Monster, focused on clean design and seamless user experience.',
      caption: 'A fresh digital face for an iconic brand',
      github: 'https://github.com/example/gray-lemon-figma',
      website: 'https://graylemon.example.com',
      main: GM,
      client: 'Concept',
      images: [GM1, GM2, GM3, GM4, GM5],
      collaborators: ['Nicklaus Ling'],
      industry: 'Fashion & Retail',
    },{
      id: 3,
      title: '4U Grocery // POS and Inventory Management System',
      description:
        'A clean, efficient web app for handling grocery sales and inventory in real-time.',
      caption: 'Our first full-stack grocery system—designed from scratch.',
      github: 'https://github.com/mnsling/4U-POS-Website',
      website: 'https://4U.example.com',
      main: U4,
      client: '4U Grocery (Not Deployed)',
      images: [U41, U42, U43, U44, U45, U46],
      collaborators: ['Nicklaus Ling','George Balungay', 'Daniel Gallego'],
      industry: 'Retail',
    },
  ],
  branding: [],
  graphicdesign: [],
  motiondesign: [],
};