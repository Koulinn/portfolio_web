import { IoSchoolOutline } from "react-icons/io5/";
import { RiSuitcaseLine } from "react-icons/ri";

const contentStyle = { background: "rgb(33, 150, 243)", color: "#fff" };
const contentArrowStyle = { borderRight: "7px solid  rgb(33, 150, 243)" };
const iconStyle = { background: "rgb(33, 150, 243)", color: "#fff" };

const timeLineContent = [
  {
    className: "vertical-timeline-element--custom",
    contentStyle: contentStyle,
    contentArrowStyle: contentArrowStyle,
    date: "2022 - present",
    iconStyle: iconStyle,
    icon: <RiSuitcaseLine />,
    textH3: "Dedalus - Senior assistant application developer",
    textH4: "UK",
    textP:
      "Actively participate in projects, provided constructive feedback and deliver my tasks in timely manner. Kept the company standards and got diligence recognition.",
  },
  {
    className: "vertical-timeline-element--custom",
    contentStyle: contentStyle,
    contentArrowStyle: contentArrowStyle,
    date: "2021 - present",
    iconStyle: iconStyle,
    icon: <RiSuitcaseLine />,
    textH3: "Muni - Full-stack developer (volunteer)",
    textH4: "Brazil",
    textP:
      "Created stable Full stack applications, provided guidance to aspiring developers, interviewed other volunteers, set standards for the project.",
  },
  {
    className: "vertical-timeline-element--custom",
    contentStyle: contentStyle,
    contentArrowStyle: contentArrowStyle,
    date: "2021 - 2022",
    iconStyle: iconStyle,
    icon: <IoSchoolOutline />,
    textH3: "Strive School - Tutor (volunteer)",
    textH4: "Europe",
    textP:
      "I contributed with many student's coding journey, answered their questions, debugged their coding and kept them motivated and engaged with the school.",
  },
  {
    className: "vertical-timeline-element--custom",
    date: "2020 - 2021",
    iconStyle: iconStyle,
    icon: <RiSuitcaseLine />,
    textH3: "UX designer at NVX Solutions",
    textH4: "Brazil",
    textP:
      "Wireframes, UX research, User journey, Persona, styleguides, card-sorting, workshops, ideation session, usability tests",
  },
  {
    className: "vertical-timeline-element--custom",
    date: "2020 - 2021",
    iconStyle: iconStyle,
    icon: <IoSchoolOutline />,
    textH3: "Interaction Design Foundation",
    textH4: "International",
    textP: "Self-paced online UX design school",
  },
  {
    className: "vertical-timeline-element--custom",
    date: "2018 - 2020",
    iconStyle: iconStyle,
    icon: <RiSuitcaseLine />,
    textH3: "Hospitality sector",
    textH4: "UK",
    textP: "Team leader",
  },
  {
    className: "vertical-timeline-element--custom",
    date: "2013 - 2015",
    iconStyle: iconStyle,
    icon: <IoSchoolOutline />,
    textH3: "Acupuncture",
    textH4: "Institute Jaqueline Peker/BR",
    textP:
      "This was my kick-off to change my carer, because we studied human behaviour accordingly with acupuncture.",
  },
  {
    className: "vertical-timeline-element--custom",
    date: "2013 - 2018",
    iconStyle: iconStyle,
    icon: <RiSuitcaseLine color="#ffffff" />,
    textH3: "Veterinarian Surgeon",
    textH4: "Brazil",
    textP:
      "I always created a trustable communication channel, to have the pet owner as the main entity of any therapy.",
  },
  {
    className: "vertical-timeline-element--custom",
    date: "2008 - 2013",
    iconStyle: iconStyle,
    icon: <IoSchoolOutline currentColor="white" />,
    textH3: "Veterinary medicine student",
    textH4: "UDESC/Brazil",
    textP: "Did I tell you already, that I love cats?",
  },
];

export default timeLineContent;
