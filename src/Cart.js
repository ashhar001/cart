import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
    constructor(){
        super();
        this.state={
            //Array of Cart Items
            products:[
                {
                    price: 999,
                    title: 'Phone',
                    qty: 1,
                    img: '',
                    id:1
                },
                {
                    price: 999,
                    title: 'Watch',
                    qty: 4,
                    img: '',
                    id:2
                },
                {
                    price: 500,
                    title: 'Wallet',
                    qty: 10,
                    img: '',
                    id:3
                }
            ]
            /*  // used if we want just one i=cart item
            price: 999,
            title: 'Phone',
            qty: 1,
            img: ''
            */
        }

        //this.testing();
    }
    render(){
        const {products} = this.state;
        return(
            
            <div className="cart">
               
               {
                   products.map((product) =>{
                    return (
                        <CartItem 
                            product = { product } 
                            key={product.id}
                        />
                    )
                   })
               }
               
            </div>
        );
    }

}

export default Cart;