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
    textH3: "Dedalus - Senior assistant developer",
    textH4: "UK",
    textP:
      "Actively collaborated with my team and professionals from different areas such as sales, cloud, and testing. Created solutions and solved difficult problems. Taught debugging, developer tools, redux toolkit, REACT to many colleagues. Bring up ideas and concepts to improve the development processes. Shown FIGMA to the team which quickly was adopted by everyone. Collaborated with the sales team to secure a UI project. Started discussions about clean code, scalability and maintainability so everyone could follow the same standards and increase code readability.",
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
      "Currently, it has 8 professionals with different expertise, where we share knowledge. I'm also providing guidance for 2 aspiring developers.",
  },
  {
    className: "vertical-timeline-element--custom",
    // contentStyle: contentStyle,
    // contentArrowStyle: contentArrowStyle,
    date: "2021 - 2022",
    iconStyle: iconStyle,
    icon: <IoSchoolOutline />,
    textH3: "Strive School - Tutor (volunteer)",
    textH4: "Europe",
    textP:
      "I helped more than 30 students during their journey. Kept them engaged and provided assistance when necessary. My focus was always to explain how things worked and how to debug their code.",
  },
  {
    className: "vertical-timeline-element--custom",
    date: "2020 - 2022",
    iconStyle: iconStyle,
    icon: <RiSuitcaseLine />,
    textH3: "UX designer volunteer",
    textH4: "Brazil",
    textP:
      "Participated in various projects as volunteer. I could got a UX designer senior that mentored my activies and allowed me to get skills that would take years to learn.",
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
    textP:
      "Team leader. I could learn how to keep a team engaged even under stressful circumstances.",
  },
  {
    className: "vertical-timeline-element--custom",
    date: "2013 - 2015",
    iconStyle: iconStyle,
    icon: <IoSchoolOutline />,
    textH3: "Acupuncture",
    textH4: "Institute Jaqueline Peker/BR",
    textP: "I also learned principles of human behaviour.",
  },
  {
    className: "vertical-timeline-element--custom",
    date: "2013 - 2018",
    iconStyle: iconStyle,
    icon: <RiSuitcaseLine color="#ffffff" />,
    textH3: "Veterinarian Surgeon",
    textH4: "Brazil",
    textP:
      "I also had a dream of being a vet. Although it's all about problem solving and investigation, but it lacks building.",
  },
  {
    className: "vertical-timeline-element--custom",
    date: "2008 - 2013",
    iconStyle: iconStyle,
    icon: <IoSchoolOutline currentColor="white" />,
    textH3: "Veterinary medicine student",
    textH4: "UDESC/Brazil",
    textP: "I love cats!",
  },
];

export default timeLineContent;
