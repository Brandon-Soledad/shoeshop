import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    height: 30px;
    background-color: #a1dee0;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: bold;
`

export default function Announcement() {
    return (
        <Container>
            50% off Nike!
        </Container>
    )
}
