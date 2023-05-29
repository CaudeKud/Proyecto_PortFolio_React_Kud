import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import MainContact from '../components/MainContact'




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
      <Header />
      <Main alumno={alumno} />
      <br />
      <MainContact />
      <br />
      <Footer />
    </div>
  );
};

export default Home;