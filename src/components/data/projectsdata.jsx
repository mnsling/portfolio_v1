import GL from '../../assets/thumbnail/Thumbnail2.png';
import GM from '../../assets/thumbnail/Thumbnail.jpg';

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
  frontend: [
    {
      id: 1,
      title: 'Gray Lemon: Workforce UX Reinvented',
      description:
        'Engineered a future-ready UI for employee management, transforming complex data into seamless digital experiences.',
      github: 'https://github.com/example/gray-lemon-figma',
      website: 'https://graylemon.example.com',
      image: GL,
      video: '/videos/gray-lemon-demo.mp4',
      link: '/projects',
    },
    {
      id: 2,
      title: 'Gentle Monster Re-Engineered Website',
      description: 'A fresh digital face for an iconic brand',
      github: 'https://github.com/example/gray-lemon-figma',
      website: 'https://graylemon.example.com',
      image: GM,
      video: '/videos/gray-lemon-demo.mp4',
      link: '/projects',
    },
  ],
  uiux: [],
  branding: [],
  graphicdesign: [],
  motiondesign: [],
};
