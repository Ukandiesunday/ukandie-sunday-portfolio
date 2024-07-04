import { useEffect, useState } from "react";
import About from "./components/about/About";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Service from "./components/services/Service";
import Preloader from "./components/preloader/Preloader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleWindowLoad = () => {
      setLoading(false);
    };

    // Add event listener for window load
    window.addEventListener("load", handleWindowLoad);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("load", handleWindowLoad);
    };
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <div className="App">
      <div className="app">
        <Navbar />
        <Banner />
        <About />
        <Service />
        <Projects />
        <Resume />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
