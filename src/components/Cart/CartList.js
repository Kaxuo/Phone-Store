import React from 'react';
import CartItem from './CartItem'

function CartList(props) {
    const { cart } = props.value

    return (
        <div className="container-fluid">
            {cart.map(item => {
                return <CartItem key={item.id} item={item} value={props.value} />
            })}
        </div>
    )
}


// function CartList({value}) {
//     const { cart } = .value
//     console.log(props.value)

//     return (
//         <div className="container-fluid">
//             {cart.map(item => {
//                 return <CartItem key={item.id} item={item} value={value} />
//             })}
//         </div>
//     )

export default CartList;
