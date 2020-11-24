import React, { Component } from 'react';

import Slider from "react-slick";




var imageList = new Array()

for (var i =1; i<10; i++){
  imageList.push(`images/screenshots/signal-2020-11-24-202038_00${i}.jpeg`)
}

for (var i =0; i<6; i++){
  imageList.push(`images/screenshots/${i}.jpg`)
}

for (var i =10; i<13; i++){
  imageList.push(`images/screenshots/signal-2020-11-24-202038_0${i}.jpeg`)
}

for (var i =1; i<5; i++){
  imageList.push(`images/screenshots/signal-2020-11-24-224048_00${i}.jpeg`)
}
/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
}

shuffleArray(imageList)

var images = imageList.map( function(item) {

  return <div> 

    <img src={item} />
  </div>
  
} )
class Portfolio extends Component {
  render() {

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 2,
      autoplay: true
    
    };

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out Some of My Works.</h1>

        <div className="screenshotsContainer">
        <style jsx>{`
        .screenshotsContainer {
     
        }
      
        .slick-slide img{
          border-radius: 8px;
          display: block;
          margin-left: auto;
          margin-right: auto;
          width: 80%;

        }
      `}</style>
        <Slider {...settings}>
      {
       images
      }
        </Slider>

          </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;