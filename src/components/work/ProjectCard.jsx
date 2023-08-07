import React from 'react';

const ProjectCard = ({ title, description, technologies, imageUrl, link }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300">
      <img src={imageUrl} alt={title} className="mb-4 rounded-lg" />
      <h3 className="text-xl font-semibold mb-2 text-white "><a href={link}>{title}</a></h3>
      <p className="text-white mb-2">{description}</p>
      <div className="flex flex-wrap gap-1">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-gray-200 text-gray-700 text-sm px-2 py-1 rounded-md"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
