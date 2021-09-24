import { KeyboardArrowLeftOutlined, KeyboardArrowRightOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: black;
`;

const SliderArrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
`;


export default function PageSlider() {
    return (
        <Container>
            <SliderArrow>
                <KeyboardArrowLeftOutlined/>
            </SliderArrow>
            <SliderArrow>
                <KeyboardArrowRightOutlined/>
            </SliderArrow>
        </Container>
    )
}
