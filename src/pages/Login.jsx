import React from 'react'
import styled from "styled-components";
import { mobile } from "../mobileUI";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.0),
        rgba(255, 255, 255, 0.0)
      ),
      url("https://wallpapercave.com/wp/wp4992968.png")
        center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 20%;
    padding: 20px;
    border-radius: 5px;
    background-color: black;
    ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
    color: white;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Input = styled.input`
    color: white;
    flex: 1;
    min-width: 70%;
    margin: 10px 0;
    padding: 10px;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: red;
    color: white;
    cursor: pointer;
    font-weight: bold;
    justify-items: center;
    align-items: center;
    margin-bottom: 10px;
`;

const Link = styled.a`
    color: white;
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    text-align: center;
    cursor: pointer;
`;

export default function Login() {
    return (
        <Container>
          <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
              <Input placeholder="username" />
              <Input placeholder="password" />
              <Button>LOGIN</Button>
              <Link>FORGOT PASSWORD?</Link>
              <Link>CREATE ACCOUNT</Link>
            </Form>
          </Wrapper>
        </Container>
      )
}
