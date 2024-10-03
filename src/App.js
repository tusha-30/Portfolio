
import './App.css';
import AboutSection from './components/About';
import Contact from './components/Contact';
import Edu from './components/Edu';
import Exp from './components/Exp';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ScrollToTop from './components/scroll-top';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>

    <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          <Hero/>
          <AboutSection/>
          <Exp/>
          <Skills/>
          <Projects/>
          <Edu/>
          <Contact/>
          <ScrollToTop />
  <Footer/>
  <ToastContainer/>
  </main>
  </>
  );
}

export default App;
