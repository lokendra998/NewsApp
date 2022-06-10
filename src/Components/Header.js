import {Navbar,Container,Nav} from 'react-bootstrap';



const Header=()=>{
    return(
      <Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#home">News-app</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home" variant="Disabled">Home</Nav.Link>
      </Nav>
      </Container>
    </Navbar>
    )
};
export default Header;