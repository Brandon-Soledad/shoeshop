import { KeyboardArrowLeftOutlined, KeyboardArrowRightOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import vuittonNike from './ShoeImages/vuittonNike.jpg';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
`;

const SliderArrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: white;
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
    opacity: 0.5;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
`;

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
`;

const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`;

const Image = styled.img`
    height: 73%;
    width: 600px;
    height: 600px;
`;

const InfoContainer = styled.div`
    flex: 1;
`;

const Title = styled.h1`
    font-size: 70px;
`;

const Description = styled.p`
    margin: 50px 0px ;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`;

const Button = styled.button`
    padding: 5px;
    font-size: 20px;
    background: transparent;
    cursor: pointer;
`;

export default function PageSlider() {
    return (
        <Container>
            <SliderArrow direction="left">
                <KeyboardArrowLeftOutlined/>
            </SliderArrow>
            <Wrapper>
                <Slide>
                    <ImgContainer>
                        <Image src={vuittonNike} />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>Sneaker Sale</Title>
                        <Description>Get all Adidas shoes 20% off!</Description>
                        <Button>Show Now</Button>
                    </InfoContainer>
                </Slide>
                <Slide>
                    <ImgContainer>
                        <Image src={vuittonNike} />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>Sneaker Sale</Title>
                        <Description>Get all Adidas shoes 20% off!</Description>
                        <Button>Show Now</Button>
                    </InfoContainer>
                </Slide>
            </Wrapper>
            <SliderArrow direction="right">
                <KeyboardArrowRightOutlined/>
            </SliderArrow>
        </Container>
    )
}
