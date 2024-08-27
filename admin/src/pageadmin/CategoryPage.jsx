
import CategoryTable from "../components/CategoryTable";
import Navbar from "../components/Navbar";
import Sidervar from "../components/Sidevar";


const CategoryPage = () => {
   
    return (
        <>
        <Navbar />
          <div style={{ height: "100vh", display: 'flex' }}>
        <div style={{ width: "225px", flexShrink: 0 }}>
            <Sidervar />
        </div>
        <div style={{ flexGrow: 1, overflowY: "auto" }}>
            <div className="container">
                <div className="row justify-content-center mt-5 mb-5">
                    <div className="col-sm-12">
                        <h1 className="text-center">Admin</h1>
                        <CategoryTable />
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}
export default CategoryPage;