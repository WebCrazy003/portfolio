import Header from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function Home({ color }) {
  return (
    <>
      <Header color={color} />
      <About color={color} />
      <Experience color={color} />
      <Projects color={color} />
      <Contact color={color} />
      <Footer />
    </>
  );
}

export default Home;
