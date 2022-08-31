import Hero from "../../Hero";
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
import { advantage1, advantage2, advantage3 } from "../../data/advantage-data";
import { header } from "../../data/header-data";
import { features } from "../../data/features-data";
import { tiles } from "../../data/tiles-data";

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
      <Hero {...Headliner} />
      <Header2 />
      <Advantages {...advantage1} />
      <Advantages {...advantage2} />
      <Advantages {...advantage3} />
      <Header data={header} />
      <Hero {...homeObjThree} />
      <Features data={features} />
      <Hero {...homeObjTwo} />
      <Tiles data={tiles} />
      <Hero {...homeObjFour} />
    </>
  );
}

export default Home;
