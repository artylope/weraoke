import React from 'react';



class Search extends React.Component{


  render() {
     console.log(this.props)

     return (
        <div className="search">
        <h1>Weareoke</h1>
        <i className='bx bx-search-alt'></i>
        <input/>
        </div>

    );

 }
}


export default Search
