import React from 'react'
import styled from 'styled-components'
import registbackground from '../components/ShoeImages/registbackground.png';
import { mobile } from "../mobileUI";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${registbackground});
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    align-items: center;
    text-align: center;
    width: 30%;
    padding: 20px;
    border-radius: 5px;
    background-color: black;
    ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
    text-align: center;
    color: white;
    font-size: 24px;
    font-weight: 300;
    font-weight: bold;
`;

const Form = styled.form`
    align-items: center;
    text-align: center;
    min-width: 70%;
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;

const Agreement = styled.span`
    text-align: center;
    color: white;
    font-size: 12px;
    margin: 20px 0px;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: red;
    color: white;
    font-weight: bold;
    justify-items: center;
    align-items: center;
    cursor: pointer;
`;

export default function Register() {
    return (
        <Container>
            <Wrapper>
                <Title>SIGN UP</Title>
                    <Form>
                        <Input placeholder="username" />
                        <Input placeholder="email" />
                        <Input placeholder="password" />
                        <Input placeholder="confirm password" />
                        <Agreement>
                            By creating an account, I consent to the processing of my personal
                            data in accordance with the <b>PRIVACY POLICY</b>
                        </Agreement>
                        <Button>SIGN UP</Button>
                    </Form>
            </Wrapper>
        </Container>
    )
}
