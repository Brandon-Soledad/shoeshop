import { ShoppingBagOutlined } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components';


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
    flex-direction: column;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
    &:hover ${Info}{
        opacity: 1;
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
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
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