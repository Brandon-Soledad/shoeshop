import { ShoppingBagOutlined } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components';
import { mobile } from "../mobileUI";

const Info = styled.div`
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    flex-direction: column;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.5s ease;
    ${mobile({ height: "20vh" })}
`

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
    &:hover ${Info}{
        transform: scale(1.1);
        opacity: 1
    }

    
    &:hover ${Image}{
        opacity: 0.3;
    }
`

const Circle = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`

const Icon = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: lightgray;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    cursor: pointer;
    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`

const CategoryItem = ({item}) => {
    return (
        <Container>
            <Circle>
            <Image src={item.img} />
            <Info>
                <Icon>
                    <ShoppingBagOutlined/>
                </Icon>
            </Info>
            </Circle>
        </Container>
    )
}

export default CategoryItem