import React from 'react';
import { ProductConsumer } from '../context'
import { Link } from 'react-router-dom'
import { ButtonContainer } from './Button'


function Details() {
    return (
        <ProductConsumer >
            {value => {
                const { id, company, img, info, price, title, inCart } = value.detail
                return (
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                <h1>{title}</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-10 mx-auto col-md-6 my-3">
                                <img src={img} className="img-fluid" alt="product" />
                            </div>
                            <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                <h2> model : {title}</h2>
                                <h4 className="text-title text-uppercase text-muted mt-3 mb-2"> made by : <span className="text-uppercase">{company}</span></h4>
                                <h4 className="text-blue"><strong>price : <span>$</span>{price}</strong></h4>
                                <p className="text-capitalize font-weight-bold mt-3 mb-3">
                                    Some info about product :
                                </p>
                                <p className="text-muted lead">{info}</p>
                                <div className="row">
                                    <Link to="/">
                                        <ButtonContainer className="mb-2"
                                            style={{ width: "100%" }}>
                                            back to products
                                        </ButtonContainer>
                                    </Link>
                                    <ButtonContainer
                                        style={{ width: "25%", marginLeft: "15px" }}
                                        cart
                                        disabled={inCart ? true : false}
                                        onClick={() => {
                                            value.addToCart(id)
                                            value.openModel(id)
                                        }}>
                                        {inCart ? 'inCart' : "add to cart"}
                                    </ButtonContainer>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }}
        </ProductConsumer >
    )
}



//line 13 , padding top bottom

export default Details;
