import "../css/Header.css";
import { Link } from "react-router-dom";

function Header({ Home }) {
  return (
    <div>
      <h1> Detalle de Alumnos </h1>
      <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <div class="container-fluid">
          <div class="collapse navbar-collapse">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link className="nav-link" to={"/"}>
                  Inicio
                </Link>
              </li>

              <li class="nav-item">
                <Link className="nav-link" to={"/contacto"}>
                  Contacto
                </Link>
              </li>

              <li class="nav-item active">
                <Link className="nav-link" to={"/about"}>
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <Navbar bg="light" expand="lg">
                <Container>
                    
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="" target="_blank" >Google</Nav.Link>
                            <Nav.Link href="https://basquetplus.com/" target="_blank">Basquet Plus</Nav.Link>

                        </Nav>
                    
                </Container>
            </Navbar> */}
    </div>
  );
}

export default Header;
