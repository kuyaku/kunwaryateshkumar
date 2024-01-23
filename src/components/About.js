const About = () => {
  return (
    <div
      id="about-me"
      className="border border-gray-600 bg-black bg-opacity-80 rounded-3xl shadow-sm pb-4 md:pb-20 pt-4 md:pt-10 w-full xl:w-2/3 flex flex-col gap-4 md:gap-10 items-center md:p-5"
    >
      <h1 className="text-white font-semibold text-2xl lg:text-4xl">
        Things <strong className="text-orange-500">ABOUT ME</strong>
      </h1>
      <div className="text-gray-200 flex gap-5 w-5/6 flex-col lg:flex-row">
        <div className="overflow-hidden flex flex-col gap-2 lg:w-1/3 w-full items-center">
          <img
            className="rounded-[100%] w-2/4 lg:w-full"
            src="/me.jpeg"
            alt="me"
          />
          <p className="text-lg text-center lg:text-left">
            Hi! This is{" "}
            <span className="text-2xl text-orange-600">
              Kunwar Yatesh Kumar
            </span>
            , a passionate individual deeply immersed in the world of
            technology.{" "}
          </p>
        </div>
        <div className="flex-1 lg:p-4 lg:text-xl flex flex-col gap-3">
          <p>
            {" "}
            Currently, my journey revolves around the intriguing realms of{" "}
            <span className="text-lg lg:text-2xl text-orange-600">
              Data Structures and Algorithms
            </span>{" "}
            , an area where my fascination grows with each passing day. I take
            pride in the incremental progress I make in mastering this
            fundamental pillar of computer science.
          </p>
          <p>
            Beyond the intricacies of data structures, my enthusiasm extends to
            the dynamic and creative field of{" "}
            <span className="text-lg lg:text-2xl text-orange-600">
              Web Development
            </span>{" "}
            .
          </p>
          <p>
            As a dedicated developer, I am actively engaged in building projects
            that not only showcase my technical skills but also reflect my
            commitment to continuous learning and force to learn something, some
            new tech everyday.{" "}
          </p>
          <p>Projects are in keep coming mode...</p>
        </div>
      </div>
    </div>
  );
};

export default About;
