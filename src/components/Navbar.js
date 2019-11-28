import React from 'react';
import { Link } from 'react-router-dom'
import cart from "./cart.svg"
import styled from "styled-components"
import { ButtonContainer } from "./Button"


const NavWrapper = styled.nav`
background: var(--mainBlue)!important;
.nav-link{
    color:var(--mainWhite)!important;
    font-size:2rem;
    text-transform:capitalize;
}`

function Navbar() {
    return (
        <NavWrapper className="navbar navbar-expand-sm bg-primary navbar-dark">
            <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5">
                    <Link to="/" className="nav-link ">
                        Products
                    </Link>
                </li>
            </ul>
            <Link to="/cart" className="ml-auto">
                <ButtonContainer style={{ marginTop: "15px" }}><span style={{ marginRight: "1em", }}><img className="cartimg" src={cart} alt="cart" /></span>My Cart</ButtonContainer>
            </Link>
        </NavWrapper>
    )
}


export default Navbar;
