import { Route, Routes } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Sidebar from "./components/layouts/Sidebar";
import GetProducts from "./components/GetProducts";
import GetCategories from "./components/GetCategories";
import CreateProduct from "./components/CreateProduct";
import EditProduct from "./components/EditProduct";


function App() {
  return (
    <div className="container">
      <Navbar/>
      <div className="row">
        <div className="col-3">
          <Sidebar/>
        </div>
        <div className="col-9">
          <Routes>
            <Route path="/getproducts" element={<GetProducts/>}/>
            <Route path="/getcategory" element={<GetCategories/>}/>
            <Route path="/create" element={<CreateProduct/>}/>
            <Route path="/edit" element={<EditProduct/>}/>
          </Routes>
        </div>
      </div>
    </div>

  );
}

export default App;
