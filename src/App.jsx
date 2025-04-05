import './App.css'
import Header from './components/Header';
import Hero from './components/Hero';
import DogCarousel from './components/DogCarossel';
import Footer from './components/Footer';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/600.css';
import '@fontsource/nunito/400.css';
import SobreNos from './components/SobreNos';
import ServicosSecao from './components/SevicosSecao';

function App() {

  return (
    <>
      <Header />
      <Hero />
      <SobreNos />
      <ServicosSecao />
      <DogCarousel />
      <Footer />
    </>
  )
}

export default App
