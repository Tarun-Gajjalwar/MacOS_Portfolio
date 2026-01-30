const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Nov 30, 2025",
    title:
      "The Indian Express : What It Is, Why It Matters, and How to Master It",
    image: "/images/blog1.png",
    link: "https://indianexpress.com/",
  },
  {
    id: 2,
    date: "Nov 28, 2025",
    title: "The Hitavada :  Breakdown of JavaScript Logic and Core Concepts",
    image: "/images/blog2.png",
    link: "https://www.thehitavada.com/",
  },
  {
    id: 3,
    date: "Nov 29, 2025",
    title: "The Hindu :  of HTML’s Foundations and Page Structure",
    image: "/images/blog3.jpg",
    link: "https://www.thehindu.com/",
  },
  {
    id: 4,
    date: "Nov 29, 2025",
    title: "The Times of India :  Breakdown of HTML’s Foundations and Page Structure",
    image: "/images/blog3.jpg",
    link: "https://timesofindia.indiatimes.com/us",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React.js"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "CSS Modules"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express"],
  },
  {
    category: "Database",
    items: ["MongoDB"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "VS Code", "Figma", "Postman"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/Tarun-Gajjalwar",
  },
  {
    id: 2,
    text: "Platform",
    icon: "/icons/atom.svg",
    bg: "#4bcb63",
    link: "#",
  },
  {
    id: 3,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "https://x.com/gajjalwar46240",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/tarun-gajjalwar/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.jpg",
  },
  {
    id: 2,
    img: "/images/Tarun1.png",
  },
  {
    id: 3,
    img: "/images/gal3.jpg",
  },
  {
    id: 4,
    img: "/images/gal4.jpg",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Zentry",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "Zentry Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-5",
          description: [
            "The Zentry is a visually striking, futuristic landing page designed to capture the essence of next-generation Artificial Intelligence",
            "Moving away from standard corporate layouts, it features a rich dark-mode aesthetic with vibrant gradients, clean typography, and a fully responsive grid that adapts to any screen size.",
            "Think of it as a digital architectural model—it captures the visual complexity and structural integrity of a high-tech platform, focusing purely on the frontend presentation",
          ],
        },
        {
          id: 2,
          name: "Zentry.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://zentry-tarun-gajjalwar.netlify.app/",
          position: "top-5 right-10",
        },
        {
          id: 4,
          name: "zentry.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-5 right-50",
          imageUrl: "/images/project-1.png",
        },
        {
          id: 5,
          name: "Code",
          icon: "/images/github.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/raeesmughal/01-gpt3-projects-react-jsMastery",
          position: "top-50 right-50",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "Tarun Restaurant UI",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[25vh] left-7",
      children: [
        {
          id: 1,
          name: "GERICHT Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "The Gericht UI is a visually rich, premium landing page that captures the elegance and luxury of a high-end fine dining establishment.",
            "It delivers an immersive, sophisticated atmosphere through a dark, textured background, classic typography, and gold-accented styling. Every section—from the menu to the 'Chef's Words'—is presented with the polish expected of a five-star venue.",
          ],
        },
        {
          id: 2,
          name: "gericht.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://raeesmughal-gericht.netlify.app/",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "gericht.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/project-2.png",
        },
        {
          id: 5,
          name: "Code",
          icon: "/images/github.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/raeesmughal/Gericht-projects-react-jsMastery",
          position: "top-60 left-5",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Tarun App UI",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[60vh] left-7",
      children: [
        {
          id: 1,
          name: "GLINT Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "The Glint UI is a dynamic and minimalist landing page for a creative agency, showcasing a brand focused on modernity and digital excellence.",
            "It uses bold, stark contrast (black, white, and electric green) to guide the user's eye, featuring seamless full-width sections, a clean gallery grid, and engaging counter components.",
            "Imagine a high-end, contemporary art gallery—the space is designed to be minimal and clean, ensuring the focus remains entirely on the high-quality content and portfolio pieces.",
          ],
        },
        {
          id: 2,
          name: "glint-colorlib.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://glint-colorlib.netlify.app/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "homepage.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-3.png",
        },
        {
          id: 5,
          name: "Code",
          icon: "/images/github.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/raeesmughal/GLINT-clone-weeklyProject-2",
          position: "top-60 right-20",
        },
      ],
    },
    // ▶ Project 4
    {
      id: 8,
      name: "Fuck",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[60vh] left-7",
      children: [
        {
          id: 1,
          name: "GLINT Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "The Glint UI is a dynamic and minimalist landing page for a creative agency, showcasing a brand focused on modernity and digital excellence.",
            "It uses bold, stark contrast (black, white, and electric green) to guide the user's eye, featuring seamless full-width sections, a clean gallery grid, and engaging counter components.",
            "Imagine a high-end, contemporary art gallery—the space is designed to be minimal and clean, ensuring the focus remains entirely on the high-quality content and portfolio pieces.",
          ],
        },
        {
          id: 2,
          name: "glint-colorlib.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://glint-colorlib.netlify.app/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "homepage.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-3.png",
        },
        {
          id: 5,
          name: "Code",
          icon: "/images/github.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/raeesmughal/GLINT-clone-weeklyProject-2",
          position: "top-60 right-20",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me-bnw.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/Tarun1.jpg",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/Raees4.jpg",
    },
    {
      id: 3,
      name: "office-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/Raees5.jpg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "✨ Meet the Developer and Designer",
      image: "/images/Tarun1.png",
      description: [
        "Hey! I'm Tarun, a beginner/inter-level Full Stack Developer specializing in the MERN stack (React, Node.js). I enjoy building sleek, interactive websites, with a portfolio of over 10 personal projects under my belt",
        "My true passion is UX/UI design. I believe a seamless user experience and stunning interface are what truly make an application great—and I'm more driven by design than by the coding itself.",
        "When I'm not developing, you'll find me meticulously adjusting margins and contemplating whether I really need another Figma plugin (the answer is always yes)."
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "portfolio-2024.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "typicalUI.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };