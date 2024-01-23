import FrontInfo from "./FrontInfo";
import Header from "./Header";

const FrontContainer = () => {
  return (
    <div className="h-screen min-h-screen relative">
      <Header />
      <FrontInfo />
    </div>
  );
};

export default FrontContainer;
