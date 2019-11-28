import React from 'react';
import trash from './trash.svg'

function CartItem({ item, value }) {
    // we passed down item and value in cartLIst , in value we have all those methods ( and also cart) , in item we have id and stuff
    const { id, title, img, price, total, count } = item;
    const { increment, decrement, removeItem } = value

    return (
        <div className="row my-1 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img
                    src={img}
                    style={{ width: "5rem", height: "5rem" }}
                    className="img-fluid"
                    alt="product" />
            </div>
            <div className="col-10 mx-auto col-lg-2">
                {/* span d lg none : dont display when big screen */}
                <span className="d-lg-none">product : </span>
                {title}
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">price : </span>
                {price}
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        <span className="btn-black mx-1" onClick={() => decrement(id)}>-</span>
                        <span className="btn-black mx-1">{count}</span>
                        <span className="btn-black mx-1" onClick={() => increment(id)}>+</span>
                    </div>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <div className="cart-icon">
                    <img style={{ width: "10%" }} src={trash} alt="product" onClick={() => removeItem(id)} />
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <strong>item total : $ {total} </strong>
            </div>
        </div>
    )
}

export default CartItem;
