import { Container } from 'react-bootstrap'
import NavBar from './navBar/NavBar'
import '../styles/styles.css'
import { useMediaQuery } from 'react-responsive'
import Pages from './shared/Pages'
import Contact from './shared/Contact/Contact'
import Footer from './shared/footer/Footer'

function App() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 767px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 576px)' })


  return (
    <Container className="p-0" fluid>
      <header>
        <NavBar isTabletOrMobile={isTabletOrMobile} isMobile={isMobile}></NavBar>
      </header>

      <main>
        <Pages isTabletOrMobile={isTabletOrMobile} isMobile={isMobile}></Pages>
        <section className="">
          <Contact isTabletOrMobile={isTabletOrMobile} isMobile={isMobile} spanText="<br>"></Contact>
        </section>
      </main>
      
      <footer>
        <Footer></Footer>
        
      </footer>


    </Container>
  );
}

export default App;
