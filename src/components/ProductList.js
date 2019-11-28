import React from 'react';
import Product from "./Product";
import Title from './Title';
import { ProductConsumer } from '../context'

// check ABOVE IN PRODUCT CONSUMER THEY RE BETWEEN BRACKET 

function ProductList() {

    return (
        <>
            <div className="py-5">
                <div className="container">
                    <Title name="our" title="products" />
                    <div className="row">
                        <ProductConsumer>
                            {item =>
                                item.products.map(name =>
                                    <Product key={name.id} hello={name} />
                                )
                            }
                        </ProductConsumer>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductList;
