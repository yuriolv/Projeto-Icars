import "./style.css"
import { Header } from "../header";

export function LogSig () {
    return (
      <div className="Page">
        <Header/>
        <div id="content-page">
            <div id="cars">
                Carros que você irá amar!
            </div>
            <div id="Information">
                Com a confiança de <span>+20.000</span> <br/> compradores.
            </div>
            
        </div>
      </div>
    );
}