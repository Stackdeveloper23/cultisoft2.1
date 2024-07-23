
import Carrusel from "../components/common/carrusel"
import Navbar from "../components/common/navbar"
import ProductList from "../components/common/productList"



  

const HomePage = () => {
    return (
        <>
        <Navbar />
        <Carrusel/>
        <h1>welcome home page</h1>
        <ProductList/>
        </>
    )
}

export default HomePage