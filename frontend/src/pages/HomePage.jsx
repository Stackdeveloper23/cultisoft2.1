import Carrusel from "../components/common/carrusel"
import CategoryList from "../components/common/categoryList"
import Footer from "../components/common/footer"
import Navbar from "../components/common/navbar"
import ProductList from "../components/common/productList"
import SectionCategory from "../components/common/SectionCategory"



  

const HomePage = () => {
    return (
        <>
        <Navbar/>
        <Carrusel/>
        <div className="container">
    <hr className="featurette-divider"></hr>
        <SectionCategory />
    <hr className="featurette-divider"></hr>
    </div>
        <section id="products_section">
        <h1 className="text-center mb-5" id="products_title">Productos Mas Vendidos</h1>
        <ProductList/>
        </section>
        <section className="mb-5 mt-5">
            <h1 className="text-center mb-5">Visita nuestras categorias</h1>
            <CategoryList/>
        </section>
        <Footer/>
        </>
    )
}

export default HomePage