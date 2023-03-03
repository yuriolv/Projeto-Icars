import "./style.css"
import Search from '../../Images/search.svg'

export function CarsHeader(){
    return (
        <div id="header2">
            <nav className='tab2'>
                    <a href="/cars"  id="Procurar">Procurar Carros</a>
                    <a href="/cars" id="Carrinho">Carrinho de compras</a>
                    <a href="/cars" id="Perfil"><div id="profile"></div></a>
            </nav>
            <a href="/cars">
                 <div className="logo2">
                    <div id="Icars2" title="Icars | Referência em venda de automotivos">Icars</div>
                    <div id="sedan2" title="Icars | Referência em venda de automotivos"></div>
                </div>
            </a>
            <div id="search">
                <input type="text" placeholder="Pesquisar" />
                <img src={Search} alt="imagem lupa" />
            </div>
        </div>
    )
}