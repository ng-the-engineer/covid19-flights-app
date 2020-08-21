import React from 'react';
import { connect } from 'react-redux';
import IosPaperPlaneOutline from 'react-ionicons/lib/IosPaperPlaneOutline'
import IosSearchOutline from 'react-ionicons/lib/IosSearchOutline'
import MdHeart from 'react-ionicons/lib/MdHeart'

const HowItWorks = (props) => (
  <section class="section-how">
    <div class="row">
      <h2>How it works</h2>
    </div>
    <div class="row">
      <div class="long-paragraph">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis molestie neque. Mauris vulputate sit amet nisi in aliquet. Sed sit amet orci ultricies, feugiat est id, porttitor augue. Morbi feugiat elementum diam, a vulputate leo euismod viverra. Nunc enim est, blandit eleifend dictum facilisis, imperdiet non felis. Suspendisse vel lobortis tortor, at vestibulum dui. Vivamus ullamcorper vulputate odio. Aenean consequat est vestibulum nulla volutpat viverra tristique id dolor. Ut eu ultricies tellus. Sed metus ex, tincidunt eu mollis sed, sollicitudin eget sapien. Ut condimentum lorem ut dui pellentesque aliquet eget id ipsum. Donec neque mauris, vehicula id bibendum ac, pulvinar in eros. Aenean quis quam eget turpis vulputate convallis. Quisque non ex a ligula dignissim finibus. Nulla pulvinar magna non ante dignissim, vitae semper dui vulputate.
      </div>
    </div>
    <div class="row">
      <div class="span-1-of-3 box">
        <div class='main-features'>
          <IosPaperPlaneOutline onClick={() => alert('Hi!')} fontSize="60px" color="#43853d" />
          <h3>Plan your flight ahead</h3>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis molestie neque. Mauris vulputate sit amet nisi in aliquet. 
          </p>
        </div>
      </div>
      <div class="span-1-of-3 box">
        <div >
          <IosSearchOutline onClick={() => alert('Hi!')} fontSize="60px" color="#43853d" />
          <h3>Search your flight</h3>
          <p>
          Sed sit amet orci ultricies, feugiat est id, porttitor augue. Morbi feugiat elementum diam, a vulputate leo euismod viverra. Nunc enim est, blandit eleifend dictum facilisis, imperdiet non felis.
          </p>
        </div>
      </div>
      <div class="span-1-of-3 box">
        <div >
          <MdHeart onClick={() => alert('Hi!')} fontSize="60px" color="#43853d" />
          <h3>Safe Flight</h3>
          <p>
          Vivamus ullamcorper vulputate odio. Aenean consequat est vestibulum nulla volutpat viverra tristique id dolor. Ut eu ultricies tellus. Sed metus ex, tincidunt eu mollis sed, sollicitudin eget sapien. Ut condimentum lorem ut dui pellentesque aliquet eget id ipsum. Donec neque mauris, vehicula id bibendum ac, pulvinar in eros. Aenean quis quam eget turpis vulputate convallis. Quisque non ex a ligula dignissim finibus. Nulla pulvinar magna non ante dignissim, vitae semper dui vulputate.
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default connect()(HowItWorks)