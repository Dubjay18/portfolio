import React from "react";
import Hero from "./Hero";
import "./App.css";
import About from "./About";
import Projects from "./projects";
import Contact from "./contact";
import Footer from "./footer";
import Nav from "./nav";

function App() {
  const lin = (ID) => {
    document.getElementById(`${ID}`).scrollIntoView({ behavior: "smooth" });
  };
  const aboutScroll = () => {
    lin("about");
    // setShow(falsex);
  };
  const projectsScroll = () => lin("projects");
  const navScroll = () => lin("nav");
  const heroScroll = () => lin("Hero");
  const contactScroll = () => lin("contact");
  return (
    <div>
      <Nav
        home={heroScroll}
        about={aboutScroll}
        proj={projectsScroll}
        contact={contactScroll}
      />
      <Hero down={aboutScroll} />
      <About />
      <Projects />
      <Contact />
      <Footer up={navScroll} />
    </div>
  );
}

export default App;
