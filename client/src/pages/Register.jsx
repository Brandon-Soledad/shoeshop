import React from 'react'
import styled from 'styled-components'
import registbackground from '../components/ShoeImages/registbackground.png';
import { mobile } from "../mobileUI";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { register } from '../redux/apiCalls';

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
    width: 50%;
    border: none;
    padding: 15px 20px;
    background-color: red;
    color: white;
    font-weight: bold;
    justify-items: center;
    align-items: center;
    cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;

const Links = styled.a`
    color: white;
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    text-align: center;
    cursor: pointer;
`;

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector((state) => state.user);

    const handleClick = (e) => {
        e.preventDefault();
        register(dispatch, {username, email, password, confirmPassword})
    };
    return (
        <Container>
            <Wrapper>
                <Title>SIGN UP</Title>
                    <Form>
                        <Input
                            placeholder="username"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <Input
                            placeholder="email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Input
                            placeholder="password"
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Input
                            placeholder="confirm password"
                            type="password"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <Agreement>
                            By creating an account, I consent to the processing of my personal
                            data in accordance with the <b>PRIVACY POLICY</b>
                        </Agreement>

                        <Button onClick={handleClick} disabled={isFetching}>
                            SIGN UP
                        </Button>

                        <Link to="/login">
                        <Links>
                            LOGIN
                        </Links>
                        </Link>

                    </Form>
            </Wrapper>
        </Container>
    )
}
