import {Container} from 'react-bootstrap'
import Hero from './hero/Hero'
import NavBar from './navBar/NavBar'
import '../styles/styles.css'

function App() {
  return (
    <Container className="p-0" fluid>
      <NavBar></NavBar>
      <Hero></Hero>
      
    </Container>
  );
}

export default App;
