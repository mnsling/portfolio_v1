import GL from '../../assets/thumbnail/Thumbnail.png';
import GM from '../../assets/thumbnail/Thumbnail2.png';
import U4 from '../../assets/thumbnail/Thumbnail3.png';
import CS from '../../assets/thumbnail/Thumbnail4.png'
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
import CS1 from '../../assets/CalaSense/1.png'
import CS2 from '../../assets/CalaSense/2.png'



export const projectsData = [
  {
    id: 1,
    title: 'Calasense Detection Mobile Application',
    description: 'Designed in Figma and development now fully completed.',
    image: CS,
    link: '/projects',
  },
  {
    id: 2,
    title: 'Gray Lemon: Workforce UX Reinvented',
    description: 'Turning workplace complexity into an elegant, user-friendly experience for teams.',
    image: GL,
    link: '/projects',
  },
  {
    id: 3,
    title: 'Gentle Monster Re-Engineered Website',
    description: 'An icon reborn for the web.',
    image: GM,
    link: '/projects',
  },
  {
    id: 4,
    title: 'Sleek Interface for Store Management',
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
      title: 'Calamansi Disease Detection Mobile Application',
      title2: 'A Smarter Way to Monitor Leaves',
      description:
        'Our team developed a mobile application for detecting diseases in calamansi leaves as part of our thesis project. After completing a fully interactive prototype in Figma, we are now transitioning the design into a functional, coded application. The app aims to help farmers and gardeners monitor plant health and take preventive measures to maintain healthy crops.',
      caption:
        'AI-powered leaf health monitoring.',
      links: [
        { label: "CALASENSE GITHUB LINK", url: "https://github.com/mnsling/calasense_mobileapp" },
        { label: "CALASENSE FIGMA DESIGN", url: "https://www.figma.com/design/0whbxTdm8MGfQU0saaKu5b/CalaSense-Mobile-App?node-id=0-1&t=Ha8XI6ZVI2sYs5LG-1" }
      ],
      main: CS,
      images: [CS1, CS2],
      client: 'Ateneo de Davao University',
      collaborators: [
        { name: 'Nicklaus Ling', role: 'UI/UX Designer, Fullstack Developer' },
        { name: 'Ram Nacar', role: 'Machine Learning Engineer' },
        { name: 'Jose Idpan', role: 'Machine Learning Engineer' }
      ],
      industry: 'Agricultural Technology',
      figmaEmbed: "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/0whbxTdm8MGfQU0saaKu5b/CalaSense-Mobile-App"
    },
    {
      id: 2,
      title: 'Gray Lemon: Employee Management System',
      title2: 'From Tasks to Teams: All in One Place',
      description:
        'I redesigned Gray Lemon Tech’s employee management system with a modern and intuitive interface, transforming it into a personal project to fully realize my design vision. The project focuses on streamlining employee workflows, enhancing usability, and creating a clean, visually appealing experience. By reimagining the system’s interface, I aimed to make complex tasks—like tracking attendance, managing profiles, and monitoring performance—simpler and more efficient for users, while maintaining a consistent and professional aesthetic throughout.',
      caption:
        'Future-ready UI for effortless workforce management.',
      links: [
        { label: "GRAY LEMON EMPLOYEE MANAGEMENT SYSTEM FIGMA DESIGN", url: "https://www.figma.com/design/iWhWtMCNyWD917usvzgMSq/Gray-Lemon-Dashboard?node-id=0-1&t=tKcu9Dkq16xtqF1w-1" }
      ],
      main: GL,
      images: [GL1, GL2, GL3, GL4, GL5, GL6],
      client: 'Concept',
      collaborators: [
        { name: 'Nicklaus Ling', role: 'UI/UX Designer, Fullstack Developer' },
      ],
      industry: 'Enterprise Solutions',
      figmaEmbed: "https://embed.figma.com/design/iWhWtMCNyWD917usvzgMSq/Gray-Lemon-Dashboard?node-id=0-1&embed-host=share"
    },
  ],
  web: [
    {
      id: 3,
      title: 'Gentle Monster: Vision Recrafted',
      title2: 'Redefining Online Fashion Spaces',
      description:
        'A sleek e-commerce concept for Gentle Monster, designed with a clean, minimalist aesthetic and a touch of edgy style to reflect the Tekken collaboration. The project emphasizes intuitive navigation, striking product displays, and subtle, bold interactions to create a modern, immersive shopping experience that aligns with the brand’s distinctive and dynamic identity.',
      caption: 'A fresh digital face for an iconic brand',
      links: [
        { label: "GENTLE MONSTER ver.LING GITHUB LINK", url: "https://github.com/mnsling/gentlemonster" },
        { label: "GENTLE MONSTER REWORK WEBSITE", url: "https://gentlemonster-v1.vercel.app/" },
        { label: "GENTLE MONSTER FIGMA DESIGN", url: "https://www.figma.com/design/GXe1M40aZyil2JfN1x4Yz2/Gentle-Monster-Website?node-id=94-3&t=nyLxiEMXK9Jl2VIJ-1" }
      ],
      main: GM,
      client: 'Concept',
      images: [GM1, GM2, GM3, GM4, GM5],
      collaborators: [
        { name: 'Nicklaus Ling', role: 'UI/UX Designer, Fullstack Developer' },
      ],
      industry: 'Fashion & Retail',
      figmaEmbed: "https://embed.figma.com/design/GXe1M40aZyil2JfN1x4Yz2/Gentle-Monster-Website?node-id=94-3&embed-host=share"

    }, {
      id: 4,
      title: '4U Grocery POS & Inventory Management System',
      title2: 'Inventory and Sales, Simplified',
      description:
        'A clean and efficient web application for managing grocery sales and inventory in real-time. Our team developed this POS and inventory management system to match the store owner’s preferences, focusing on simplicity, organization, and a modern, minimalistic design. The system streamlines daily operations, reduces hassle, and provides an intuitive interface for managing products, tracking sales, and maintaining stock with ease.',
      caption: 'Tailored for Smarter Retail Management',
      links: [
        { label: "4U POS & INVENTORY MANAGEMENT SYSTEM GITHUB LINK", url: "https://github.com/mnsling/4U-POS-Website" },
      ],
      main: U4,
      client: '4U Grocery (Not Deployed)',
      images: [U41, U42, U43, U44, U45, U46],
      collaborators: [
        { name: 'Nicklaus Ling', role: 'UI/UX Designer, Frontend Developer' },
        { name: 'George Balungay', role: 'Backend Developer' },
        { name: 'Daniel Gallego', role: 'Backend Development' }
      ],
      industry: 'Retail',
    },
  ],
  branding: [],
  graphicdesign: [],
  motiondesign: [],
};