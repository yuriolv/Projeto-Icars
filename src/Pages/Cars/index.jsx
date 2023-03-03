import './style.css'
import { CarsHeader } from '../../Components/header2'
import Chevrolet_img from "../../Images/chevrolet.svg"
import Onix from "../../Images/Onix.svg"
import { useEffect, useState } from 'react'
import { FilterCars, getCars } from '../../API/API'

export function Cars () {
    //criar um estado de objetos para conter todas as informações (marcas, ano, tipo)
    //função para alterar o estado e manipular os arrays
    const [brand,setBrand] = useState([-1])
    const [type, setType] = useState([-1])
    const [year, setYear] = useState([-1])

    const [data, setData] = useState({
            brand_id: brand,
            type_id: type,
            year: year
    })
    const [cars, setCars] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await getCars(); 
                setCars(response.data)
            } catch (e) {
                console.error(e);
            }
        };
        fetchData();
      },[]);


      async function Filter (data) {
        try {
                const response = await FilterCars(data)
                setCars(response.data)
        } catch (error) {
            throw new Error(error)
        }
      }
      async function toggleYear(id){
        try {
            const index =  year.findIndex( (element) => element == id )
            const verify = year.findIndex((element) => element == -1)

            if(verify != -1 ){
                year.splice(verify,1)
            }
            
            if(index == -1){
                year.push(id) 
                let years = year 
                setYear(years)
            } else if(index != -1 ) {
                year.splice(index,1)
                const array = year.length
                if(array == 0) {
                    year.push(-1)
                }
            }

        } catch (error) {
            throw new Error(error)
        }
      }

      async function toggleBrand(id){
        try {
            const index =  brand.findIndex( (element) => element == id )
            const verify = brand.findIndex((element) => element == -1)

            if(verify != -1 ){
                brand.splice(verify,1)
            }
            
            if(index == -1){
                brand.push(id) 
                let brands = brand 
                setBrand(brands)
            } else if(index != -1 ) {
                brand.splice(index,1)
                const array = brand.length
                if(array == 0) {
                    console.log('entrei')
                    brand.push(-1)
                }
            }

        } catch (error) {
            throw new Error(error)
        }
      }
      async function toggleType(id){
        try {
            const index =  type.findIndex( (element) => element == id )
            const verify = type.findIndex((element) => element == -1)

            if(verify != -1 ){
                type.splice(verify,1)
            }
            
            if(index == -1){
                type.push(id) 
                let types = type 
                setType(types)
            } else if(index != -1 ) {
                type.splice(index,1)
                const array = type.length
                if(array == 0) {
                    console.log('entrei')
                    type.push(-1)
                }
            }

        } catch (error) {
            throw new Error(error)
        }
      }
    return(
        <>
        <CarsHeader/>
        <div id="body">
            <div className='cars'>
                {cars.slice(0,6).map((car) =>  {return (
                <a id="icon1" href={`cars/${car.id}`} key={car.id}>
                    <div id="brand">
                        <img src={Chevrolet_img} alt="logo" />
                    </div>
                    <img id='car' src={Onix} alt="car_image" />
                    <div id="background"></div>
                    <div id="name_car">{car.name}</div>
                    <div id="price">{car.price}</div>
                </a>
                )   }   )   }
                
            </div>
            <div id='filters' >
                <div id='price_input'>
                    <div id='title_input'>Preço</div>
                    <div id='box-range'>
                        <div id="range_price1">R$ 0</div>
                        <div id='range_price2'>R$ 42.500</div>
                        <input type="range" name="price" min="0" max="30" step='2'  />
                    </div>
                    
                </div>

                <div id='brand_input'>
                    <div id='title_input'>Marcas</div>
                    <div id='box_input'>
                        <input type="checkbox" name="brand" id="filter" 
                        onChange={ (e) => { 
                            if(e.target.checked){
                                toggleBrand(2)
                                console.log(data)
                                Filter(data)
                        } else {
                            toggleBrand(2)
                            console.log(data)
                            Filter(data)
                        }}
                    }
                        />
                        <label htmlFor="">Chevrolet</label>
                    </div>
                    <div id='box_input'>
                        <input type="checkbox" name="filter" id="filter" 
                        onChange={ (e) => { 
                            if(e.target.checked){
                                toggleBrand(5)
                                console.log(data)
                                Filter(data)
                        } else {
                            toggleBrand(5)
                            console.log(data)
                            Filter(data)
                        }}
                    }
                        />
                        <label htmlFor="">Fiat</label>
                    </div>
                    <div id='box_input'>
                        <input type="checkbox" name="filter" id="filter" 
                        onChange={ (e) => { 
                            if(e.target.checked){
                                toggleBrand(1)
                                console.log(data)
                                Filter(data)
                        } else {
                            toggleBrand(1)
                            console.log(data)
                            Filter(data)
                        }}
                    }
                        />
                        <label htmlFor="">Ford</label>
                    </div>
                    <div id='box_input'>
                        <input type="checkbox" name="filter" id="filter" 
                        onChange={ (e) => { 
                            if(e.target.checked){
                                toggleBrand(4)
                                console.log(data)
                                Filter(data)
                        } else {
                            toggleBrand(4)
                            console.log(data)
                            Filter(data)
                        }}
                    }
                        />
                        <label htmlFor="">Volkswagen</label>
                    </div>
                </div>

                <div id='years_input'>
                    <div id='title_input'>Ano</div>
                    <div id='box_input'>
                        <input type="checkbox" name="filter" id="filter" 
                        onChange={ (e) => { 
                            if(e.target.checked){
                                toggleYear(2021,year)
                                console.log(data)
                                Filter(data)
                        } else {
                            toggleYear(2021, year)
                            console.log(data)
                            Filter(data)
                        }}
                    }
                        />
                        <label htmlFor="">2021</label>
                    </div>
                    <div id='box_input'>
                        <input type="checkbox" name="filter" id="filter" 
                        onChange={ (e) => { 
                                if(e.target.checked){
                                    toggleYear(2019,year)
                                    console.log(data)
                                    Filter(data)
                            } else {
                                toggleYear(2019, year)
                                console.log(data)
                                Filter(data)
                            }}
                        }
                        />
                        <label htmlFor="">2019</label>
                    </div>
                    <div id='box_input'>
                        <input type="checkbox" name="filter" id="filter" 
                        onChange={ (e) => { 
                                if(e.target.checked){
                                    toggleYear(2017,year)
                                    console.log(data)
                                    Filter(data)
                            } else {
                                toggleYear(2017, year)
                                console.log(data)
                                Filter(data)
                            }}
                        }
                        />
                        <label htmlFor="">2017</label>
                    </div>
                    <div id='box_input'>
                        <input type="checkbox" name="filter" id="filter" 
                        onChange={ (e) => { 
                                if(e.target.checked){
                                    toggleYear(2015,year)
                                    console.log(data)
                                    Filter(data)
                            } else {
                                toggleYear(2015, year)
                                console.log(data)
                                Filter(data)
                            }}
                        }
                        />
                        <label htmlFor="">2015</label>
                    </div>
                </div>

                <div id='types_input'>
                    <div id='title_input'>Carrocerias</div>
                    <div id='box_input'>
                        <input type="checkbox" name="filter" id="filter" 
                        onChange={ (e) => { 
                            if(e.target.checked){
                                toggleType(4)
                                console.log(data)
                                Filter(data)
                        } else {
                            toggleType(4)
                            console.log(data)
                            Filter(data)
                        }}
                    }
                        />
                        <label htmlFor="">Minivan</label>
                    </div>
                    <div id='box_input'>
                        <input type="checkbox" name="filter" id="filter"
                        onChange={ (e) => { 
                            if(e.target.checked){
                                toggleType(2)
                                console.log(data)
                                Filter(data)
                        } else {
                            toggleType(2)
                            console.log(data)
                            Filter(data)
                        }}
                    }
                         />
                        <label htmlFor="">Sedan</label>
                    </div>
                    <div id='box_input'>
                        <input type="checkbox" name="filter" id="filter" 
                        onChange={ (e) => { 
                            if(e.target.checked){
                                toggleType(3)
                                console.log(data)
                                Filter(data)
                        } else {
                            toggleType(3)
                            console.log(data)
                            Filter(data)
                        }}
                    }
                        />
                        <label htmlFor="">Pick-up</label>
                    </div>
                    <div id='box_input'>
                        <input type="checkbox" name="filter" id="filter" 
                        onChange={ (e) => { 
                            if(e.target.checked){
                                toggleType(1)
                                console.log(data)
                                Filter(data)
                        } else {
                            toggleType(1)
                            console.log(data)
                            Filter(data)
                        }}
                    }
                        />
                        <label htmlFor="">Hatck</label>
                    </div>
                </div>
                
            </div>
        </div>
        </>
    )
}