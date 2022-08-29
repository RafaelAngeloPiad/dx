import React, { useEffect, useState } from "react";
import Hero from "../../Hero";
import HeroImg from "../../HeroImg";
import {
  Headliner,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
  tiles,
  header,
  about,
} from "./Data";
import Pricing from "../../Pricing";
import Tiles from "../../Tiles";
import Header from "../../Header";
import About from "../../About";
import Slider from "../../Slider";
function Home() {
  // const [wLoc, setwLoc] = useState(window.location.href);

  // useEffect(() => {
  //   setwLoc(window.location.href);
  // });

  // useEffect(() => {
  //   if (wLoc.split("#")[1]) {
  //     console.log("splitted bitch");
  //   }
  // }, [wLoc]);

  return (
    <>
      <Hero {...Headliner} />
      <Header data={header} />
      <HeroImg data={header} />
      <Hero {...homeObjThree} />
      <Hero {...homeObjTwo} />
      <Slider />
      <Pricing />
      <Tiles data={tiles} />
      <Hero {...homeObjFour} />
      <About data={about} />
    </>
  );
}

export default Home;
