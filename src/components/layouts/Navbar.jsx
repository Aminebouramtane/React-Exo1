import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand" href="dd">Navbar</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                      <li className="nav-item active">
                          <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                      </li>
                  </ul>
              </div>
          </nav><br />
    
    </>
  )
}

export default Navbar