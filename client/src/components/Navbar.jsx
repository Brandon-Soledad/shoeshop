import { ShoppingCartOutlined } from '@material-ui/icons'
import Search from '@mui/icons-material/Search'
import { Badge } from '@mui/material';
import React, { useState } from 'react'
import styled from 'styled-components'
import sneakerLogo from './ShoeImages/sneakerLogo.jpeg';
import { mobile } from "../mobileUI";
import {useSelector} from "react-redux"
import { Link } from 'react-router-dom';
import { logout } from '../redux/apiCalls';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import { useHistory } from "react-router";

const Container = styled.div`
    height: 100px;
    background-color: black;
    ${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: "10px 0px" })}
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
    ${mobile({ display: "none" })}
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
    ${mobile({ width: "50px" })}
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
    ${mobile({ fontSize: "24px" })}
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    text-align: center;
    justify-content: flex-end;
    font-weight: bold;
    ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
    font-size: 17px;
    font-weight: bold;
    color: white;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

export default function Navbar(item) {
    const quantity = useSelector(state=>state.cart.quantity);
    const user = useSelector((state) => state.user.currentUser);
    const [username, setUsername] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();
    const handleClick = (e) => {
       logout(dispatch,{ item});
      };
    return (
        <Container>
            <Wrapper>
                <Left>
                    {/* <Language>EN</Language>
                    <SearchContainer>
                        <Input/>
                        <Search style={{color:"white", fontSize:17}}/>
                    </SearchContainer> */}
                </Left>
                <Center><Link to="/"><Logo src={sneakerLogo}/></Link></Center>
                <Right>
                    <Link to="/register">
                    <MenuItem>REGISTER</MenuItem>
                    </Link>
                    <Link to="/login">
                    <MenuItem>SIGN IN</MenuItem>
                    </Link>
                    <Link to="/login">
                    <MenuItem onClick={handleClick}>SIGN OUT</MenuItem>
                    </Link>
                    <Link to="/carts">
                    <MenuItem>
                        <Badge badgeContent = {quantity} color = "primary">
                            <ShoppingCartOutlined/>
                        </Badge>
                    </MenuItem>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    )
}
