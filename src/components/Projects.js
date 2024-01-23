import ProjectEntry from "./ProjectEntry";

const Projects = () => {
  const taskharbour =
    "TaskHarbour is a robust, full stack, project management tool designed to streamline your workflow and enhance team collaboration. Built as a full-stack application, it seamlessly integrates Django and Django Rest Framework on the backend, a PostgreSQL database for efficient data storage, and a React frontend for a responsive and intuitive user interface.";
  const blogin =
    "Blogin.xyz is a full stack, dynamic blogging platform powered by Django, HTML, CSS, and PostgreSQL.  Blogin.xyz is a robust blogging platform built with cutting-edge technologies to offer writers and readers a seamless and enjoyable experience, with post liking, and blogger following features.";
  const porfolio =
    "Welcome to my digital haven, where creativity and coding converge! This very portfolio you're exploring is more than just a collection of details; it's a living testament to my journey, skills, and passion for technology.";
  return (
    <div
      id="recent-projects"
      className="border border-gray-600 bg-black bg-opacity-80 rounded-3xl shadow-sm pb-4 md:pb-8 pt-4 md:pt-10 w-full xl:w-3/4 flex flex-col gap-4 md:gap-10 items-center p-2 md:p-5"
    >
      <h1 className="text-white font-semibold text-2xl lg:text-4xl">
        My <strong className="text-orange-500">Recent Works</strong>
      </h1>
      <div className="flex gap-10 xl:gap-8 flex-wrap justify-center">
        <ProjectEntry
          src={"/assets/projects/taskharbour.png"}
          name={"Task Harbour"}
          description={taskharbour}
          url_github={"https://github.com/kuyaku/taskharbour-frontend"}
          url_demo={"https://taskharbour.vercel.app/"}
        />
        <ProjectEntry
          src={"/assets/projects/blogin.png"}
          name={"Blogin.xyz"}
          description={blogin}
          url_github={"https://github.com/kuyaku/blogin.xyz"}
          url_demo={"https://bloginxyz.up.railway.app/"}
        />
        <ProjectEntry
          src={"/assets/projects/portfolio.png"}
          name={"My Portfolio"}
          description={porfolio}
          url_demo={"https://kunwaryateshkumar.vercel.app/"}
          url_github={"https://github.com/kuyaku/kunwaryateshkumar"}
        />
      </div>
    </div>
  );
};

export default Projects;
