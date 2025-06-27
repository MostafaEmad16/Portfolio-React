import Home from "./components/home/Home";
import Nav from "./components/Nav/Nav";
import About from "./components/about/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/projects/Projects"
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer/Footer";
import Services from "./components/Services/Services";
function App() {
  return (
    <>
      <Home />
      <Nav />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
