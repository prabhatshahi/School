import React from "react";
import Navbar from "./component/Navbar/Navbar";
import Hero from "./component/Hero/Hero.jsx";
import Program from "./component/program/Program.jsx";
import About from "./component/about/About.jsx";
import Title from "./component/title/Title.jsx";
import Campus from "./component/Campus/Campus.jsx";
import Testimonials from "./component/testimonials/Testimonials.jsx";
import Contact from "./component/contact/Contact.jsx";
import Footer from "./component/Footer/Footer.jsx";
const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <div className="container">
          <Title subTitle="Our Program" title="What we Offer" />
          <Program />
          <About />
          <Title subTitle="Gallery" title="Campus Photos" />
          <Campus />
          <Title subTitle="Testimonials" title="What Students Says" />
          <Testimonials />
          <Title subTitle="Contact Us" title="Get in Touch" />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
