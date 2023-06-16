import "../css/MainAbout.css";
import { useState } from 'react'

function MainAbout() {
  const [imagen, setImagen] = useState(1);

  const imagenDerecha = () => {
    console.log(imagen)
    imagen< 3 ? setImagen(imagen+1) : setImagen(1);

  }

const imagenIzquierda = ( ) => {
  console.log(imagen)
  imagen>1? setImagen(imagen-1) : setImagen(3);
}
  return (
    <div class="aboutContainer">
      <div class="aboutContainerChildren1">
      <img src={require(`../assets/Fot_perfil${imagen}.jpeg`)} alt="fotodeperfil" className='img' />
        <br />
        <button onClick={imagenIzquierda}>Izquierda</button> 
        <button onClick={imagenDerecha}>Derecha</button>
      </div>
      <div class="aboutContainerChildren2">
        <p>
          Mi nombre es Héctor soy estudiante de programación de la facultad
          regional Tucumán en este tiempo de estudio aprendí lenguajes como
          Ruby, C#, Javascript, asi como tambien el manejo de base de datos como
          JSON y MySQL estoy interesado en hacer prácticas profesionales de
          programacion al igual tambien en trabajar en proyectos . Considero que
          trabajar en proyectos aumenta el desarrollo de las habilidades y
          conocimientos adquiridos. Durante mi etapa como estudiante, he tenido
          ocasión de ampliar mis conocimientos y me ha ofrecido la oportunidad
          de profundizar en diferentes áreas, Me gustaría poder ampliar mi
          perfil como programador es por eso que realizo algunos estudios de
          otros temas para ampliar mis conocimientos
        </p>
      </div>
    </div>
  );
}

export default MainAbout;
