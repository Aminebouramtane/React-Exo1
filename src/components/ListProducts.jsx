import React from 'react'
import { Link } from 'react-router-dom';

const ListProducts = (props) => {
  return (
    <>
          <table class="table">
              <thead>
                  <tr>
                      <th scope="col">#</th>
                      <th scope="col">Title</th>
                      <th scope="col">Price</th>
                      {/* <th scope="col">Description</th> */}
                      <th scope="col">Category</th>
                      <th scope="col">Action</th>
                  </tr>
              </thead>
              <tbody>
                {props.data&&props.data.map(
                    (val)=>{
                        return(
                            <tr key={val.id}>
                                <td>{val.id}</td>
                                <td>{val.title}</td>
                                <td>{val.price}</td>
                                {/* <td>{val.description}</td> */}
                                <td>{val.category}</td>
                                <td>
                                    <Link className="btn btn-info" to="/details">Show</Link>
                                    <Link className="btn btn-warning" to="/edite">Edit</Link>
                                    <Link className="btn btn-danger">Delete</Link>
                                </td>
                            </tr>
                        );
                    }
                )}
                  <tr>
                    <td></td>
                  </tr>
              </tbody>
          </table>
    </>
  )
}

export default ListProducts