import { about } from "../../data/about-data";
import CompanyDesc from "../../CompanyDesc";
import ScrollToTop from "../../ScrollToTop";
function About() {
  return (
    <>
      <ScrollToTop />
      <CompanyDesc data={about} />
    </>
  );
}

export default About;
