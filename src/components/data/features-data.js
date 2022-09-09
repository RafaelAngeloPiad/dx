import {
  MdAssignment,
  MdAccessibility,
  MdAccountBalanceWallet,
  MdAccountBalance,
  MdAccountCircle,
  MdAllInbox,
  MdApi,
} from "react-icons/md";
import { iconStyle } from "./global-data.js";
//https://react-icons.github.io/react-icons

export const features = [
  {
    icon: <MdAccountBalance style={{ fill: iconStyle.gradientStyle }} />,
    title: "Connect.",
    description: "Social connection can lower anxiety and depression.",
    Why: [
      "Single sign-on",
      "Encrypted sessions",
      "Dismiss attendees",
      "End-to-end encryption",
    ],
  },
  {
    icon: <MdAccountCircle style={{ fill: iconStyle.gradientStyle }} />,

    title: "Communicate",
    description: "We communicate for a variety of reasons!",
    Why: ["HD video", "Preview your webcam", "Screen sharing", "Drawing tools"],
  },
  {
    icon: <MdApi style={{ fill: iconStyle.gradientStyle }} />,
    title: "Collaborate.",
    description: "Collaboration improves the way your team works.",
    Why: [
      "Crystal clear audio",
      "Commuter mode",
      "Built-in VoIP and Toll",
      "Background noise suppression",
    ],
  },
  {
    icon: <MdAssignment style={{ fill: iconStyle.gradientStyle }} />,
    title: "Latest Security",
    description: "",
    Why: [
      "Single sign-on",
      "Encrypted sessions",
      "Dismiss attendees",
      "End-to-end encryption",
    ],
  },
  {
    icon: <MdAccessibility style={{ fill: iconStyle.gradientStyle }} />,
    title: "Video Meetings",
    description: "",
    Why: ["HD video", "Preview your webcam", "Screen sharing", "Drawing tools"],
  },
  {
    icon: <MdAccountBalanceWallet style={{ fill: iconStyle.gradientStyle }} />,
    title: "Enhance Audio",
    description: "",
    Why: [
      "Crystal clear audio",
      "Commuter mode",
      "Built-in VoIP and Toll",
      "Background noise suppression",
    ],
  },
];
