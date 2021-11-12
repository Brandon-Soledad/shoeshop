import React from 'react'
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {userRequest} from "../axiosRequests";
import { mobile } from "../mobileUI";
import { useHistory } from "react-router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout"
import { addProduct, removeProduct } from '../redux/cartRedux';
import { useDispatch } from 'react-redux';

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props) => props.type === "filled" && "none"};
    background-color: ${(props) =>
        props.type === "filled" ? "red" : "transparent"};
    color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
     ${mobile({ display: "none" })}
`;
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
    flex: 3;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;

const Image = styled.img`
    width: 200px;
`;

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;


const ProductSize = styled.span``;

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
`;

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`;

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`;

const SummaryTitle = styled.h1`
    font-weight: 200;
`;

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${(props) => props.type === "total" && "500"};
    font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: red;
    color: white;
    font-weight: 600;
    cursor: pointer;
`;

export default function ShoppingCart() {
    const cart = useSelector((state) => state.cart);
    var quantity = useSelector(state=>state.cart.quantity);
    const products = useSelector(state=>state.cart.products);
    const total = useSelector(state=>state.cart.total);
    const [stripeToken, setStripeToken] = useState(null);
    const history = useHistory();
    const dispatch = useDispatch();

    const onToken = (token) => {
        setStripeToken(token);
    }

    useEffect(() => {
        const makeRequest = async () => {
        try {
            const res = await userRequest.post("/checkout/payment", {
            tokenId: stripeToken.id,
            amount: cart.total * 100,
            });
            history.push("/success", {
            stripeData: res.data,
            products: cart, });
        } catch (e) {}
        };
        stripeToken && makeRequest();
        // eslint-disable-next-line
    }, [stripeToken, cart.total, history]);
    console.log(cart);
    const handleClick = (type) => {
       var priceTotal = cart.total;
       if(type === "dec") {
         dispatch(
           removeProduct({...cart.product, quantity, priceTotal})
         )
       }
    };
    // cart.products.map((product)=>(
    //   product.quantity -= 1
    // ))
    return (
        <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
          <Title>CART</Title>
          <Bottom>
            <Info>
              {cart.products.map((product) => (
                <Product>
                  <ProductDetail>
                    <Image src={product.img} />
                    <Details>
                      <ProductName>
                        <b>Product:</b> {product.title}
                      </ProductName>
                      <ProductId>
                        <b>ID:</b> {product._id}
                      </ProductId>
                      <ProductSize>
                        <b>Size:</b> {product.size}
                      </ProductSize>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <Button onClick={() => handleClick("dec")}>DELETE</Button>
                      {/* <Remove onClick={() => handleClick("dec")} /> */}
                      <ProductAmount></ProductAmount>
                      {/* <Add onClick={() => handleClick("inc")} /> */}
                    </ProductAmountContainer>
                    <ProductPrice>
                      $ {product.price}
                    </ProductPrice>
                  </PriceDetail>
                </Product>
              ))}
              <Hr />
            </Info>
            <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Estimated Shipping</SummaryItemText>
                <SummaryItemPrice>$ 5.90</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Shipping Discount</SummaryItemText>
                <SummaryItemPrice>$ -3.00</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type="total">
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
              </SummaryItem>
              <StripeCheckout
                name="SneakerAid"
                billingAddress
                shippingAddress
                description={`Your total is $${cart.total}`}
                amount={cart.total * 100}
                token={onToken}
                stripeKey="pk_test_51Ju3YWHOuog4jpqwatV0RXG9O7ticMcPtUTBvk5kUwNWIqs7vQPzyvH7lVdZfb34A6XpqSOZLXDsirg3fx0hqdVz00ZBAU283z"
              >
                <Button>CHECKOUT NOW</Button>
              </StripeCheckout>
            </Summary>
          </Bottom>
        </Wrapper>
        <Footer />
      </Container>
    )
}
