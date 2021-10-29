import React from 'react'
import styled from 'styled-components'
import Product from './Product'
import { useEffect, useState } from 'react'
import axios from 'axios';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

export default function Products({cat, filters, sort}) {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    
    useEffect(() => {
      const getProducts = async () => {
        try {
          const res = await axios.get(
            
               "http://localhost:5000/api/products"
          );
          console.log(res);
          setProducts(res.data);
        } catch (err) {}
      };
      getProducts();
    }, [cat]);
  
    useEffect(() => {
      cat &&
        setFilteredProducts(
          products.filter((item) =>
            Object.entries(filters).every(([key, value]) =>
              item[key].includes(value)
            )
          )
        );
    }, [products, cat, filters]);

    useEffect(() => {
        if (sort === "popular") {
          setFilteredProducts((prev) =>
            [...prev].sort((a, b) => a.createdAt - b.createdAt)
          );
        } else if (sort === "Price (Low to High)") {
          setFilteredProducts((prev) =>
            [...prev].sort((a, b) => a.price - b.price)
          );
        } else {
          setFilteredProducts((prev) =>
            [...prev].sort((a, b) => b.price - a.price)
          );
        }
        console.log(filteredProducts);
      }, [sort]);

    return (
        <Container>
           {cat
        ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
        : products
            .slice(0, 8)
            .map((item) => <Product item={item} key={item.id} />)}
        </Container>
    )
}
