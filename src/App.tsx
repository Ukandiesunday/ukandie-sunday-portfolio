import About from "./components/about/About";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Service from "./components/services/Service";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <About />
      <Service />
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
