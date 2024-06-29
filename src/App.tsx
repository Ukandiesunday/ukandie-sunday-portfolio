import About from "./components/about/About";
import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";
import Service from "./components/services/Service";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <About />
      <Service />
    </div>
  );
}

export default App;
