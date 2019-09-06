import React from 'react';
import PropTypes from 'prop-types';

class Video extends React.Component{


  render() {
      // console.log('video');
      // console.log('nowPlaying');
      // console.log(this.props.nowPlaying);

      let youtubeId = this.props.nowPlaying.video_link ;
      let embedUrl = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&controls=0`




     return (

        <div className="video">
          <iframe width="560" height="315" src={embedUrl} frameBorder="0" allow="picture-in-picture" allowFullScreen></iframe>
        </div>

    );

 }
}


export default Video
