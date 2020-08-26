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
      Traveling is not only a challenge in an unprecedented period but also a risk. The borders restriction is getting loosen while the enormous efforts by the whole world have paid off. Yet it does not mean that we can fly like what we did before the pandemic. You strike your best to protect you and your beloved's health. Likewise, CovidClean works our best effort to provide you additional protection for your trip. CovidClean allows users to search for coronavirus cases associated with a particular flight by aggregating the data point connecting to flight information. Fly with CovidClean's information on your fingertip.
      </div>
    </div>
    <div class="row">
      <div class="invisible-padding">
      </div>
      <div class="span-1-of-3 box">
        <div>
          <IosPaperPlaneOutline fontSize="60px" color="#43853d" />
          <h3>Before check-in</h3>
          <p>
          We know your concern about traveling at this moment. Our insight is never too late until your flight check-in. Mitigate the risk by checking our aggregated covid19 database with ease. Input the airline code and flight number. We will tell you the associated Covid19 cases with this cabin.
          </p>
        </div>
      </div>
      <div class="span-1-of-3 box">
        <div>
          <IosSearchOutline fontSize="60px" color="#43853d" />
          <h3>Search your flight</h3>
          <p>
          Our information is based on the Open Data by the government. If no result is displayed, it indicates there is no case related to this flight number according to the particular government. Unfortunately, if there are cases found, we hope you make your plan with the best available option.  Our database supports the Hong Kong region with the latest seven days cases in the beta version.
          </p>
        </div>
      </div>
      <div class="span-1-of-3 box">
        <div>
          <MdHeart fontSize="60px" color="#43853d" />
          <h3>Safe flight</h3>
          <p>
          Make a wise choice and have a safe flight. CovidClean provides data for informational purposes. The traveling policies of the airlines and immigration are subjected to change due to the pandemic's progress. Please always check with your airlines, immigration, and airports for the latest policies.
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default connect()(HowItWorks)