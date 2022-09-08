import Hero from "../../Hero";
import Splash from "../../Splash";
import Header2 from "../../Header2";
import Tiles from "../../Tiles";
import Header from "../../Header";
import Features from "../../Features";
import Advantages from "../../Advantages";
import {
  Headliner,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
} from "../../data/hero-data";
import { advantage } from "../../data/advantage-data";
import { header } from "../../data/header-data";
import { features } from "../../data/features-data";
import { tiles } from "../../data/tiles-data";
import { splash1 } from "../../data/splash-data";
import SplashSlider from "../../SplashSlider";
import ScrollToTop from "../../ScrollToTop";
import Highlights from "../../Highlights";

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
      <SplashSlider data={splash1} />
      <Highlights />
      <Advantages data={advantage} />
      <Hero {...homeObjTwo} />
      <Features data={features} />
      <Tiles data={tiles} />
      <Hero {...homeObjThree} />
      <Hero {...homeObjFour} />
      <Header2 />
    </>
  );
}

export default Home;
