import React from "react";
import Hero from "../../Hero";
import { homeObjOne, homeObjThree } from "./Data";

function SignUp() {
  return (
    <>
      <Hero {...homeObjOne} />
      <Hero {...homeObjThree} />
    </>
  );
}

export default SignUp;
