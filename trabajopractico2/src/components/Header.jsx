// import Fot_perfil from "../assets/Fot_perfil.jpeg"
// import "../css/Header.css"
import { Container, Navbar, Nav } from "react-bootstrap"



function Header() {
    
    return (
      <div>
        <h1 center > Detalle de  Alumnos </h1>
        
        <Navbar bg="light" expand="lg">
                <Container>
                    
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="https://www.google.com" target="_blank" >Google</Nav.Link>
                            <Nav.Link href="https://basquetplus.com/" target="_blank">Basquet Plus</Nav.Link>

                        </Nav>
                    
                </Container>
            </Navbar>
        
      </div>
    );
}

export default Header;