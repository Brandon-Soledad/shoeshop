import React from 'react'
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../mobileUI";
import { useLocation } from 'react-router';
import { useState } from 'react';

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;

`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;


export default function ProductList() {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("popular");

    const handleFilters = (e) => {
      const value = e.target.value;
      setFilters({
        ...filters,
        [e.target.name]: value,
      });
    };
    return (
        <Container>
        <Navbar />
        <Announcement />
        <Title>{cat}</Title>
        <FilterContainer>
          <Filter>
            <FilterText>Filter Products:</FilterText>
            <Select name="brand" onChange={handleFilters}>
              <Option disabled >
                Brand
              </Option>
              <Option>Jordan</Option>
              <Option>Nike</Option>
              <Option>Adidas</Option>
            </Select>
            <Select name="size" onChange={handleFilters}>
              <Option disabled >
                Size
              </Option>
              <Option>3</Option>
              <Option>4</Option>
              <Option>5</Option>
              <Option>6</Option>
              <Option>7</Option>
              <Option>8</Option>
              <Option>9</Option>
              <Option>10</Option>
              <Option>11</Option>
              <Option>12</Option>
            </Select>
          </Filter>
          <Filter>
            <FilterText>Sort Products:</FilterText>
            <Select onChange={(e) => setSort(e.target.value)}>
              <Option value="popular">Popular</Option>
              <Option value="lowtohigh">Price (Low to High)</Option>
              <Option value="hightolow">Price (High to Low)</Option>
            </Select>
          </Filter>
        </FilterContainer>
        <Products cat={cat} filters={filters} sort={sort}/>
        <Newsletter />
        <Footer />
      </Container>
    )
}
