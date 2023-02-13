import { useState } from 'react'
import "./style.css"
import { Footer } from '../../Components/footer'


export function Home() {
  return (
    <body>
        <div className="inicio">
          <nav id="tab">
                    <a href="#title-marcas" id="marcas">Marcas</a>
                    <a href="#title-carrocerias" id="carrocerias">Carrocerias</a>
                    <a href="" id="perguntas">Perguntas Frequentes</a>
                    <a href="" id="login">Entrar</a>
                    <a href="" id="rectangle"></a>
              
            </nav>
            <div className="logo">
                    <div id="Icars" title="Icars | Referência em venda de automotivos">Icars</div>
                    <div id="sedan" title="Icars | Referência em venda de automotivos"></div>
            </div>
            <div className="content">
                    <div id="title">Encontre o seu próximo carro aqui!</div>
                    <div id="text">
                        O portal mais completo de busca de veículos com facilidades que garantem o melhor negócio na compra do seu veículo. <br/> <br/>
                        Temos como combustível a paixão pela cultura automotiva e a vontade de oferecer sempre a melhor e mais segura experiência de compra para você.
                    </div>
          </div>
      </div>
      <div className="marcas">
              <div id="title-marcas" >Marcas</div >

              <div id="marca1">
                      <div id="fiat"></div>
              </div>
              <div id="marca2">
                  <div id="ford"></div>
              </div>
              <div id="marca3">
                  <div id="wolks"></div>
              </div>
              <div id="marca4">
                  <div id="chevrolet"></div>
              </div>
                  
              <div id="car1"></div>
                  
              <div id="polygon1"></div>
      </div>
      <div className="value">
              <div className="item1">
                  <div id="img-item1"></div>
                  <div id="content-item1">8000+</div>
                  <div id="content2-item1">Carros para venda</div>
              </div>
              <div className="item2">
                  <div id="img1-item2"></div>
                  <div id="img2-item2"></div>
                  <div id="content-item2">1250+</div>
                  <div id="content2-item2">Usuários por dia</div>
                  <div id="content3-item2">Garantia de Qualidade</div>
              </div>
      </div>
      <div className="carroceria">
          <div id="title-carrocerias">Carrocerias</div>
          <div id="carroceria1">
              <div id="car_carroceria1"></div>
              <div id="economico_car">Econômico</div>
          </div>
          <div id="carroceria2">
              <div id="car_carroceria2"></div>
              <div id="sedan_car">Sedan</div>
          </div>
          <div id="carroceria3">
              <div id="car_carroceria3"></div>
              <div id="minivan_car">Minivan</div>
          </div>
          <div id="carroceria4">
              <div id="car_carroceria4"></div>
              <div id="picape_car">Picape</div>
          </div>
          <div id="car2"></div>
          <div id="polygon2"></div>
      </div>
      <div className="perguntas-frequentes">

      </div>
    
      <Footer/>
    </body>
    
  )
}
