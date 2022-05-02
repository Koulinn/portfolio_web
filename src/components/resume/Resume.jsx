import React, { useEffect } from "react";
import Hero from "../hero/Hero";
import { Container } from "react-bootstrap";
import BGTop from "../shared/BGTop";
import CommonSection from "../shared/CommonSection";
import TimeLine from "./timeLine/TimeLine";
import { Element, scroller } from "react-scroll";

function Resume(props) {
  useEffect(() => {
    scroller.scrollTo("resumeSection", {
      duration: 1000,
      delay: 100,
      smooth: true,
      offset: -150,
    });
  }, []);
  return (
    <>
      <Hero
        isTabletOrMobile={props.isTabletOrMobile}
        isMobile={props.isMobile}
        heroTextFirst={"I already did"}
        heroTextSpan={"<br>"}
        heroTextSecond="many things"
      ></Hero>
      <Container className="p-0 position-relative" fluid>
        <BGTop></BGTop>
        <Element name="resumeSection">
          <Container>
            <CommonSection
              imgURL={
                "https://res.cloudinary.com/koulin/image/upload/v1632161631/Portfolio/joao-ferrao-4YzrcDNcRVg-unsplash_1_pb4gcd.jpg"
              }
              isCarousel={false}
              title={"Check out my CV"}
              text={`I'm a multi-skilled team player who loves to collaborate and solve problems!`}
              order="0"
              linkUrl="https://drive.google.com/file/d/1KEbsfGDaC7yYKnERwDCH_Xs7Nk_NKaqO/view?usp=sharing"
              linkText={`Download Rafa Lima CV`}
              download={true}
            ></CommonSection>
            <TimeLine />
          </Container>
        </Element>
      </Container>
    </>
  );
}

export default Resume;
