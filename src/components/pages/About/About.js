import { about } from "../../data/about-data";
import AboutUs from "../../AboutUs";
import ScrollToTop from "../../ScrollToTop";
function About() {
  return (
    <>
      <ScrollToTop />
      <AboutUs data={about} />
    </>
  );
}

export default About;
