import { KeyboardArrowLeftOutlined, KeyboardArrowRightOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { sliderItems } from '../data'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`;

const SliderArrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: lightgrey;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    z-index: 1;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.0s ease;
    transform: translateX(${props => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props=>props.bg};
`;

const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`;

const Image = styled.img`
    height: 73%;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;

const Title = styled.h1`
    font-size: 70px;
`;

const Description = styled.p`
    margin: 50px 0px ;
    font-size: 30px;
    font-weight: bold;
    letter-spacing: 3px;
    color: black;
`;

const Button = styled.button`
    padding: 5px black;
    font-size: 20px;
    background: transparent;
    cursor: pointer;
`;

export default function PageSlider() {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) =>{
        if(direction ==="left") {
            setSlideIndex(slideIndex > 0 ? slideIndex-1: 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex+1: 0)
        }
    };
    return (
        <Container>
            <SliderArrow direction="left" onClick={() => handleClick("left")}>
                <KeyboardArrowLeftOutlined/>
            </SliderArrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => ( 
                <Slide bg={item.bg} key={item.id}>
                    <ImgContainer>
                        <Image src={item.img}/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Description>{item.desc}</Description>
                        <Button>SHOW NOW</Button>
                    </InfoContainer>
                </Slide>
                ))}
            </Wrapper>
            <SliderArrow direction="right" onClick={() => handleClick("right")}>
                <KeyboardArrowRightOutlined/>
            </SliderArrow>
        </Container>
    )
}
