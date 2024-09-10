import axios from "axios";


const base_api_url = "http://localhost:8000/api/v1";
const getToken =()=>{
    const tokenString = sessionStorage.getItem('token')
    const token = JSON.parse(tokenString)
    return token
  };
  
export default{

    getLogin: (data)=>axios.post(`${base_api_url}/auth/login`,data),
    
    getPasswordReset: (data)=>axios.post(`${base_api_url}/reset-password`,data),

    getChatbot: (data)=>axios.post(`${base_api_url}/chatbot`,data),
    
  
    
    SearchBar: (query)=>axios.get(`${base_api_url}/search`,{params: { query }}),
    
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
           // console.log('Category ID:', categoryId);

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
            //console.log('respuesta' , response)
            return response.data;
        }catch (error) {
            console.log('error de info de producto', error)
        }
    },

    CreatePreference: async ()=> {
        const token = getToken();
        try{
          const response = await axios.post(`${base_api_url}/create-payment-preference`,{}, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
          return response.data;
        }catch (error){
          console.log('error al crear la preferencia', error)
        }},

        getAddToCart: async (id) => {
          const token = getToken();  // Obtener el token
          try {
            const response = await axios.post(`${base_api_url}/cart/add/${id}`, {}, {
              headers: {
                'Authorization': `Bearer ${token}`
              }
            });
            return response.data;
          } catch (error) {
            console.error('Error al agregar el producto:', error);
          }
        },

        getCartProducts: async () => {
          const token = getToken();
          try {
              const response = await axios.get(`${base_api_url}/cart`, {
                  headers: {
                      'Authorization': `Bearer ${token}`
                  }
              });
              return response;
          } catch (error) {
              console.error('Error al traer productos al carrito:', error);
          }
        },

        getCartDelete: async (itemId) => {
          const token = getToken();  
          //console.log('token de usuario:', token);
          try {
              const response = await axios.delete(`${base_api_url}/cart/remove/${itemId}`, {
                  headers: {
                      'Authorization': `Bearer ${token}`
                  }
              });
              return response;
          } catch (error) {
              console.error('Error al traer productos al carrito:', error);
          }
        },

        CartQuantity: async (itemId, quantity) => {
          const token = getToken();  
         // console.log('token de usuario:', token);
          try {
              const response = await axios.patch(`${base_api_url}/cart/items/${itemId}`, { quantity }, {
                  headers: {
                      'Authorization': `Bearer ${token}`
                  }
              });
              return response;
          } catch (error) {
              console.error('Error al cambiar la cantidad:', error);
          }
        },

        postDatosEnvio: async (formData) => {
            const token = getToken();  
            try {
                const response = await axios.post(`${base_api_url}/compra`, formData, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                return response;
            } catch (error) {
                console.error('Error al enviar datos de compra:', error);
            }
          },
          postDatosEnvioFinca: async (formData) => {
            const token = getToken();  
            try {
                const response = await axios.post(`${base_api_url}/compra/finca`, formData, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                return response;
            } catch (error) {
                console.error('Error al enviar datos de compra:', error);
            }
          },

          deleteCompra: async (cartsId) => {
            const token = getToken();  
            try {
                const response = await axios.delete(`${base_api_url}/compra/eliminar/${cartsId}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                return response;
            } catch (error) {
                console.error('Error al eliminar la compra:', error);
            }
          },

          getSoporte: (formData)=> {
            const token = getToken();
            try{
            return axios.post(`${base_api_url}/soporte/create`,formData,{
              headers: {
                'Authorization': `Bearer ${token}`
              }
            })
        } catch (error) {
            console.error('error al enviar el formulario', error)
        }
    },


    


    }