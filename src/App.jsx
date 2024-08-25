import React from "react";
// import Banner from "./components/Banner/Banner.jsx";

import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer.jsx";

const App = () => {
  return (
    <div className="bg-white dark:text-white duration-200 overflow-x-hidden">
      <Hero />
      <Services />
      {/* <Banner /> */}

      <Footer />
    </div>
  );
};

export default App;
