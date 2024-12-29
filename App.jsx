import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero.jsx";
import Services from "./Components/Services/Services.jsx";
import rocket from "./assets/rocket.png";
import Heroimg from "./assets/hero.png";
import team from "./assets/team.png";
import Footer from "./Components/Footer/Footer.jsx";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero
        image={Heroimg}
        heading="Get an amazing logo for your strtup in 60 seconds"
        text="lorem ipsum dolor sit amet consectetur adipisicing elit. "
      />
      <Services />
      <Hero
        reverse={true}
        image={rocket}
        heading="Launch your website faster with a new logo from logobly"
        text="lorem ipsum dolor sit amet consectetur adipisicing elit. "
      />
      <Services />
      <Hero
        image={team}
        heading="Our team"
        text="lorem ipsum dolor sit amet consectetur adipisicing elit. "
      />
      <Footer />
    </div>
  );
};

export default App;
