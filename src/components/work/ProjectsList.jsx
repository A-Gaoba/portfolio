import ProjectCard  from './ProjectCard';

const ProjectsList = () => {
  const projects = [
    {
      title: 'To Russai',
      description: 'To Russai offers services to help students who aspire to study in Russian universities. The platform provides valuable resources and guidance to facilitate the application process, visa procedures, and university selection.',
      technologies: ['React', 'Tailwind CSS', 'API Integration'],
      imageUrl: '/projectsImages/toru.png',
      link: "https://toru.netlify.app/"
    },
    {
      title: 'Ali Alnono',
      description: 'This project showcases the achievements and journey of Ali Alnono, a prominent football player from Yemen. It highlights his remarkable career, notable matches, and contributions to the sport in Yemen.',
      technologies: ['React', 'Tailwind CSS', 'Multimedia'],
      imageUrl: '/projectsImages/alnono.png',
      link: "https://alialnono.vercel.app/"
    },
    {
      title: 'GaobaVid - YouTube Clone',
      description: 'GaobaVid is a YouTube clone that replicates the core features of the original platform, allowing users to browse and watch videos, as well as upload and share their own content. The project demonstrates front-end development skills and API interaction.',
      technologies: ['React', 'Tailwind CSS', 'YouTube API'],
      imageUrl: '/projectsImages/gaobavide.png',
      link: "https://gaobavid.netlify.app/"
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default ProjectsList;
