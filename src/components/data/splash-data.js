import Animate from "./animator/Animate.js";

export const splash1 = [
  {
    background: "background1",
    imgStart: "",
    headline: (
      <>
        <br />
        <p></p>
        <Animate animateClass="fade1">
          <span className="mainHeadline">Connect.</span>
        </Animate>

        <br />
        <Animate animateClass="fade2">
          <span className="mainHeadline">Communicate.</span>
        </Animate>
        <br />
        <Animate animateClass="fade3">
          <span className="mainHeadline">Collaborate.</span>
        </Animate>
      </>
    ),
    subtitle: (
      <Animate animateClass="fade4">
        <div>
          Enabling Communication Service Providers to deploy{" "}
          <b>unified communications</b> globally with{" "}
          <b>zero capital investment.</b>
        </div>
      </Animate>
    ),
    img: "images/none.png",
    buttonShow: "yes",
    buttonLabel: "Read More",
  },
  {
    background: "yes",
    imgStart: "",
    headline: (
      <>
        <br />
        <p></p>
        <span className="mainHeadline">Connect.</span>
        <br />
        <span className="mainHeadline">Communicate.</span>
        <br />
        <span className="mainHeadline">Collaborate.</span>
      </>
    ),
    subtitle: (
      <>
        A fully featured <b>Carrier as a Service platform</b>, enabling CSPs
        (Communication Service Providers) to deploy{" "}
        <b>unified communications</b> globally with{" "}
        <b>zero capital investment</b> through a cloud-based or on-prem
        platform.
      </>
    ),
    img: "images/none.png",
    buttonShow: "no",
    buttonLabel: "Know More",
  },
];

export const splashSlider = [
  {
    background: "background2",
    id: "1",
    imgStart: "",
    headline: (
      <>
        <br />
        <br />
        Platform for unified communications
      </>
    ),
    subtitle: (
      <>
        Dialogx CaaS is a cloud-based carrier infrastructure platform, designed
        to enable service providers to deploy Unified Communications globally
        with zero capital investment through a cloud-based or in data-centre
        solution.
      </>
    ),
    img: "images/none.png",
    buttonShow: "yes",
    buttonLabel: "Know More",
  },
  {
    background: "background2",
    id: "2",
    imgStart: "",
    headline: (
      <>
        <br />
        <br />
        Communication Services for you
      </>
    ),
    subtitle: (
      <>
        Built on Kubernetes and driven by AWS' scalable infrastructure, DXP
        gives Service Providers access to advanced communications services
        including voice, messaging, chat, video, conferencing and business
        productivity.
        <br />
      </>
    ),
    img: "images/none.png",
    buttonShow: "yes",
    buttonLabel: "Know More",
  },
];
