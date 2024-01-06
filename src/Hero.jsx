import React from "react";
import hero from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti,
            itaque! Accusamus modi unde quam! Temporibus hic magni, eaque in
            velit eveniet. Magni commodi quod voluptatum ipsam quisquam modi
            inventore aperiam!
          </p>
        </div>
        <div className="img-container">
          <img src={hero} alt="browser" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
