import React from 'react';



class Video extends React.Component{


  render() {
     console.log(this.props)

     return (
        <div className="search">
        <h1>Weareoke</h1>
        <i className='bx bx-search-alt'></i>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&controls=0" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <input/>
        </div>

    );

 }
}


export default Video
