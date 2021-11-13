import React from 'react'
import styled from "styled-components";
import { mobile } from "../mobileUI";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { login } from "../redux/apiCalls";
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

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
    color: black;
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
    &:disabled {
      color: green;
      cursor: not-allowed;
  }
`;

const Links = styled.a`
    color: white;
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    text-align: center;
    cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector((state) => state.user);

    const handleClick = (e) => {
      e.preventDefault();
      login(dispatch, { username, password });
    };
    window.localStorage.clear();
    return (
      <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleClick} disabled={isFetching}>
            LOGIN
          </Button>
          <Link to="/register"><Links>CREATE ACCOUNT</Links></Link>
        </Form>
        {(item)=><Navbar item={username}/>}
      </Wrapper>
    </Container>
      )
}
