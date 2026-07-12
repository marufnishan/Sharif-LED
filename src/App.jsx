import Header from './components/Header'
import Hero from './components/Hero'
import OtherServices from './components/OtherServices'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import FlagshipModels from './components/FlagshipModels'
import FeaturedProduct from './components/FeaturedProduct'
import Portfolio from './components/Portfolio'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingContact from './components/FloatingContact'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <OtherServices />
        <Services />
        <FeaturedProduct />
        <WhyUs />
        <Process />
        <FlagshipModels />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingContact />
      <WhatsAppButton />
    </div>
  )
}

export default App
