import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import DogCarousel from './components/DogCarossel';
import Footer from './components/Footer';
import SobreNos from './components/SobreNos';
import ServicosSecao from './components/SevicosSecao';

import '@fontsource/poppins/400.css';
import '@fontsource/poppins/600.css';
import '@fontsource/nunito/400.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <SobreNos />
      <ServicosSecao />
      <DogCarousel />
      <Footer />
    </>
  );
}

export default App;