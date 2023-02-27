import { useState } from 'react'
import "./style.css"
import { Footer } from '../../Components/footer'
import { Header } from '../../Components/header'
import setaup from '../../Images/ArrowUp.svg'
import setadown from '../../Images/ArrowDown.svg'
import { Accordion,AccordionItem,AccordionHeader,AccordionBody } from 'react-headless-accordion'


export function Home() {
    const [replace,setReplace] = useState(false)
    const [replace2,setReplace2] = useState(false)
    const [replace3,setReplace3] = useState(false)
  return (
    <div className="page">
      <div className="inicio">
        <Header/>
        <div className="content">
          <div id="title">Encontre o seu próximo carro aqui!</div>
          <div id="text">
            O portal mais completo de busca de veículos com facilidades que
            garantem o melhor negócio na compra do seu veículo. <br /> <br />
            Temos como combustível a paixão pela cultura automotiva e a vontade
            de oferecer sempre a melhor e mais segura experiência de compra para
            você.
          </div>
        </div>
      </div>
      <div className="marcas" id="Marcas">
        <div id="title-marcas">Marcas</div>

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
      <div className="carroceria" id="Carrocerias">
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
      <div className="perguntas-frequentes" id='Perguntas'>
          <h1>Perguntas Frequentes</h1>
          <Accordion alwaysOpen={true} className='menu'>
              <AccordionItem >
                    <div className="question1">
                            <div id="title-perguntas">
                              Q. Onde e quando posso realizar um teste-drive?
                            </div>
                  <AccordionHeader onClick={() => {
                                  if(replace === true){
                                    setReplace(false)
                                  }else{
                                    setReplace(true)
                                  }
                                }} className="button1">
                              <img
                                src={replace ? setaup : setadown}
                                alt="ArrowVector"
                              />
                  </AccordionHeader>
                  <AccordionBody className="content-perguntas" >
                            Você pode agendar um test drive em casa para este carro em qualquer
                            data e hora que achar conveniente. Nosso gerente de <br /> relacionamentos
                            irá lhe contatar e garantir que o seu carro esteja disponível para
                            você.
                  </AccordionBody>
                        
                    </div>
              </AccordionItem>
              <AccordionItem>
                    <div className="question2">
                    <div id="line"></div>
                            <div id="title-perguntas2">
                              Q. Qual o valor do frete?
                            </div>
                  <AccordionHeader onClick={() => {
                                  if(replace2 === true){
                                    setReplace2(false)
                                  }else{
                                    setReplace2(true)
                                  }
                                }} className='button2'>
                              <img
                                src={replace2 ? setaup : setadown}
                                alt="ArrowVector"
                                id="arrow"
                              />
                  </AccordionHeader>
                  <AccordionBody className="content-perguntas2">
                            Nossos veículos são enviados através do nosso parceiro, ebenezer transportadora, no qual são levados em total segurança e cuidado para sua casa. Quanto ao valor do frete, disponibilizamos o valor de acordo com sua localização, no modelo a ser escolhido.
                  </AccordionBody>
                        
                    </div>
              </AccordionItem>
              <AccordionItem>
                    <div className="question3">
                            <div id="line"></div>
                            <div id="title-perguntas3">
                            Q. Quanto tempo de garantia?
                            </div>
                  <AccordionHeader onClick={() => {
                                  if(replace3 === true){
                                    setReplace3(false)
                                  }else{
                                    setReplace3(true)
                                  }
                                }} className='button3'>
                              <img
                                src={replace3 ? setaup : setadown}
                                alt="ArrowVector"
                                id="arrow"
                              />
                  </AccordionHeader>
                  <AccordionBody className="content-perguntas3">
                  Nossos veículos possuem garantia de 8 anos ou 160.000km. Muita inovação e uma série de benefícios pra você!!
                  </AccordionBody>
                    </div>
              </AccordionItem>
                
          </Accordion>
              
      </div>

      <Footer />
    </div>
  );
}
