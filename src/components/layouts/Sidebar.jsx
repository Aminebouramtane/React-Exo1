import React from 'react'
import { Link } from 'react-router-dom'


const Sidebar = () => {
  return (
    <>
          <div class="list-group">
              <Link to="/products" class="list-group-item list-group-item-action">List Products</Link>
              <Link to="/getcategory" class="list-group-item list-group-item-action">Get Category</Link>
              <Link to="/products/create" class="list-group-item list-group-item-action">Create Product</Link>
          </div>
    </>
  )
}

export default Sidebar