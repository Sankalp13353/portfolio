import Navbar from "./components/navbar";
import Home from "./sections/home";
import About from "./sections/about";
import Projects from "./sections/projects";
import Contact from "./sections/contact";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
