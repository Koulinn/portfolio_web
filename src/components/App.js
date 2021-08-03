import { Container } from 'react-bootstrap'
import NavBar from './navBar/NavBar'
import '../styles/styles.css'
import { useMediaQuery } from 'react-responsive'
import Pages from './shared/Pages'

function App() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 767px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 576px)' })
  return (
    <Container className="p-0" fluid>
      <NavBar isTabletOrMobile={isTabletOrMobile} isMobile={isMobile}></NavBar>
      <Pages isTabletOrMobile={isTabletOrMobile} isMobile={isMobile}></Pages>


    </Container>
  );
}

export default App;
