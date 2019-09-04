import React from 'react';



class Cart extends React.Component{


    render(){
        console.log('in cart Component');
        console.log(this.props.cartItems)

        if(this.props.cartItems){

            let subTotal = 0;
            let shippingRate = 7;
            let gst = 0.07;

            let cartItemList = this.props.cartItems.map((item,index) => {
                subTotal += parseFloat(item.price.replace('$', ''))
                console.log("subTotal");
                console.log(subTotal);

                return(
                    <tr>
                        <td key={index}>{item.name}</td><td>{item.price}</td>

                    </tr>

                )
            })



            return(
                <div className="cart">
                    <h1>Cart</h1>
                    <table>
                        {cartItemList}
                    </table>
                    <div>
                        SubTotal: ${subTotal.toFixed(2)}<br/>
                        Shipping: ${shippingRate.toFixed(2)}<br/>
                        GST: ${(subTotal*gst).toFixed(2)}<br/>
                        Total: ${ (subTotal + shippingRate + (subTotal*gst)).toFixed(2)}<br/>
                    </div>
                </div>
            )
        } else{
            return(
                <div className="cart">
                    <h1>Cart</h1>
                </div>
            )
        }

    }


}

export default Cart
