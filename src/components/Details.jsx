import React from 'react'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {


    const[data,setData]=useState();
    let {productId} = useParams();
  
    useEffect(()=>{
  
      fetch(`https://fakestoreapi.com/products/${productId}`)
      .then(res=>res.json())
      .then(data=>setData(data));
  
    },[])
    // console.log(productId);

  return (
    <>
       {data&& <h1>{data.title}</h1>}
    </>
  )
}

export default Details