import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `I am a passionate web developer with a strong foundation in front-end and back-end technologies. Currently in my 4th year of B.Tech, I have honed my skills in HTML, CSS, JavaScript, React, Tailwind, and SQL. My enthusiasm for technology drives me to continuously learn and apply best practices in data structures and algorithms. I am eager to leverage my knowledge and creativity to build dynamic and responsive web applications that enhance user experiences and meet business objectives.`;

export const ABOUT_TEXT = `I am a dedicated and versatile web developer with a passion for creating efficient and user-friendly web applications. Currently in my 4th year of B.Tech, I have developed a strong foundation in technologies such as HTML, CSS, JavaScript, React, Tailwind, and SQL. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions.
Outside of coding, I love playing games like Sudoku, chess, and carom, staying active,and exploring new technologies.`;

export const EXPERIENCES = [
  {
    year: "July 2024  - Present",
    role: "Web Developer Intern",
    company: "Celebal Technologies.",
    description: `Created a functional website for a company in just 3 days, using a Figma design as a reference. I was responsible for developing and implementing key features, including responsiveness to ensure optimal performance across devices, and a pop-up form modal with form validation to enhance user interaction. Additionally, I incorporated accordions for efficient content display. `,
    technologies: ["Javascript", "React.js", "Tailwind"],
  },
  {
    year: "July 2023 - September 2023",
    role: "Frontend Developer",
    company: "SIBILIZE",
    description: `Designed and developed user interfaces for web applications using React. Worked closely with other team members to ensure smooth and efficient development. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "React.js"],
  },
  {
    year: "March 2023 - March 2024",
    role: "Graphic Designer",
    company: "IEEE MSIT",
    description: `Contributed as a graphic designer, developing and designing various posts, brochures, and posters using Canva and Adobe Illustrator. This role significantly boosted my creative skills and helped me in conceptualizing and producing high-quality designs. The experience also enhanced my ability to think creatively and design visually appealing content.`,
    technologies: ["Adobe Illustrator", "Canva"],
  },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];

export const PROJECTS = [
  {
    title: "Portfolio Website",
    image: project3,
    link : "https://tishagaur.vercel.app/",
    description:
      "Created a dynamic and interactive portfolio website using React and Tailwind CSS. The site showcases a comprehensive set of my projects and internships, highlighted with engaging animations to enhance user experience. It features a Contact Me form that seamlessly integrates with a Node.js backend, enabling visitors to send messages directly to my email. This project demonstrates my skills in front-end development, my ability to create responsive and visually appealing interfaces, and my proficiency in backend integration.",
    technologies: ["Node JS", "React JS", "Talwind CSS"],
  },
  {
    title: "Uifry",
    image: project1,
    link : "https://uifry-tishagaur.vercel.app/",
    description:
      "Developed a fully responsive and interactive website from figma design with multiple design effects using tailwind css for a company.",
    technologies: ["HTML", "Tailwind", "React", "Figma"],
  },
  {
    title: "Life-Lived-Till-Date",
    image: project2,
    link : "https://tisha-gaur.github.io/Life-Lived-Till-Date/",
    description:
      "This project provides a unique way to visualize the total time one has spent on Earth by displaying the duration in years, months, days, hours, minutes, and seconds. The interactive interface offers a real-time update of the elapsed time, making it both informative and engaging",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  
  {
    title: "Move With Us",
    image: project4,
    link : "https://tisha-gaur.github.io/startup/?#",
    description:
      "I developed a professional and responsive website for a startup using Bootstrap, HTML, and CSS. The site features intuitive navigation, mobile-friendly design, and well-structured content to effectively showcase the startup's services and products.",
    technologies: ["HTML", "CSS", "Bootstrap"],
  },
];

export const CONTACT = {
  address: "@tisha98gaur@gmail.com",
  phoneNo: "Delhi, India",
  
};
