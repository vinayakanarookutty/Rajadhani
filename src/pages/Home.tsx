import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Highlights from '../components/Highlights';
import Spaces from '../components/Spaces';
import VideoShowcase from '../components/VideoShowcase';
import Facilities from '../components/Facilities';
import Events from '../components/Events';
import Gallery from '../components/Gallery';
import EnquiryCTA from '../components/EnquiryCTA';
import Contact from '../components/Contact';
import FloatingButton from '../components/FloatingButton';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Highlights />
        <Spaces />
        <VideoShowcase />
        <Facilities />
        <Events />
        <Gallery />
        <EnquiryCTA />
        <Contact />
      </main>
      <FloatingButton />
      <Footer />
    </>
  );
}
