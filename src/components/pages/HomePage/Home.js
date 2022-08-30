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
  dataSlider,
} from "./Data";
import Pricing from "../../Pricing";
import Tiles from "../../Tiles";
import Header from "../../Header";
import About from "../../About";
import Slider from "../../Slider";
import ScrollToTop from "../../ScrollToTop";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
function Home() {
  // const location = useLocation();
  // useEffect(() => {
  //   console.log("location", location.key); // { key: "3uu089" }
  //   // Fire whatever function you need.
  //   // if (document.getElementById("#about")) {
  //   //   const element = document.getElementById("#about");
  //   //   element.scrollIntoView();
  //   // } else {
  //   //   console.log("pikpik");
  //   // }
  // }, [location.key]);

  return (
    <>
      <ScrollToTop />
      <Hero {...Headliner} />
      <Header data={header} />
      <HeroImg data={header} />
      <Hero {...homeObjThree} />
      <Hero {...homeObjTwo} />
      <Slider data={dataSlider} />
      <Pricing />
      <Tiles data={tiles} />
      <Hero {...homeObjFour} />
      <About data={about} />
    </>
  );
}

export default Home;
