import React from 'react';

const GetProducts = (props) => {
  console.log(props.data);
  const products = props.data;
  return (
    <>
      {products && products.map((product) => {
        return (
          <div className="row" key={product.id}>
            <div className="card col-4">
              <img className="card-img-top" src={product.image} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">${product.price}</small>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default GetProducts;
