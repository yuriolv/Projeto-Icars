import "./style.css"
import Search from '../../Images/search.svg'

export function CarsHeader(){
    return (
        <div id="header">
            <nav className='tab'>
                    <a href="/cars"  id="Procurar">Procurar Carros</a>
                    <a href="/cars" id="Carrinho">Carrinho de compras</a>
                    <a href="/cars" id="Perfil"><div id="profile"></div></a>
            </nav>
            <a href="/cars">
                 <div className="logo">
                    <div id="Icars" title="Icars | Referência em venda de automotivos">Icars</div>
                    <div id="sedan" title="Icars | Referência em venda de automotivos"></div>
                </div>
            </a>
            <div id="search">
                <input type="text" placeholder="Pesquisar" />
                <img src={Search} alt="imagem lupa" />
            </div>
        </div>
    )
}