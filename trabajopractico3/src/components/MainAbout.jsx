import Fot_perfil from "../assets/Fot_perfil.jpeg"
import "../css/Header.css"
import { Container, Navbar, Nav } from "react-bootstrap"



function Header() {
    
    return (
      <div>
        <img src={Fot_perfil}  alt="" class="img" />
       

        <Navbar bg="light" expand="lg">
                <Container>
                    
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="https://www.google.com" target="_blank" >Google</Nav.Link>
                            <Nav.Link href="https://basquetplus.com/" target="_blank">Basquet Plus</Nav.Link>

                        </Nav>
                    
                </Container>
            </Navbar>
            <div className="parrafo" align="center" >
             Mi nombre es Héctor soy estudiante de programación de la facultad regional
            Tucumán en este tiempo de estudio aprendí lenguajes como Ruby, C#,
      Javascript, asi como tambien el manejo de base de datos como JSON y MySQL
      estoy interesado en hacer prácticas profesionales de programacion al igual
      tambien en trabajar en proyectos . Considero que trabajar en proyectos
      aumenta el desarrollo de las habilidades y conocimientos adquiridos.
      Durante mi etapa como estudiante, he tenido ocasión de ampliar mis
      conocimientos y me ha ofrecido la oportunidad de profundizar en diferentes
      áreas, Me gustaría poder ampliar mi perfil como programador es por eso que
      realizo algunos estudios de otros temas para ampliar mis conocimientos
    </div>
      </div>
      
    );
}

export default Header;