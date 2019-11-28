import React, { Component } from 'react';
import { storeProducts } from './data'
import { detailProduct } from './data'

export const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        products: [],
        detail: detailProduct,
        cart: [],
        modelOpen: false,
        modelProduct: detailProduct,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
    }

    //  BY USING ARROW FUNCTIONS BELOW YOU DONT HAVE TO BIND THEM ! 

    componentDidMount() {
        this.setProducts();
    }

    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = { ...item };
            tempProducts = [...tempProducts, singleItem];
        })
        this.setState(() => {
            return { products: tempProducts }
        })
    }

    getItem = (id) => {
        // The Array.find() is an inbuilt function in JavaScript which is used to get the value of the first element in the array that 
        // satisfies the provided condition.It
        //  checks all the elements of the array and whichever the first element satisfies the condition is going to print
        const product = this.state.products.find(item => item.id === id);
        return product;
    }
    handleDetail = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return { detail: product }
        })
    }
    addToCart = (id) => {
        // give acess to all product inside state below , whatever we have in that state 
        let tempP = [...this.state.products];
        // looking for object/array , find that index , why ? object we're looking for, use getitem to get the index 
        const index = tempP.indexOf(this.getItem(id));
        // speficic product in that productt, (one of those items we have in the data.js)
        const productt = tempP[index];
        productt.inCart = true;
        productt.count = 1;
        // value that is sitting in that property 
        const price = productt.price;
        // total will be equal to the price 
        productt.total = price;
        this.setState(() => {
            // we just create a cart property in the state now , because if we click on the item ,the item , we want to access them elsewhere , we want to change the products, 
            // that will be equal to tempproducts and then add this specific product to the cart, and at first nothing inside it , but also we want to add new stuff that are stored in productt
            return { products: tempP, cart: [...this.state.cart, productt] };
        }, () => {
            this.addTotals();
        });

    }
    openModel = id => {
        const productx = this.getItem(id);
        this.setState(() => {
            return { modelProduct: productx, modelOpen: true }
        })
    }
    closeModel = () => {
        this.setState(() => {
            return { modelOpen: false }
        })
    }

    incrementation = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id)
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count + 1;
        product.total = product.count * product.price;

        this.setState(
            () => { return { cart: [...tempCart] } },
            () => { this.addTotals() })
    }
    decrement = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id)
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count - 1;

        if (product.count === 0) {
            this.removeItem(id)
        } else {
            product.total = product.count * product.price;
            this.setState(
                () => { return { cart: [...tempCart] } },
                () => { this.addTotals() })
        }


    }
    removeItem = (id) => {
        // for the cart , return item that do not match the id (parameters), items that do not have the id will be returned to the cart, we're not deleting them but showing new one
        let tempCart = [...this.state.cart];
        tempCart = tempCart.filter(item => item.id !== id);
        // for the product
        let tempPro = [...this.state.products];
        const index = tempPro.indexOf(this.getItem(id));
        let removeProduct = tempPro[index];
        // change the propreties
        removeProduct.inCart = false;
        removeProduct.count = 0;
        removeProduct.total = 0;
        this.setState(() => {
            return {
                cart: [...tempCart],
                products: [...tempPro]
            }
        }, () => {
            this.addTotals()
        })
    }

    clearCart = () => {
        this.setState(() => {
            return { cart: [] };
        }, () => {
            // we create new fresh total of product , to reset the "incart false/true" , the addtotals method will also reset everything since there's nothign anymore in the array
            this.setProducts();
            this.addTotals();
        })
    }

    addTotals = () => {
        let subTotal = 0;
        // go through array of cart with map, each item in array will have a subtotal , will grab it , add value to the total
        // each item has an total properties ( in data js )
        this.state.cart.map(item => (subTotal += item.total));
        const tempTax = subTotal * 0.1;
        // 2 decimals 
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax
        this.setState(() => {
            return {
                cartSubTotal: subTotal,
                cartTax: tax,
                cartTotal: total
            }
        })
    }
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModel: this.openModel,
                closeModel: this.closeModel,
                increment: this.incrementation,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart,
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}



// function ProductProvider(props) {
//     const [state, setState] = useState({
//         products: [],
//         detail: detailProduct,
//     })

//     useEffect(() => setProducts(), [])
//     useEffect(() => console.log(state.detail), [])

//     const setProducts = () => {
//         let tempProducts = [];
//         storeProducts.forEach(item => {
//             const singleItem = { ...item };
//             tempProducts = [...tempProducts, singleItem]
//         })
//         setState({ products: tempProducts })
//     }

//     const getItem = (id) => {
//         const productss = state.products.find(item => item.id === id);
//         return productss;
//     }
//     const handleDetail = (id) => {
//         const produ = getItem(id);
//         setState({ detail: produ })
//     }


//     const addToCart = (id) => {
//         console.log(`hello${id}`);
//     }

//     return (
//         <ProductContext.Provider value={{
//             ...state,
//             handleDetail: handleDetail,
//             addToCart: addToCart
//         }}>
//             {props.children}
//         </ProductContext.Provider>
//     )

// }






export const ProductConsumer = ProductContext.Consumer;

export default ProductProvider;
