import "../css/Main.css";

function Main(props) {
  return (
    /*<div className="parrafo">
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
    </div>,*/
    <div className="card border"  >
    <div className="card-body">
      <h5 className="card-title">Nombre: {props.alumno.nombre}</h5>
      <h5 className="card-title">Edad: {props.alumno.edad}</h5>
      <h5 className="card-title">Legajo: {props.alumno.legajo}</h5>
      <h5 className="card-title">Numero de Telefono: {props.alumno.telefono}</h5>
      <h5 className="card-text">Hobby: {props.alumno.hobby}</h5>
    </div> </div>

    
    
  );
}

export default Main;
