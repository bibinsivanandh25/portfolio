import project1 from '../assets/projects/project-1.jpg';
import project2 from '../assets/projects/project-2.jpg';
import project3 from '../assets/projects/project-3.jpg';
import project4 from '../assets/projects/project-4.jpg';
import project5 from '../assets/projects/project-5.jpg';

export const HERO_CONTENT = `I am a passionate front-end developer with a focus on crafting responsive and user-friendly web applications. With 2 years of hands-on experience, I have honed my skills in technologies like React, HTML, CSS, and JavaScript. My goal is to leverage my expertise to create intuitive, high-performance user interfaces that deliver exceptional user experiences and contribute to the success of the product.`;

export const ABOUT_TEXT = `I am a dedicated and versatile front-end developer with a passion for creating efficient, intuitive, and user-friendly web applications. With 2 years of professional experience, I have worked with a variety of technologies, including React, JavaScript, and HTML/CSS. My journey in front-end development began with a curiosity for how user interfaces work, and it has evolved into a career where I continuously strive to enhance user experience through clean, responsive designs. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality, scalable solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  // {
  //   year: '2023 - Present',
  //   role: 'Senior Full Stack Developer',
  //   company: 'Google Inc.',
  //   description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
  //   technologies: ['Javascript', 'React.js', 'Next.js', 'mongoDB'],
  // },
  {
    year: '2021 - 2023',
    role: 'Frontend Developer',
    company: 'Test Yantra Software Solutions Pvt LTD',
    description: `Designed and developed user interfaces for web applications using React. Collaborated closely with backend developers to integrate frontend components with APIs. Implemented responsive designs and optimized frontend performance for better user experience.`,
    technologies: ['HTML', 'CSS', 'Javascript', 'React.js', 'React Native'],
  },
  // {
  //   year: '2021 - 2022',
  //   role: 'Full Stack Developer',
  //   company: 'Facebook',
  //   description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
  //   technologies: ['Python', 'Svelte', 'Three.js', 'Postgres'],
  // },
  // {
  //   year: '2020 - 2021',
  //   role: 'Software Engineer',
  //   company: 'Paypal',
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ['Ruby', 'Rails', 'PHP', 'Sqlite'],
  // },
];

export const PROJECTS = [
  {
    title: 'Omnifood: Healthy, Personalized Meals Delivered Daily',
    image: project1,
    description: `Omnifood’s landing page showcases its personalized food subscription service, offering healthy meals delivered daily. It highlights key features like meal customization, flexible plans, customer testimonials, and a free first meal offer, catering to various diets with a focus on convenience and sustainability.`,
    technologies: ['HTML', 'CSS'],
    githubUrl: 'https://github.com/bibinsivanandh25/omni-food-app',
    liveDemoURL: 'https://omni-food-application.vercel.app/',
  },
  {
    title: 'The Wild Oasis: Hotel Booking Application Dashboard',
    image: project2,
    description: `The Wild Oasis hotel booking dashboard offers an intuitive interface for managing reservations, viewing booking details, and checking payment status. With real-time updates and personalized recommendations, it ensures efficient booking management and a smooth user experience.`,
    technologies: [
      'HTML',
      'CSS',
      'React.js',
      'Styled-Components',
      'React-Query',
      'Supabase',
    ],
    githubUrl: 'https://github.com/bibinsivanandh25/the-react-wild-oasis',
    liveDemoURL: 'https://the-react-wild-oasis.vercel.app',
  },
  {
    title: 'Fast React Pizza Co.: Seamless Pizza Ordering and Delivery',
    image: project3,
    description: `Fast React Pizza Co. offers a seamless pizza ordering experience with quick delivery. Customers are greeted and prompted to enter their name to start the process. The platform ensures high-quality pizzas, from oven to doorstep, with easy order tracking and a user-friendly interface for a fun and convenient ordering experience.`,
    technologies: ['HTML', 'CSS', 'React.js'],
    githubUrl: 'https://github.com/bibinsivanandh25/fast-react-pizza',
    liveDemoURL: 'https://fast-react-pizzas.vercel.app/',
  },
  {
    title: 'Gerícht: Fine Dining Experience',
    image: project4,
    description: `Gerícht offers a premium dining experience with a focus on fine food and exceptional service. The landing page features the menu, today's specials, and a section for awards and recognition. Guests can easily book a table, explore the photo gallery, or subscribe to the newsletter for updates. It’s designed to showcase the restaurant’s unique offerings and invite customers to experience exquisite dining.`,
    technologies: ['HTML', 'CSS', 'React.js', 'Tailwind css'],
    githubUrl: 'https://github.com/bibinsivanandh25/restaurant_ui_reactjs',
    liveDemoURL: 'https://restaurant-ui-reactjs.vercel.app/',
  },
  {
    title: 'MovieFlip — Search, Discover & Explore Movies ',
    image: project5,
    description: `MovieFlip is a React application that fetches and displays movie data from the TMDB API, with trending movies stored in Appwrite for persistence. Users can search for movies, navigate through paginated results, and view detailed movie information.`,
    technologies: [
      'HTML',
      'CSS',
      'React.js',
      'Tailwind css',
      'React Query',
      'Supbase',
      'TMDB API',
    ],
    githubUrl: 'https://github.com/bibinsivanandh25/movieflip',
    liveDemoURL: 'https://movieflipv1.vercel.app/',
  },
];

export const CONTACT = {
  email: 'bibincs97@gmail.com',
  linkedIn: 'https://www.linkedin.com/in/bibincs/ ',
};
