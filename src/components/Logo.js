const Logo = () => {
  return (
    <div className="flex gap-2">
      <div className="flex flex-col gap-1 justify-center">
        <div className="bg-yellow-500 rounded-2xl h-[3px] w-7 animate-moveSlightly"></div>
        <div className="bg-blue-600 rounded-2xl h-1 w-6 ml-3 animate-moveSlightly"></div>
        <div className="bg-red-600 rounded-2xl h-1 w-7 ml-1 animate-moveSlightly"></div>
        <div className="bg-orange-500 rounded-2xl h-1 w-6 md:block hidden"></div>
      </div>
      <div className="flex gap-2 items-baseline">
        <div className="flex p-0">
          <h2 className="align-bottom text-2xl md:text-3xl h-fit font-bold text-gray-100 hover:text-white font-mono">
            <a href="www">KYKs</a>
          </h2>
        </div>
        {/* <p className="font-light text-gray-400">PORTFOLIO</p> */}
      </div>
    </div>
  );
};

export default Logo;
