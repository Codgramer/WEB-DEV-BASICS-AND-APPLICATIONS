
import "./app.scss"
import Navbar from "./components/navbar/Navbar";


const App = () => {
  return <div>
    <Cursor />
    <section id="Homepage">
      <Navbar />
      <Hero />
    </section>
    <section id="Services">
      <Parallax type="services" />
    </section>
    <section>
      <Services />
    </section>
    <section id="Portfolio">
      <Parallax type="portfolio" />
    </section>
    <Portfolio />
    <section id="Contact">
      <Contact />
    </section>
    {/* <Test/>
    <Test/> */}
  </div>;
};

export default App;
