import axios from "axios";


const base_api_url = "http://localhost:8000/api/v1";

export default{

    getProducts: async(page=1) => {
        try{
        const response = await axios.get(`${base_api_url}/product?page=${page}`)
    return response.data;    
    } catch (error) {
        console.error('error al obtener productos', error)
        }
    },

    }