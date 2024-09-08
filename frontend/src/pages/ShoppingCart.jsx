import Cart from "../components/cart/Cart";
import Footer from "../components/common/footer";
import Navbar from "../components/common/navbar";

const ShoppingCart = () => {
    return(
      <div>
      <Navbar/>
      <div className="container">
      <Cart/>
      </div>
      <Footer/>
      </div>
    )
}

export default ShoppingCart;