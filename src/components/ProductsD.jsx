import axios from 'axios';
import React, { use, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const ProductsD = () => {
    let {id} = useParams();
    let [singleProduct, setSingleProduct] = useState({});
    let getSingleProduct = ()=>{
        axios.get(`https://dummyjson.com/products/${id}`).then((res)=>{
            setSingleProduct(res.data);
        })
    }
    useEffect(()=>{
        getSingleProduct();
    },[])
  return (
    <>
      <div>{singleProduct.title}</div>
      <div>{singleProduct.description}</div>
      <img src={singleProduct.thumbnail} alt={singleProduct.title} />
    </>
  )
}

export default ProductsD