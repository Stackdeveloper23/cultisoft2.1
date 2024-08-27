import axios from "axios";


 const base_api_url = "http://localhost:8000/api/v1"; 

const getToken =()=>{
  const tokenString = sessionStorage.getItem('token')
  const token = JSON.parse(tokenString)
  return token
};


export default{

    //auth
    getLogin: (data)=>axios.post(`${base_api_url}/auth/login`,data),

    getLogout: (data) => {
      const token = getToken();
      return axios.post(`${base_api_url}/auth/logout`,data,{
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })},

      createCategories: (data) => {
        const token = getToken();
        return axios.post(`${base_api_url}/admin/category/create`,data,{
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })},

      getCategories: () => {
        const token = getToken();
        return axios.get(`${base_api_url}/admin/categories`,{
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })},

        getCategoryById: (id) => {
          const token = getToken();
          return axios.get(`${base_api_url}/admin/category/${id}`,{
            headers: {
              'Authorization': `Bearer ${token}`
            }
          })},


        putCategories: (data, id) => {
          const token = getToken();
          return axios.put(`${base_api_url}/admin/category/edit/${id}`,data,{
            headers: {
              'Authorization': `Bearer ${token}`
            }
          })},

        deleteCategories:(id) => {
          const token = getToken();
          return axios.delete(`${base_api_url}/admin/category/delete/${id}`,{
            headers: {
              'Authorization': `Bearer ${token}`
            }
          })},

          //USUARIOS


          createUsers: (data) => {
            const token = getToken();
            return axios.post(`${base_api_url}/admin/user/createUser`,data,{
              headers: {
                'Authorization': `Bearer ${token}`
              }
            })},
    
          getUsers: () => {
            const token = getToken();
            return axios.get(`${base_api_url}/admin/user`,{
              headers: {
                'Authorization': `Bearer ${token}`
              }
            })},
    
            getUserById: (id) => {
              const token = getToken();
              return axios.get(`${base_api_url}/admin/user/${id}`,{
                headers: {
                  'Authorization': `Bearer ${token}`
                }
              })},
    
    
            putUsers: (data, id) => {
              const token = getToken();
              return axios.put(`${base_api_url}/admin/user/edit/${id}`,data,{
                headers: {
                  'Authorization': `Bearer ${token}`
                }
              })},
    
            deleteUsers:(id) => {
              const token = getToken();
              return axios.delete(`${base_api_url}/admin/user/delete/${id}`,{
                headers: {
                  'Authorization': `Bearer ${token}`
                }
              })},
              
        //PRODUCTOS
        createProducts: (data) => {
          const token = getToken();
          return axios.post(`${base_api_url}/admin/products/createProduct`,data,{
            headers: {
              'Authorization': `Bearer ${token}`
            }
          })},
  
        getProducts: () => {
          const token = getToken();
          return axios.get(`${base_api_url}/admin/product`,{
            headers: {
              'Authorization': `Bearer ${token}`
            }
          })},
  
          getProductsById: (id) => {
            const token = getToken();
            return axios.get(`${base_api_url}/admin/product/${id}`,{
              headers: {
                'Authorization': `Bearer ${token}`
              }
            })},
  
  
          putProducts: (data, id) => {
            const token = getToken();
            return axios.put(`${base_api_url}/admin/product/edit/${id}`,data,{
              headers: {
                'Authorization': `Bearer ${token}`
              }
            })},
  
          deleteProducts:(id) => {
            const token = getToken();
            return axios.delete(`${base_api_url}/admin/product/delete/${id}`,{
              headers: {
                'Authorization': `Bearer ${token}`
              }
            })},      

    }