import SessionCustomer from "../components/auth/SessionCustomer";
import UserName from "../components/auth/UserName";
import Cart from "../components/cart/Cart";
import Navbar from "../components/common/navbar";

const ShoppingCart = () => {
    return(
      <div>
      <Navbar>
        <UserName />
        <SessionCustomer/>
        </Navbar>
      <Cart/>
      </div>
    )
}

export default ShoppingCart;