import React from "react";
import { skills, invertSkills, icons, toolIcons, tools } from "../CONSTANTS";

const TechContainer = () => {
  console.log(toolIcons);
  return (
    <div
      id="skills"
      className="border border-gray-600 bg-black bg-opacity-80 rounded-3xl shadow-sm pb-4 md:pb-20 pt-4 md:pt-10 w-full xl:w-2/3 flex flex-col gap-4 md:gap-10 items-center p-2 md:p-5"
    >
      <h1 className="text-white font-semibold text-2xl lg:text-4xl">
        Professional <strong className="text-orange-500">Skillset</strong>
      </h1>
      <div className="flex flex-wrap gap-4 justify-center">
        {icons.map((icon, index) => {
          let invert = "";
          const skill = skills[index];
          if (invertSkills.includes(skill)) {
            invert = "invert";
          }
          return (
            <div
              className={
                "group  border border-gray-500 shadow-sm translate-x-0 translate-y-0 rounded-lg md:p-4 relative overflow-hidden "
              }
            >
              <div className={invert}>
                <img
                  className="p-4 top-0 w-20 md:w-24"
                  src={icon}
                  alt="django-rest"
                />
              </div>

              <div className="hidden group-hover:flex absolute bottom-0 left-0 w-full  md:h-10 bg-white items-center justify-center">
                <h2 className="text-md md:text-xl font-bold text-orange-400">
                  {skills[index]}
                </h2>
              </div>
            </div>
          );
        })}
        <div className="group  border border-gray-500 shadow-sm translate-x-0 translate-y-0 rounded-lg p-4 relative overflow-hidden ">
          <div className="invert">
            <img
              className="top-0 w-[120px] bg-contain"
              src={require("../assets/skills/other/djangorest.png")}
              alt="django-rest"
            />
          </div>
          <div className="hidden group-hover:flex absolute bottom-0 left-0 w-full h-10 bg-white items-center justify-center">
            <h2 className="text-2xl font-bold text-orange-400">DRF</h2>
          </div>
        </div>
      </div>
      <h1 className="text-white font-semibold text-2xl lg:text-4xl">
        My <strong className="text-orange-500">Tools</strong>
      </h1>
      <div className="flex flex-wrap gap-4 justify-center">
        {toolIcons.map((icon, index) => {
          let invert = "";
          const tool = tools[index];
          return (
            <div
              className={
                "group  border border-gray-500 shadow-sm translate-x-0 translate-y-0 rounded-lg md:p-4 relative overflow-hidden "
              }
            >
              <div className={invert}>
                <img
                  className="p-4 top-0 w-20 md:w-24"
                  src={icon}
                  alt="django-rest"
                />
              </div>

              <div className="hidden group-hover:flex absolute bottom-0 left-0 w-full  md:h-10 bg-white items-center justify-center">
                <h2 className="text-md md:text-xl font-bold text-orange-400">
                  {tool}
                </h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechContainer;
