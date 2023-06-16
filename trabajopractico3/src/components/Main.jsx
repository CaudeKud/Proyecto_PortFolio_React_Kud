import "../css/Main.css";

function Main(props) {
  return (
    <div className="card border">
      <div className="card-body">
        <h5 className="card-title">Nombre: {props.alumno.nombre}</h5>
        <h5 className="card-title">Edad: {props.alumno.edad}</h5>
        <h5 className="card-title">Legajo: {props.alumno.legajo}</h5>
        <h5 className="card-title">
          Numero de Telefono: {props.alumno.telefono}
        </h5>
        <h5 className="card-text">Hobby: {props.alumno.hobby}</h5>
      </div>{" "}
    </div>
  );
}

export default Main;
