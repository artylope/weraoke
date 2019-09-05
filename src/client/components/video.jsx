import React from 'react';
import PropTypes from 'prop-types';

class Video extends React.Component{


  render() {

     return (
        <div className="video">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&controls=0" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

    );

 }
}


export default Video
