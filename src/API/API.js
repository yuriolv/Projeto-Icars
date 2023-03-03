import  axios  from "axios";

export const Api = axios.create({baseURL:'http://localhost:3000'})

export const CreatUser = async (data) => {
    try {
        const response = await Api.post('/user', {data} )
        console.log(response)
    } catch (error) {
        throw new Error(error)
    }
}
export const FilterCars = async (data) => {
    try {

        const response = await Api.post(`cars/filter`, {data})

        return response
    } catch (error) {
        throw new Error(error)
    }
}
export const getCars = async (url) => {
    try {
        const response = await Api.get(`/cars`)

        return response
    } catch (error) {
        throw new Error(error)
    }
}
export const userLogin = async (data) => {
    try {
        const response  = await Api.post('/user/LogIn', {data})
        console.log(response)
    } catch (error) {
        throw new Error(error)
    }
}