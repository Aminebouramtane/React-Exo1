import { Route, Routes } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Sidebar from "./components/layouts/Sidebar";
import GetProducts from "./components/GetProducts";
import GetCategories from "./components/GetCategories";
import CreateProduct from "./components/CreateProduct";
import EditProduct from "./components/EditProduct";
import { useEffect, useState } from "react";
import ListProducts from "./components/ListProducts";


function App() {
  const[data,setData]=useState("");
  // const url = "http://localhost:9000/products";

  useEffect(()=>{

    fetch("https://fakestoreapi.com/products/")
    .then(res=>res.json())
    .then(data=>setData(data));

  },[])
  
  return (
    <div className="container">
      <Navbar/>
      <div className="row">
        <div className="col-3">
          <Sidebar/>
        </div>
        <div className="col-9">
          <Routes>
            <Route path="/" element={<GetProducts data={data}/>}/>
            <Route path="/products" element={<ListProducts data={data}/>}/>
            <Route path="products/byCategory" element={<GetCategories/>}/>
            <Route path="products/create" element={<CreateProduct/>}/>
            <Route path="/edite" element={<EditProduct/>}/>
          </Routes>
        </div>
      </div>
    </div>

  );
}

export default App;
