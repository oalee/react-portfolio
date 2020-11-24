import React, { Component } from 'react';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


var audioIndx =0
var audioSources = ["audio/saturday blues.mp3", "audio/its shining dark cloudy.mp3", "audio/morning blues.mp3", "audio/sound waves.mp3", "audio/TapeDeck 2  Jan 21 03-25-41.mp3"]
var audioSource = audioSources[0]

class About extends Component {

   prevTrack(){
      audioIndx--
      if(audioIndx == -1){
         audioIndx = audioSources.length-1
      }
      audioSource = audioSources[audioIndx]

      this.setState(
         {
            audioSrc : audioSource
         }
      )

   }
   nextTrack(){

     
      audioIndx++
      if(audioIndx == audioSources.length){
         audioIndx = 0
      }
      audioSource = audioSources[audioIndx]

      this.setState(
         {
            audioSrc : audioSource
         }
      )
   }

  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
      var audioSrc = audioSource
   
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Ali Rahimi Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{bio}</p>


            <h2>My Hobbies</h2>

            <p>I play the guitar and watch a lot of movies in my spare time, I love works of Krzysztof Kieślowski, Stanley Kubrick, Paul Thomas Anderson, Martin Scorsese, David Lynch and many more. </p>

            <p>Here are some of my compositions, hope you enjoy them.</p>

         <div className="audiocontainer">
            <AudioPlayer
             autoPlay={false}
            
             src= {audioSrc}
             onPlay={e => console.log("onPlay")}
            
             onClickPrevious = { ()=> this.prevTrack()}
             showSkipControls= {true}
             volume = {0.7}
              onClickNext= { 
                  () => this.nextTrack()
            }
            onEnded= {
               () => this.nextTrack()
            }

            />
            </div>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{name}</span><br />
						   <span>{street}<br />
						         {city} {state}, {zip}
                   </span><br />
						   <span>{phone}</span><br />
                     <span>{email}</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>

         </div>

      </div>

   </section>
    );
  }
}

export default About;
