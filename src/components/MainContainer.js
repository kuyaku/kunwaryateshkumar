import FrontContainer from "./FrontContainer";
import Container from "./Container";
import TechContainer from "./TechContainer";
import About from "./About";
import Projects from "./Projects";
import Footer from "./Footer";

const MainContainer = () => {
  return (
    <div className="min-h-screen max-h-screen bg-cover bg-center opacity-100 bg-background-image md:bg-background-image2 overflow-y-auto">
      <FrontContainer />
      <Container>
        <About />
      </Container>
      <Container>
        <TechContainer />
      </Container>
      <Container>
        <Projects />
      </Container>
      <Footer />
    </div>
  );
};

export default MainContainer;
