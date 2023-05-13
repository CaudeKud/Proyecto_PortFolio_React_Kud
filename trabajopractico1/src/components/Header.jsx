import Fot_perfil from "../assets/Fot_perfil.jpeg"
import "../css/Header.css"

function Header() {
    
    return (
      <div>
        <h1 center > Héctor Caudevila </h1>
        {/* La Universidad ..... -Tranquilo, una foto no influye en nada
        <br />
        <br />
        <img src={FotodePerfil} alt="" clasname="img" /> */}
       
        <img src={Fot_perfil} alt="" class="img" />
        <br />
        <br />
      </div>
    );
}

export default Header;