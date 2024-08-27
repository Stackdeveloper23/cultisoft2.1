import Cardpage from "../components/CardPage"
import Navbar from "../components/Navbar"
import Sidervar from "../components/Sidevar"


const PanelAdmin = () => {
    return(
        <>
         <Navbar/>
         <div className="container-fluid margen" style={{ display: 'flex' }}>
                <div style={{ width: "225px", flexShrink: 0 }}>
                    <Sidervar />
                </div>
                <div style={{ flexGrow: 1 }}>
                    <div className="container">
                        <div className="row justify-content-center mt-5 mb-5">
                            <div className="col-sm-12">
                                <h1 className="text-center">Admin</h1>
                                <Cardpage/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </>
    )
}

export default PanelAdmin