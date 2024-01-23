const ProjectEntry = ({ src, name, description, url_demo, url_github }) => {
  return (
    <div className="text-white w-[320px] border border-gray-500 shadow-2xl min-h-full flex flex-col overflow-hidden rounded-lg">
      <div className="flex-1">
        <div className="w-full">
          <img className="w-full" src={src} alt={name} />
        </div>
        <div className="border-b-2 border-b-gray-800">
          <h1 className="p-2 font-bold text-center text-xl">{name}</h1>
        </div>
        <div className="">
          <p className="text-gray-300 p-2 text-sm md:text-lg text-justify">
            {description}
          </p>
        </div>
      </div>
      <div className="flex justify-center gap-5 py-3 bg-gray-900">
        {name !== "My Portfolio" && (
          <a href={url_demo} rel="noreferrer" target="_blank">
            <button className="bg-orange-700 text-gray-100 p-2 font-bold rounded-md px-4">
              DEMO
            </button>
          </a>
        )}
        <a href={url_github} rel="noreferrer" target="_blank">
          <button className="bg-orange-700 text-gray-100 p-2 font-bold rounded-md px-4">
            Github
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectEntry;
