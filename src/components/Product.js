import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import cart from "./cart.svg"
import { ProductConsumer } from '../context'

function Product(props) {
    const { id, title, img, price, inCart } = props.hello
    const flip = { transform: "rotateY(180deg)" }
    return (
        <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
            <div className="card">
                <ProductConsumer style={flip}>
                    {value => (
                        <div className="img-container p-5" onClick={() => value.handleDetail(id)}>
                            <Link to="/details">
                                <img src={img} alt="product img" className="card-img-top" />
                            </Link>
                            <button className="cart-btn" disabled={inCart ? true : false} onClick={() => {
                                value.addToCart(id)
                                value.openModel(id)
                            }}>
                                {inCart ? (<p className="text-capitalize mb-0" disabled>In Cart</p>) : <img style={{ width: "25px" }} src={cart} alt="art" className="cartimgicon" />}
                            </button>
                        </div>)}
                </ProductConsumer>
                <div className="card-footer d-flex justify-content-between">
                    <p className="align-self-center mb-0">
                        {title}
                    </p>
                    <h5 className="text-blue font-italic mb-0"><span className="mr-1">$</span>{price}</h5>
                </div>
            </div>
        </ProductWrapper>
    )
}

// css for productwrapper bootstrap : col 9 = small screen 9  ,
// mx auto = put center
// col md 6, medium screen, 6 colmumn wide
// col lg 3 column wide 
// margin top bottom 3
// line 13 p-5 = padding 5 puts img smaller and center
// line 18 text will be capitalized , margin bottom 0
//lin 22 flex 
//line 23, price will be bigger, so if i want to make it on line
//line 26 , margin right 1


// Product.propTypes = {
//     product: PropTypes.shape({
//         id: PropTypes.number,
//         img: PropTypes.string,
//         title: PropTypes.string,
//         price: PropTypes.number,
//         inCart: PropTypes.bool
//     }).isRequired
// }
const ProductWrapper = styled.div`
.card{
    border-color:transparent;
    transition:all 0.3s linear;
}
.card-footer{
    background:transparent;
    border-top:transparent;
}
&:hover{
    .card{
        border:0.04rem solid rgba(0,0,0,0.2);
        box-shadow:2px 10px 10px 10px rgba(0,0,0,0.2);
    }
    .card-footer{
        background:rgba(247,247,247);
    }
}
.img-container{
    position:relative;
    overflow:hidden; 
}
.card-img-top{
    transition: all 1s linear;
}
.img-container:hover{
    .card-img-top{
        transform:scale(1.2);
    }
}
.cart-btn{
  padding: 0.2rem 0.4rem;
  position:absolute;
    bottom:0;
    right:0;
    background:var(--lightBlue);
    border:none;
    font-size:1.4rem;
    border-radius:0.5rem 0 0 0;
    transform: translate(100%, 100%); 
    transition:all 0.5s linear;
}
.img-container:hover .cart-btn{
        transform:translate(0,0);
    }
.cart-btn:hover{
    color:var(--mainBlue);
    cursor:pointer;
}
`
// 100 % right and 100 % down for the transform here , you can also use negative value 
// transform transale 0,0 allow it to go back to his initial position


export default Product;
