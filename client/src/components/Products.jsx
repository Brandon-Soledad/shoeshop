import React from 'react'
import styled from 'styled-components'
import { shoeProducts } from '../data'
import Product from './Product'
import { useEffect, useState } from 'react'
import axios from 'axios';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
export default function Products({cat, filter, sort}) {
    console.log({cat,filter,sort});
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(()=>{
        const getProducts = async ()=>{
            try{
                const res = await axios.get("http://localhost:5000/api/products");
                console.log(res);
            }catch(err){}
        };
        getProducts()
        
    }, [cat]);
    // const [products, setProducts] = useState([]);
    // const [filteredProducts, setFilteredProducts] = useState([]);
  
    // useEffect(() => {
    //   const getProducts = async () => {
    //     try {
    //       const res = await axios.get(
    //         cat
    //           ? `http://localhost:5000/api/products?category=${cat}`
    //           : "http://localhost:5000/api/products"
    //       );
    //       setProducts(res.data);
    //     } catch (err) {}
    //   };
    //   getProducts();
    // }, [cat]);
  
    // useEffect(() => {
    //   cat &&
    //     setFilteredProducts(
    //       products.filter((item) =>
    //         Object.entries(filters).every(([key, value]) =>
    //           item[key].includes(value)
    //         )
    //       )
    //     );
    // }, [products, cat, filters]);

    return (
        <Container>
            {shoeProducts.map((item)=>(
                <Product item={item} key={item.id}/>
            ))}
        </Container>
    )
}
