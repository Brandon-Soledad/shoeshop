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
const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
    &:hover ${Info}{
        opacity: 1;
    }
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
`

const Button = styled.button`
    border: 5px single black;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: bold;
`

const CategoryItem = ({item}) => {
    return (
        <Container>
            <Image src={item.img} />
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Container>
    )
}

export default CategoryItem