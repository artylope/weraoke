import React from 'react';



class SearchList extends React.Component{


  render() {
     console.log(this.props)

     return (
        <div className="searchList">
            <input/>
           <div>
               {this.props.products.map((product, index) => {
                   return(
                       <div onClick={ (e) =>{ this.props.handleClickToView(index)} } index={index} className="searchItem" key={index}>
                            <span className="searchItemPrice">{product.price}</span>
                            <span className="searchItemName">{product.name}</span>
                       </div>
                   )
               }
            )}
           </div>
        </div>

    );

 }
}


export default SearchList
