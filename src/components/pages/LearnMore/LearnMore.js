import Hero from "../../Hero";
import { SignUpHero, homeObjThree } from "../../data/hero-data";

function SignUp() {
  return (
    <>
      <Hero {...SignUpHero} />
      <Hero {...homeObjThree} />
    </>
  );
}

export default SignUp;
