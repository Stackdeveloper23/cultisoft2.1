
import Cardpage from "../components/CardPage.jsx"
import Navbar from "../components/Navbar.jsx"
import Sidervar from "../components/Sidevar.jsx"
import GraficCards from "../components/graficos/GraficCards.jsx"
import Grafico from "../components/graficos/Grafico.jsx"
import TrafficGrafic from "../components/graficos/TrafficGrafic.jsx"


const PanelAdmin = () => {
    return(
        <>

            <div style={{ height: "100vh", display: 'flex' }}>
        {/* Sidebar */}
        <div style={{ width: "225px", flexShrink: 0, height: '100vh', overflowY: 'auto', backgroundColor: '#f8f9fa' }}>
            <Sidervar />
        </div>

        {/* Main Content Area */}
        <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
            {/* Navbar */}
            <div style={{  backgroundColor: '#343a40', color: '#ffffff', width: '100%' }}>
                <Navbar />
            </div>

            {/* Main Content */}
            <div style={{ flexGrow: 1, overflowY: 'auto', padding: '20px' }}>
                <div className="container">
                    <div className="row justify-content-center mt-5 mb-5">
                        <div className="col-sm-12">
                            <h1 className="text-center">Admin</h1>
                            <Cardpage/>
                            <GraficCards />
                            <TrafficGrafic/>
                            <Grafico/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
       </>
    )
}

export default PanelAdmin