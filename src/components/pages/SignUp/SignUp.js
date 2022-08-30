import Hero from "../../Hero";
import { SignUpHero, homeObjThree } from "../../data/Data";

function SignUp() {
  return (
    <>
      <Hero {...SignUpHero} />
      <Hero {...homeObjThree} />
    </>
  );
}

export default SignUp;
