import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
// import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Testimony from "./components/Testimony";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Services />
      {/* <Experience /> */}
      <Testimony />
      <Footer />
    </div>
  );
}

export default App;
