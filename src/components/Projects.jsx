function Projects() {
  const sections = [
    { title: "Porject number 1:", width: "w-[300px]", height: "h-[400px]" },
    { title: "Porject number 1:", width: "w-[400px]", height: "h-[300px]", margin:"mt-12" },
    { title: "Porject number 1:", width: "w-[400px]", height: "h-[400px]" },
    { title: "Porject number 1:", width: "w-[400px]", height: "h-[300px]" },
    { title: "Porject number 1:", width: "w-[300px]", height: "h-[300px]", margin:"-mt-12 lg:mt-4"},
  ];

  
  return (
    <div className="bg-[#242735] h-auto text-white">
      <div className="flex flex-wrap justify-evenly border">
                {sections.map((section, index) => (
          <div
            key={index}
            className={`border ${section.width} ${section.height} ${section.margin} mt-4 rounded-2xl flex justify-center items-center`}
          >
            <h3 className="font-semibold text-center align-middle">{section.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
