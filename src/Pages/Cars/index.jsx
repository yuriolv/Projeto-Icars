import './style.css'
import { CarsHeader } from '../../Components/header2'
import Chevrolet from "../../Images/chevrolet.svg"
import Onix from "../../Images/Onix.svg"

export function Cars () {
    return(
        <>
        <CarsHeader/>
        <div id="body">
            <div className='cars'>
                <a id='icon1' href='/cars'>
                    <div id="brand">
                        <img src={Chevrolet} alt="logo" />
                    </div>
                    <img id='car' src={Onix} alt="car_image" />
                    <div id="background"></div>
                    <div id="name_car">Chevrolet Onix 2021</div>
                    <div id="price">R$26.990,00</div>
                </a>
                <a id='icon2' href='/cars'>
                    <div id="brand">
                        <img src={Chevrolet} alt="logo" />
                    </div>
                    <img id='car' src={Onix} alt="car_image" />
                    <div id="background"></div>
                    <div id="name_car">Chevrolet Onix 2021</div>
                    <div id="price">R$26.990,00</div>
                </a>
                <a id='icon3' href='/cars'>
                    <div id="brand">
                        <img src={Chevrolet} alt="logo" />
                    </div>
                    <img id='car' src={Onix} alt="car_image" />
                    <div id="background"></div>
                    <div id="name_car">Chevrolet Onix 2021</div>
                    <div id="price">R$26.990,00</div>
                </a>
                <a id='icon4' href='/cars'>
                    <div id="brand">
                        <img src={Chevrolet} alt="logo" />
                    </div>
                    <img id='car' src={Onix} alt="car_image" />
                    <div id="background"></div>
                    <div id="name_car">Onix</div>
                    <div id="price">R$26.990,00</div>
                </a>
                <a id='icon5' href='/cars'>
                    <div id="brand">
                        <img src={Chevrolet} alt="logo" />
                    </div>
                    <img id='car' src={Onix} alt="car_image" />
                    <div id="background"></div>
                    <div id="name_car">Chevrolet Onix 2021</div>
                    <div id="price">R$26.990,00</div>
                </a>
                <a id='icon6' href='/cars'>
                    <div id="brand">
                        <img src={Chevrolet} alt="logo" />
                    </div>
                    <img id='car' src={Onix} alt="car_image" />
                    <div id="background"></div>
                    <div id="name_car">Chevrolet Onix 2021</div>
                    <div id="price">R$26.990,00</div>
                </a>
                
            </div>
            <div id='filters'>

            </div>
        </div>
        </>
    )
}