import React from 'react';

class CartItem extends React.Component{
    // can change this whole without class like NavBar.js just remove render and this.
    /*
    /*
    testing(){

        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('done');
            }, 5000);
        })

        promise.then(() => {
            //set state acts like asychronous call
            this.setState({qty:this.state.qty + 10});
            this.setState({qty:this.state.qty + 10});
            this.setState({qty:this.state.qty + 10});

            console.log('state', this.state);
        });
    }*/
   /* increaseQty = () =>{*/
        ///this.state.qty += 1;
        /*console.log('this', this.state);*/
        //set state form 1
        /*
        this.setState({
            qty: this.state.qty + 1
        });
        */
       /*set state form 2 if previous state is required use this method set state
        method will rerender the new state by shallow merging it with tht old state*/
        /*
        this.setState((prevState) => {
            return{
                qty: prevState.qty + 1
            }
        }, () => {
            console.log('this.state', this.state);
        });
    }*/
/*
    decreaseQty = () =>{
        const { qty } = this.state;

        if(qty === 0){
            return;
        }
        this.setState((currState) => {
            return{
                qty: currState.qty - 1
            }
        });
        this.setState((currState) => {
            return{
                qty: currState.qty - 2
            }
        });
        /*
       this.setState({
           qty: this.state.qty - 1
       })
       
    }*/
    render(){
        console.log('this.props', this.props)
        const{price, title, qty} = this.props.product;
        const {
            product,
            onIncreaseQty,
            onDecreaseQty,
            onDeleteProduct
        } = this.props;
        return(
            <div className="cart-item">
                {this.props.jsx}
                <div className="left-block">
                    <img alt="" style={ styles.image} src={ product.img}/>
                </div>

                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'#777'}}>Rs. {price}</div>
                    <div style={{ color:'#777'}}>Qty: {qty}</div>

                    <div className="car-item-actions">
                        {/*buttons*/}
                        <img alt="increase" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/svg/992/992651.svg"
                        onClick={() => onIncreaseQty(product)}
                        />
                        <img alt="decrease" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/svg/659/659892.svg"
                        onClick={() => onDecreaseQty(product)}
                        />
                        <img alt="delete" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/svg/1345/1345823.svg"
                        onClick={() => onDeleteProduct(product.id)}
                        />
                        
                    </div>  
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        boderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;