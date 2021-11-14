import React from "react";
import Hero from "../hero/Hero";
import { Container } from "react-bootstrap";
import BGTop from "../shared/BGTop";
import CommonSection from "../shared/CommonSection";
import List from "../shared/List";

function Portfolio(props) {
  const items = [
    {
      title: "OneHealth",
      link: "https://www.figma.com/proto/uwJcyDqkCOLRCX7ptjLkQd/OneHealth?node-id=133%3A804&scaling=scale-down&starting-point-node-id=133%3A6502",
    },
    {
      title: "Elevato",
      link: "https://www.figma.com/proto/vzB6n96qg4ePZK0BEzZYw8/Board-geral?page-id=0%3A1&node-id=497%3A13528&viewport=431%2C48%2C0.04&scaling=scale-down&starting-point-node-id=497%3A13528&show-proto-sidebar=1",
    },
    {
      title: "Claris",
      link: "https://www.figma.com/proto/IxlFpW2edfQpur25OZhAG6/Competenza?page-id=0%3A1&node-id=353%3A239&viewport=241%2C48%2C1&scaling=min-zoom&starting-point-node-id=639%3A2117&show-proto-sidebar=1",
    },
  ];

  const carouselItems = [
    {
      link: "https://linkedin-m6-front-end.vercel.app/#/",
      image:
        "https://res.cloudinary.com/koulin/image/upload/v1631557965/Portfolio/linkedin-statistics_ujx3ss.png",
      title: "Clone Linkedin",
      info: "Use username Rafux with password test1234 or create your own account! Do not send any sensitive/real data!",
    },
    {
      link: "https://koulinn.github.io/M4-SpotifyREACT/",
      image:
        "https://res.cloudinary.com/koulin/image/upload/v1631558002/Portfolio/https_3A_2F_2Fd1e00ek4ebabms.cloudfront.net_2Fproduction_2F8cd98967-b3ee-43f2-8cd6-7c76741d283c_cdb4bw.jpg",
      title: "Clone Spotify",
      info: "Click on home to start",
    },
    {
      link: "https://capstone-oh-front.vercel.app/",
      image:
        "https://res.cloudinary.com/koulin/image/upload/v1636897549/Portfolio/OneHealth_Slider_img_tezhg1.png",
      title: "OneHealth",
      info: "Capstone project for Strive School",
    },
  ];
  return (
    <>
      <Hero
        isTabletOrMobile={props.isTabletOrMobile}
        isMobile={props.isMobile}
        heroTextFirst={"Take a peek"}
        heroTextSpan={"<br>"}
        heroTextSecond="at projects I have done"
      ></Hero>
      <Container className="p-0 position-relative" fluid>
        <BGTop></BGTop>
        <Container>
          <CommonSection
            imgURL={
              "https://res.cloudinary.com/koulin/image/upload/v1635060036/Portfolio/portfolio_img_iu6obo.jpg"
            }
            isCarousel={false}
            title={"UX projects"}
            text={"Check out my UX portfolio with my projects I participated"}
            order="0"
            spanText="<br>"
            linkUrl="https://drive.google.com/file/d/1FNc4KKIHjcGmSCyByAA6Dl1kSlQZZ4p1/view?usp=sharing"
            linkText={`Download Rafa Lima Portfolio`}
            subsection={<List items={items} />}
          ></CommonSection>
          <CommonSection
            title={"FS-development projects"}
            text={"Some projects I created whilst at Strive School"}
            order={props.isTabletOrMobile ? "0" : "2"}
            spanText="<br>"
            isCarousel={true}
            carouselItems={carouselItems}
          ></CommonSection>
        </Container>
      </Container>
    </>
  );
}

export default Portfolio;
