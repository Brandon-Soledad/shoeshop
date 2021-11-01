import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    height: 30px;
    background-color: 131313;
    color: red;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 17px;
    font-weight: bold;
`

export default function Announcement() {
    return (
        <Container>
            New shipment of Shoes has arrived!
        </Container>
    )
}
