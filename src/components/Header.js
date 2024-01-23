import { useState, useEffect } from "react";
import Logo from "./Logo";
import { Code, Command, Home, Menu, User } from "react-feather";

const Header = () => {
  const [showNavigation, setShowNavigation] = useState(true);
  const [showNavItems, setShowNavItems] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const isSmallScreen = window.innerWidth <= 900; // true or false
      setShowNavItems(false);
      setShowNavigation(isSmallScreen);
    };
    // check teh size when the component mounts
    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const handleNavItems = (event) => {
    console.log(showNavItems);
    event.preventDefault();
    if (showNavigation) {
      setShowNavItems(!showNavItems);
    }
  };

  return (
    <div className="py-4 px-4 md:px-20 md:py-6 flex fixed bg-black opacity-70 z-20 w-full shadow-black shadow-2xl">
      <div>
        <Logo />
      </div>
      <div className="flex-1"></div>
      {!showNavigation ? (
        <div className="text-gray-100 flex gap-8 font-mono">
          <a
            href="#home"
            className="hover:text-orange-500 hover:font-bold text-lg hover:translate-y-[1px] cursor-pointer"
          >
            Home
          </a>
          <a
            href="#about-me"
            className="hover:text-orange-500 hover:font-bold text-lg hover:translate-y-[1px] font-lg cursor-pointer"
          >
            About
          </a>
          <a
            href="#skills"
            className="hover:text-orange-500 hover:font-bold text-lg hover:translate-y-[1px] font-lg cursor-pointer"
          >
            Technologies
          </a>
          <a
            href="#recent-projects"
            className="hover:text-orange-500 hover:font-bold text-lg hover:translate-y-[1px] font-lg cursor-pointer"
          >
            Projects
          </a>
          <a
            href="#find-me"
            className="hover:text-orange-500 hover:font-bold text-lg hover:translate-y-[1px] font-lg cursor-pointer"
          >
            Find me
          </a>
        </div>
      ) : (
        <div className="relative w-full flex justify-end">
          <Menu onClick={(e) => handleNavItems(e)} className="text-white" />
          {showNavItems && (
            <div className="text-white absolute z-10 top-[100%] w-full right-0 border bg-black border-gray-800 px-2 py-2 text-xl">
              <div className="border-b border-gray-600">
                <a href="#home" className="flex items-center">
                  <Home className="h-4" /> Home
                </a>
              </div>
              <div className="border-b border-gray-600">
                <a href="#about-me" className="flex items-center">
                  <User className="h-4" /> About
                </a>
              </div>
              <div className="border-b border-gray-600">
                <a href="#skills" className="flex items-center">
                  <Code className="h-4" /> Technologies
                </a>
              </div>
              <div className="border-b border-gray-600">
                <a href="#recent-projects" className="flex items-center">
                  <Command className="h-4" /> Projects
                </a>
              </div>
              <div>
                <a href="#find-me" className="flex items-center">
                  <span className="text-[16px] px-1">@</span>Find me
                </a>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
