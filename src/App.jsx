import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection'
// import Ratings from './components/Rating/Ratings'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer'
import './App.css'
import DashboardSection from './components/Dashboard/DashboardSection'
import Pricing from './components/Pricing/Pricing'
import Contact from './components/Contact/Contact'
import { Element } from "react-scroll";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <Header />
       
      <main>
        <Element name="home"><HeroSection /></Element>
        <Element name="dashboard"><DashboardSection /></Element>
        <Element name="pricing"><Pricing /></Element>
        <Element name="contact"><Contact /></Element>
      </main>
      
      <Footer />
     <ToastContainer position="top-center" autoClose={3000} />
    </>
  )
}

export default App
