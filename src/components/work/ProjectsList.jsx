import ProjectCard  from './ProjectCard';
import { motion } from "framer-motion";
const ProjectsList = () => {
  const projects = [
    {
      title: 'Sharaf Almahaqeri',
      description: "Sharaf Almahaqeri's portfolio website showcases his skills, achievements, and information",
      technologies: ['React', 'Tailwind CSS'],
      imageUrl: '/projectsImages/sharaf.png',
      link: "https://almahaqeri.vercel.app/"
    },
    {
      title: 'To Russai',
      description: 'Assists students applying to Russian universities by providing application guidance, visa help, and university selection',
      technologies: ['React', 'Tailwind CSS'],
      imageUrl: '/projectsImages/toru.png',
      link: "https://toru.netlify.app/"
    },
    {
      title: 'Ali Alnono',
      description: 'Showcases the journey of football player Ali Alnono from Yemen, highlighting his career, matches, and contributions.',
      technologies: ['React', 'Tailwind CSS', 'Multimedia'],
      imageUrl: '/projectsImages/alnono.png',
      link: "https://alialnono.vercel.app/"
    },
    {
      title: 'GaobaVid - YouTube Clone',
      description: 'YouTube clone that replicates the core features of the original platform, allowing users to browse and watch videos',
      technologies: ['React', 'Material UI', 'YouTube API'],
      imageUrl: '/projectsImages/gaobavide.png',
      link: "https://gaobavid.netlify.app/"
    },
  ];

  return (
    <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </motion.div>
  );
};

export default ProjectsList;
