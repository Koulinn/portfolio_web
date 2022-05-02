import React, { useEffect } from "react";
import Hero from "../hero/Hero";
import { Container } from "react-bootstrap";
import BGTop from "../shared/BGTop";
import CommonSection from "../shared/CommonSection";
import List from "../shared/List";
import { Element, scroller } from "react-scroll";

function Portfolio(props) {
  useEffect(() => {
    scroller.scrollTo("portfolioSection", {
      duration: 1000,
      delay: 100,
      smooth: true,
      offset: -150,
    });
  }, []);

  const carouselItems = [
    {
      link: "https://linkedin-m6-front-end.vercel.app/#/",
      image:
        "https://res.cloudinary.com/koulin/image/upload/v1631557965/Portfolio/linkedin-statistics_ujx3ss.png",
      title: "Clone Linkedin",
      info: "Use username Rafux with password test1234 or create your own account! Do not send any sensitive/real data!",
    },
    {
      link: "https://m4-spotify-react.vercel.app/",
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
        heroTextSecond="at projects I have done"
      ></Hero>
      <Container className="p-0 position-relative" fluid>
        <BGTop></BGTop>
        <Element name="portfolioSection">
          <Container>
            <CommonSection
              title={"Full-Stack REACT projects"}
              text={`I believe in project driven learning. On each project I add an extra layer of complexity.`}
              isCarousel={true}
              carouselItems={carouselItems}
              order="0"
            />
            <CommonSection
              imgURL={
                "https://res.cloudinary.com/koulin/image/upload/v1635060036/Portfolio/portfolio_img_iu6obo.jpg"
              }
              isCarousel={false}
              title={"UX projects"}
              text={
                "I have passion about UX design. I truly believe the UCD approach can make the whole difference. Make interactions clear is always my goal."
              }
              order={props.isTabletOrMobile ? "0" : "2"}
              linkUrl="https://drive.google.com/file/d/1jWle1TAMU8Ha8vNANcd4e9CTvhYkRx1o/view?usp=sharing"
              linkText={`Download UX Portfolio`}
              // subsection={<List items={items} />}
            />
          </Container>
        </Element>
      </Container>
    </>
  );
}

export default Portfolio;
