import { Container } from 'react-bootstrap'
import Hero from './hero/Hero'
import NavBar from './navBar/NavBar'
import '../styles/styles.css'
import { useMediaQuery } from 'react-responsive'

function App() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 767px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 576px)' })
  return (
    <Container className="p-0" fluid>
      <NavBar isTabletOrMobile={isTabletOrMobile} isMobile={isMobile}></NavBar>
      <Hero isTabletOrMobile={isTabletOrMobile} isMobile={isMobile} heroTextFirst={"Hello, I’m Rafa!"} heroTextSpan={"<br>"} heroTextSecond="Welcome"></Hero>


    </Container>
  );
}

export default App;
