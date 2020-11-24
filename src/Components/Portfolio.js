import React, { Component } from 'react';

import Slider from "react-slick";



var baseImgName = 'signal-2020-11-24-202038_001.jpeg'

var imageList = new Array()

for (var i =1; i<10; i++){
  imageList.push(`images/screenshots/signal-2020-11-24-202038_00${i}.jpeg`)
}

for (var i =10; i<13; i++){
  imageList.push(`images/screenshots/signal-2020-11-24-202038_0${i}.jpeg`)
}

console.log(imageList)
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
      slidesToScroll: 1,
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
        li {
          display: inline-block;
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