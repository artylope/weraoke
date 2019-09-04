import React from 'react';
import styles from '../style.scss';


class AddProduct extends React.Component{

    constructor(){
        super();
        this.state = {
            requested: false,
            name: "",
            price:"",
            desc:""
        }

        this.nameChangeHandler = this.nameChangeHandler.bind(this);
        this.priceChangeHandler = this.priceChangeHandler.bind(this);
        this.descChangeHandler = this.descChangeHandler.bind(this);
    }


    nameChangeHandler(event){
        console.log('change name', event.target.value);

        this.setState({
            name: event.target.value
        })
    }

    priceChangeHandler(event){
        console.log('change price', event.target.value);

        this.setState({
            price: event.target.value
        })
    }

    descChangeHandler(event){
        console.log('change desc', event.target.value);

        this.setState({
            desc: event.target.value
        })
    }

    submit(){
       console.log("WIOW SUBMIT", this.state);

       var data = { "name": this.state.name,
                    "description": this.state.desc,
                    "price": this.state.price
                   };

       var request = new XMLHttpRequest();

       var componentThis = this;

       request.addEventListener("load", function(){
         console.log("DONE");
         const responseData = JSON.parse( this.responseText );
         console.log( responseData );
         componentThis.props.addNewProduct( responseData );
         alert("WOW DONE WITYH CREATING THING");


       });
       request.open("POST", '/newproduct');
       request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
       request.send(JSON.stringify(data));

       // this.setState({requested:true});



 }



    render(){
        console.log("RENDERRRRR:", this.state);

         if( this.state.requested === false ){
             return(
                 <div className={styles.addProduct}><h1>Add New Product</h1>

                     <div>
                         Name:
                         <input onChange={(event) => {this.nameChangeHandler(event)}}/>
                     </div>
                     <div>
                         Price:
                         <input onChange={(event) => {this.priceChangeHandler(event)}}/>
                     </div>
                     <div>
                         Description:
                         <input onChange={(event) => {this.descChangeHandler(event)}}/>
                     </div>

                      <button className="btn btn-primary btn-lg" onClick={(event)=>{this.submit(event);}}>create product</button>


                 </div>


             )

         } else {
             return <div>REQUEST IN PROCESS</div>;
         }

    }

}

export default AddProduct
