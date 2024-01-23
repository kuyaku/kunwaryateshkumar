import { useState, useEffect } from "react";
import { techs } from "../CONSTANTS";

const FrontInfo = () => {
  const [currentTechIndex, setCurrentTechIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    // for current tech, start from index 0
    let index = 0;
    // start an interval, when the index updates by 1, and the displayed text with it
    const timer = setInterval(() => {
      let substr = "";
      if (techs[currentTechIndex]) {
        substr = techs[currentTechIndex].substring(0, index);
      }
      setDisplayedText(substr);
      index++;
      // if the whole word is printed, it is time to move to the next
      if (index - 1 === techs[currentTechIndex].length) {
        // clear the previous timer
        clearInterval(timer);
        // take a hold, before going to the next tech
        setTimeout(() => {
          if (currentTechIndex + 1 === techs.length) {
            // list is done, start again
            setCurrentTechIndex(0);
          } else {
            // move to the next tech
            setCurrentTechIndex((prev) => prev + 1);
          }
        }, 3000);
      }
    }, 100);
    return () => {
      clearInterval(timer);
    };
  }, [currentTechIndex]);

  return (
    <div
      id="home"
      className="min-h-screen flex items-center  justify-center flex-col gap-4 absolute left-0 top-0 w-full"
    >
      <div>
        <div></div>
        <div className="text-white">
          <div className="text-3xl lg:text-5xl">
            Hi, There <p className="inline">👋🏻</p>
          </div>
          <h2 className="text-[2rem] md:text-[4rem] lg:text-[6rem] font-extrabold text-orange-500">
            <span className="text-white font-normal">I'M </span>KUNWAR YATESH
          </h2>
          <div>
            <p className="h-4 text-xl md:text-3xl text-orange-500">
              {displayedText}
              <span className="animate-pulse text-gray-500">|</span>
            </p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default FrontInfo;
