import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    height: 30px;
    width: 100%;
    background-color: white;
    color: red;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    font-weight: bold;
    font-style: italic;
`

export default function Featured() {
    return (
        <Container>
            FEATURED PRODUCTS
        </Container>
    )
}
