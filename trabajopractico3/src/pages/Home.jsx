import Header from '../components/Header'
import Footer from '../components/Footer'
import Main from '../components/Main'

const Home = () => {
  const alumno = {
    nombre: "Hector Caudevila",
    edad: "42",
    legajo: " 55529",
    telefono: "3513328786",
    hobby: "Basquet",
  };
  return (
    <div>
      <Header/>
          <Main alumno={alumno}/>
         
          <Footer/>
    </div>
  );
};

export default Home;