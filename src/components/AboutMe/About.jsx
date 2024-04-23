import React from "react";
import IconMusic from "../../assets/iconMusic.svg";
import Lamp from "../../assets/lamp.svg";
import arrowAbout from "../../assets/arrowAbout.svg";

export default function About() {
  return (
    <div>
      <section>
        <div>
          <img src={IconMusic} alt="" />
        </div>

        <div>
          <h1>About me</h1>
          <img src={Lamp} alt="" />
        </div>

        <div>
          <p></p>
          <a href=""></a>
        </div>

        <div>
          <img src={arrowAbout} alt="" />
        </div>
      </section>
      <section></section>
    </div>
  );
}
