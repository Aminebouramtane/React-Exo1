import React from 'react'

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
                          <a className="nav-link" href="dd">Home <span className="sr-only">(current)</span></a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="dd">Features</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="ddd">Pricing</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link disabled" href="dd">Disabled</a>
                      </li>
                  </ul>
              </div>
          </nav><br />
    
    </>
  )
}

export default Navbar