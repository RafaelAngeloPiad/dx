import {
  MdAssignment,
  MdAccessibility,
  MdAccountBalanceWallet,
  MdAccountBalance,
  MdAccountCircle,
  MdAllInbox,
  MdApi,
} from "react-icons/md";
//https://react-icons.github.io/react-icons

export const features = [
  {
    icon: <MdAccountBalance />,
    title: "Connect.",
    description:
      "Social connection can lower anxiety and depression, help us regulate our emotions.",
    Why: [
      "Single sign-on",
      "Encrypted sessions",
      "Dismiss attendees",
      "COMING SOON: End-to-end encryption",
    ],
  },
  {
    icon: <MdAccountCircle />,

    title: "Communicate",
    description: "We communicate for a variety of reasons!",
    Why: ["HD video", "Preview your webcam", "Screen sharing", "Drawing tools"],
  },
  {
    icon: <MdApi />,
    title: "Collaborate.",
    description:
      "Collaboration improves the way your team works together and problem solves.",
    Why: [
      "Crystal clear audio",
      "Commuter mode",
      "Built-in audio with VoIP and Toll",
      "Background noise suppression",
    ],
  },
  {
    icon: <MdAssignment />,
    title: "Latest Security",
    description: "",
    Why: [
      "Single sign-on",
      "Encrypted sessions",
      "Dismiss attendees",
      "COMING SOON: End-to-end encryption",
    ],
  },
  {
    icon: <MdAccessibility />,
    title: "Video Meetings",
    description: "",
    Why: ["HD video", "Preview your webcam", "Screen sharing", "Drawing tools"],
  },
  {
    icon: <MdAccountBalanceWallet />,
    title: "Enhance Audio",
    description: "",
    Why: [
      "Crystal clear audio",
      "Commuter mode",
      "Built-in audio with VoIP and Toll",
      "Background noise suppression",
    ],
  },
];
