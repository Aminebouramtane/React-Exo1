import React from 'react'
import { Link } from 'react-router-dom'


const Sidebar = () => {
  return (
    <>
          <div class="list-group">
              <Link to="/getproducts" class="list-group-item list-group-item-action">Get Products</Link>
              <Link to="/getcategory" class="list-group-item list-group-item-action">Get Category</Link>
              <Link to="/edit" class="list-group-item list-group-item-action">Edit Product</Link>
              <Link to="/create" class="list-group-item list-group-item-action">Create Product</Link>
          </div>
    </>
  )
}

export default Sidebar