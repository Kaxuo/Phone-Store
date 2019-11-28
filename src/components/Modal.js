import React from 'react';
import styled from "styled-components"
import { ProductConsumer } from '../context'
import { ButtonContainer } from './Button'
import { Link } from 'react-router-dom'

function Modal() {
    return (
        <ProductConsumer>
            {/* below , modal OPen, we look for those propreties if they exist ,in const */}
            {value => {
                const { modelOpen, closeModel } = value;
                const { img, title, price } = value.modelProduct;

                if (!modelOpen) {
                    return null;
                }
                else {
                    return (<ModalContainer>
                        <div className="container">
                            <div className="row">
                                <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                                    <h5>Item added to the cart</h5>
                                    <img src={img} alt="product" className="img-fluid" />
                                    <h5> {title}</h5>
                                    <h5 className="text-muted">price : $ {price}</h5>
                                    <Link to="/">
                                        <ButtonContainer onClick={() => closeModel()}>
                                            Store
                                        </ButtonContainer>
                                    </Link>
                                    <Link to="/cart">
                                        <ButtonContainer cart onClick={() => closeModel()}>
                                            Go to Cart
                                        </ButtonContainer>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </ModalContainer>
                    )
                }
            }}
        </ProductConsumer>
    )
}


const ModalContainer = styled.div`
position:fixed;
// takes up the whole space of page wiuth css below 
top:0;
left:0;
right:0;
bottom:0;
background:rgba(0,0,0,0.3);
display:flex;
align-items:center;
justify-content:center;
#modal {
    background:var(--mainWhite)
}

`
// Img fluid = make sure img isn't bigger than container

export default Modal;
