import axios from "axios";


const base_api_url = "http://localhost:8000/api/v1";
const getToken =()=>{
    const tokenString = sessionStorage.getItem('token')
    const token = JSON.parse(tokenString)
    return token
  };
  
export default{

    getLogin: (data)=>axios.post(`${base_api_url}/auth/login`,data),
    
    getLogout: (data) => {
        const token = getToken();
        return axios.post(`${base_api_url}/auth/logout`,data,{
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })},

    getProducts: async(page=1) => {
        try{
        const response = await axios.get(`${base_api_url}/product?page=${page}`)
    return response.data;    
    } catch (error) {
        console.error('error al obtener productos', error)
        }
    },

    getCategories: async(page=1) => {
        try{
            const response = await axios.get(`${base_api_url}/category?page=${page}`)
            return response.data;
        }catch (error) {
            console.error('error al obtener las categorias', error)
        }
    },

    getRegister: async(formData) => {
        try{
            const response = await axios.post(`${base_api_url}/auth/register`, formData)
            return response.data;
        }catch(error){
            console.error('error al registrar el usuario', error)
            throw error;
        }
    },

    getAllCategories: async()=> {
        try{
            const response = await axios.get(`${base_api_url}/categories`)
        return response.data;    
        } catch (error) {
            console.error('error al obtener categorias', error)
            }
    },

    getProductsByIdCategory: async(categoryId)=> {
        try{
            console.log('Category ID:', categoryId);

            const response = await axios.get(`${base_api_url}/category/${categoryId}/products`);
        return response.data;  
        } catch (error) {
            console.error('error al obtener productos', error)
            }

    },

    getCategoryById: async(categoryId)=> {
        try{
            const response = await axios.get(`${base_api_url}/category/${categoryId}`);
            return response.data;
        }catch (error) {
            console.log('error al mostrar la categoria', error)
        }
    },

    getProduct: async (id)=> {
        try{
            const response = await axios.get(`${base_api_url}/product/${id}`);
            console.log('respuesta' , response)
            return response.data;
        }catch (error) {
            console.log('error de info de producto', error)
        }
    },
    }