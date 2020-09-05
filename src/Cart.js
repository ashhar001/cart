import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
    
    render(){
        const {products} = this.props;
        return(
            
            <div className="cart">
               
               {
                   products.map((product) =>{
                    return (
                        <CartItem 
                            product = { product } 
                            key={product.id}
                            onIncreaseQty = {this.props.onIncreaseQty}
                            onDecreaseQty = { this.props.onDecreaseQty}
                            onDeleteProduct = { this.props.onDeleteProduct}
                        />
                    )
                   })
               }
               
            </div>
        );
    }

}

export default Cart;