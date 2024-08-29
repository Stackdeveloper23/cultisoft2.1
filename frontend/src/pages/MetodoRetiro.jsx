import UserName from "../components/auth/UserName";
import SessionCustomer from "../components/auth/SessionCustomer";
import Retiro from "../components/compra/Retiro";
import Navbar from "../components/common/navbar";

const MetodoRetiro = () => {
    return(
      <div>
      <Navbar>
        <UserName />
        <SessionCustomer/>
        </Navbar>
      <Retiro/>
      </div>
    )
}

export default MetodoRetiro;