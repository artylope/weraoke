import React from 'react';

import styles from '../../style.scss';

class ProductView extends React.Component{


    render(){
        if(this.props.selectedItem){
            return(
                <div className={styles.productView}>
                    <h1>Product View</h1>
                    <br/>
                    <p>{this.props.selectedItem.name}</p>
                    <br/>
                    <h2>{this.props.selectedItem.price}</h2>
                    <br/>
                    <p>{this.props.selectedItem.description}</p>
                    <br/>
                    <button onClick={(e)=> this.props.handleAddToCart(this.props.selectedItem.id)}> Add to Cart</button>
                </div>
            )
        } else{
            return(
                <div className={styles.productView}>
                    <h1>Product View</h1>
                </div>
            )
        }

    }
}


export default ProductView
