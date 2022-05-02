import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Hero from "../hero/Hero";
import CommonSection from "../shared/CommonSection";
import BGTop from "../shared/BGTop";

import { Element, scroller } from "react-scroll";

function Home(props) {
  useEffect(() => {
    scroller.scrollTo("homeSection", {
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
        heroTextFirst={"Hello! I’m Rafa"}
        heroTextSpan={"<br>"}
        heroTextSecond="Welcome!"
      ></Hero>
      <Container className="p-0 position-relative" fluid>
        <BGTop></BGTop>
        <Element name="homeSection">
          <Container>
            <CommonSection
              title={"Full-stack REACT developer with passion about UX"}
              text={`Check out some projects that I did. Currently, I'm focusing in Typescript.`}
              order="0"
              imgURL={
                "https://res.cloudinary.com/koulin/image/upload/v1632159321/Portfolio/bigstock-Lego-Workers_1_y3wssk.jpg"
              }
              isCarousel={false}
              internalUrl="/portfolio"
              linkText={`Go to portfolio`}
            ></CommonSection>

            <CommonSection
              title={`Always in continuing professional development`}
              text={"To keep pace with new technologies and provide solutions."}
              order={props.isTabletOrMobile ? "0" : "2"}
              imgURL={
                "https://res.cloudinary.com/koulin/image/upload/v1632161631/Portfolio/joao-ferrao-4YzrcDNcRVg-unsplash_1_pb4gcd.jpg"
              }
              isCarousel={false}
              internalUrl="/resume"
              linkText={`Go to resume`}
            ></CommonSection>
          </Container>
        </Element>
      </Container>
    </>
  );
}

export default Home;
