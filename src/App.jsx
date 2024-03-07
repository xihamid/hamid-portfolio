
import NavBar from "./assets/components/NavBar/NavBar";
import About from "./assets/components/LandingPage/About";
import Services from "./assets/components/LandingPage/Services";
import Details from "./assets/components/LandingPage/Details";
import './index.css';
import './App.css';
import Footer from "./assets/components/LandingPage/Footer";
import ContactForm from "./assets/components/LandingPage/ContactForm";

function App() {

  return (
    <>
<NavBar/>
<About/>
<Services/>
<Details/>
<ContactForm/>
<Footer/>
    </>
  )
}

export default App
