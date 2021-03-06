import { Container } from 'react-bootstrap'
import '../styles/styles.css'
import { useMediaQuery } from 'react-responsive'
import Pages from './shared/Pages'
import "animate.css/animate.min.css";


function App() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 767px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 576px)' })


  return (
    <Container className="p-0" fluid>
        <Pages isTabletOrMobile={isTabletOrMobile} isMobile={isMobile}></Pages>
    </Container>
  );
}

export default App;
