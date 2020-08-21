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
      Traveling is not only a challenge in an unprecedented period but also a risk. The borders restriction is getting loosen while the enormous efforts by the whole world have paid off. Yet it does not mean that we can fly like what we did before the pandemic. You strike your best to protect you and your beloved's health. Likewise, CovidClean works our best effort to provide you additional protection for your trip. Fly with CovidClean's information on your fingertip.
      </div>
    </div>
    <div class="row">
      <div class="span-1-of-3 box">
        <div class='main-features'>
          <IosPaperPlaneOutline onClick={() => alert('Hi!')} fontSize="60px" color="#43853d" />
          <h3>Plan your flight ahead</h3>
          <p>
          Our insight is never too late until your flight check-in. Mitigate the risk by checking our aggregated covid19 database with ease. 
          </p>
        </div>
      </div>
      <div class="span-1-of-3 box">
        <div >
          <IosSearchOutline onClick={() => alert('Hi!')} fontSize="60px" color="#43853d" />
          <h3>Search your flight</h3>
          <p>
          Input the airline and flight number. We will tell you the associated Covid19 cases with this cabin. The database supports the Hong Kong region with the latest seven days cases in the beta version.
          </p>
        </div>
      </div>
      <div class="span-1-of-3 box">
        <div >
          <MdHeart onClick={() => alert('Hi!')} fontSize="60px" color="#43853d" />
          <h3>Safe Flight</h3>
          <p>
          Make a wise choice and have a safe flight.	
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default connect()(HowItWorks)