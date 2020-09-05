import React from 'react';
import NavBar from './Navbar';
import Cart from './Cart';

class App extends React.Component {
  constructor(){
    super();
    this.state={
        //Array of Cart Items
        products:[
            {
                price: 999,
                title: 'Mobile Phone',
                qty: 1,
                img: 'https://images.unsplash.com/photo-1574675904801-eb2cca16af12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=851&q=80',
                id:1
            },
            {
                price: 999,
                title: 'Watch',
                qty: 4,
                img: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
                id:2
            },
            {
                price: 500,
                title: 'Wallet',
                qty: 10,
                img: 'https://images.unsplash.com/photo-1579014134953-1580d7f123f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
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

  handleincreaseQty = (product) => {
      console.log('Hey incr the qty of ', product);
      const {products} = this.state;
      const index = products.indexOf(product);

      products[index].qty +=1;

      this.setState({
          //products: products
          products    //we can write it like this also bcs key and value has same varialble name
      })
  }

  handledecreaseQty = (product) => {
      const {products} = this.state;
      const index = products.indexOf(product);

      products[index].qty -= 1;

      this.setState({
          products
      })
  }

  handledeleteProduct = (id) => {

      const { products }  = this.state;

      const items = products.filter((item) => item.id !== id); // [{id}]

      this.setState({
          products:items
      })
  }
  getCartCount = () => {
    const { products} = this.state;

    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    })

    return count;
  }

  getCartTotal = () => {

    const { products } = this.state;
    
    let cartTotal = 0;

    products.map((product) => {
      cartTotal = cartTotal + product.qty * product.price;
    })

    return cartTotal;
  }
  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <NavBar count={this.getCartCount()}/>
        <Cart
          products = { products }
          onIncreaseQty = {this.handleincreaseQty}
          onDecreaseQty = { this.handledecreaseQty}
          onDeleteProduct = {this.handledeleteProduct}
        />
         <div style = {{ padding:10, fontSize: 30}}>
        Total: {this.getCartTotal()}
      </div>
      </div>

     
    );
  }
}

export default App;
