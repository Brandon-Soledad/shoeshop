import { ShoppingCartOutlined } from '@material-ui/icons'
import Search from '@mui/icons-material/Search'
import { Badge } from '@mui/material';
import React from 'react'
import styled from 'styled-components'
import sneakerLogo from './ShoeImages/sneakerLogo.jpeg';


const Container = styled.div`
    height: 100px;
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
    font-weight: bold;
`;

const Language = styled.span`
    font-size: 17px;
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
    justify-content: center;
`;

const Logo = styled.img`
    border: black;
    width: 190px;
    height: 90px;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    text-align: center;
    justify-content: flex-end;
    font-weight: bold;
`;

const MenuItem = styled.div`
    font-size: 17px;
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
                <Center><Logo src={sneakerLogo}/></Center>
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
