import { ShoppingCartOutlined } from '@material-ui/icons';
import Search from '@mui/icons-material/Search'
import { Badge } from '@mui/material';
import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    height: 80px;
    background-color: black;
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Language = styled.span`
    font-size: 14px;
    color: white;
    cursor: pointer;
`;

const SearchContainer = styled.div`
    border: 0.5px solid gray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

const Input = styled.input`
    border: none;
`;

const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const Logo = styled.h1`
    font-weight: bold;
    color: white;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    text-align: center;
    justify-content: flex-end;
`;

const MenuItem = styled.div`
    font-size: 14px;
    font-weight: bold;
    color: white;
    cursor: pointer;
    margin-left: 25px;
`;

export default function Navbar() {
    return (
        <Container> 
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input/>
                        <Search style={{color:"white", fontSize:17}}/>
                    </SearchContainer>
                </Left>
                <Center><Logo>SNEAKER VAULT.</Logo></Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                        <Badge badgeContent = {4} color = "primary">
                            <ShoppingCartOutlined/>
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}
