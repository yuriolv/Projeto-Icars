import "./style.css"

export function Header(){
    return (
        <header>
            <nav className='tab'>
                    <a href="/#Marcas" id="marcas">Marcas</a>
                    <a href="/#Carrocerias" id="carrocerias">Carrocerias</a>
                    <a href="/" id="perguntas">Perguntas Frequentes</a>
                    <a href="/Login" id="rectangle">Entrar</a>
            </nav>
            <a href="/">
                 <div className="logo">
                    <div id="Icars" title="Icars | Referência em venda de automotivos">Icars</div>
                    <div id="sedan" title="Icars | Referência em venda de automotivos"></div>
                </div>
            </a>
            
        </header>
    )
}