(this["webpackJsonpcovid19-flights-app"]=this["webpackJsonpcovid19-flights-app"]||[]).push([[0],{123:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(9),r=a.n(i),l=(a(68),a(69),a(45)),s=(a(72),a(73),a(74),a(75),a(8)),c=Object(s.b)()((function(e){return o.a.createElement("header",{class:"header"},o.a.createElement("div",{class:"hero-text-box"},o.a.createElement("span",{class:"hero-title"},"Fly safely with CovidClean"),o.a.createElement("span",{class:"hero-version"},"beta")),o.a.createElement("div",{class:"credit"},"Photo credit to Mike Palmowski"))})),u=a(49),d=a.n(u),m=a(24),h=a.n(m),f=a(52),p=a.n(f),E=Object(s.b)()((function(e){return o.a.createElement("section",{class:"section-how"},o.a.createElement("div",{class:"row"},o.a.createElement("h2",null,"How it works")),o.a.createElement("div",{class:"row"},o.a.createElement("div",{class:"long-paragraph"},"Traveling is not only a challenge in an unprecedented period but also a risk. The borders restriction is getting loosen while the enormous efforts by the whole world have paid off. Yet it does not mean that we can fly like what we did before the pandemic. You strike your best to protect you and your beloved's health. Likewise, CovidClean works our best effort to provide you additional protection for your trip. CovidClean allows users to search for coronavirus cases associated with a particular flight by aggregating the data point connecting to flight information. Fly with CovidClean's information on your fingertip.")),o.a.createElement("div",{class:"row"},o.a.createElement("div",{class:"invisible-padding"}),o.a.createElement("div",{class:"span-1-of-3 box"},o.a.createElement("div",null,o.a.createElement(d.a,{fontSize:"60px",color:"#43853d"}),o.a.createElement("h3",null,"Before check-in"),o.a.createElement("p",{class:"feature-text"},"We know your concern about traveling at this moment. Our insight is never too late until your flight check-in. Mitigate the risk by checking our aggregated covid19 database with ease. Input the airline code and flight number. We will tell you the associated Covid19 cases with this cabin."))),o.a.createElement("div",{class:"span-1-of-3 box"},o.a.createElement("div",null,o.a.createElement(h.a,{fontSize:"60px",color:"#43853d"}),o.a.createElement("h3",null,"Search your flight"),o.a.createElement("p",{class:"feature-text"},"Our information is based on the Open Data by the government. If no result is displayed, it indicates there is no case related to this flight number according to the particular government. Unfortunately, if there are cases found, we hope you make your plan with the best available option.  Our database supports the Hong Kong region with the latest seven days cases in the beta version."))),o.a.createElement("div",{class:"span-1-of-3 box"},o.a.createElement("div",null,o.a.createElement(p.a,{fontSize:"60px",color:"#43853d"}),o.a.createElement("h3",null,"Safe flight"),o.a.createElement("p",{class:"feature-text"},"Make a wise choice and have a safe flight. CovidClean provides data for informational purposes. The traveling policies of the airlines and immigration are subjected to change due to the pandemic's progress. Please always check with your airlines, immigration, and airports for the latest policies.")))))})),v=function(e){return console.log("cases:",e),{type:"CASES_RESULT",cases:e}},b=Object(s.b)()((function(e){return o.a.createElement("div",{class:"flight-filter-section"},o.a.createElement("form",{class:"flight-filter-box",onSubmit:function(t){t.preventDefault();var a=t.target.flightCode.value;e.dispatch(function(e){return function(t){fetch("https://covid19-flights.herokuapp.com/api/flights?flightCode=".concat(e),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return t(v(e))})).catch((function(e){return console.log(e)}))}}(a))}},o.a.createElement("div",{class:"search-box"},o.a.createElement("label",{class:"input-label"},"Flight Code"),o.a.createElement("br",null),o.a.createElement("input",{type:"text",class:"input-box",name:"flightCode",placeholder:"e.g. CX881",maxlength:"6"})),o.a.createElement("div",{class:"search-box"},o.a.createElement("label",null),o.a.createElement("br",null),o.a.createElement("button",null,o.a.createElement(h.a,{fontSize:"50px",color:"#fff"})))))})),y=a(53),g=a.n(y),w=Object(s.b)((function(e){return{cases:e.flights.data}}))((function(e){console.log("props:",e);var t=function(){return o.a.createElement("div",null,"No case is associated to this flight number")};return o.a.createElement("div",{class:"search-result-table"},o.a.createElement(g.a,{keyField:"id",data:e.cases,columns:[{dataField:"path",text:"Route"},{dataField:"shortDate",text:"Arrival Date"},{dataField:"seat_number",text:"Seat Number"},{dataField:"case_number",text:"Case Number"}],striped:!0,hover:!0,condensed:!0,noDataIndication:function(){return o.a.createElement(t,null)}}))})),S=a(58),C=a(18),k=a(33),x=Object(s.b)()((function(e){return o.a.createElement(C.a,Object.assign({},e,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),o.a.createElement(C.a.Header,{closeButton:!0},o.a.createElement(C.a.Title,{id:"contained-modal-title-vcenter"},"Disclaimer")),o.a.createElement(C.a.Body,null,o.a.createElement("div",null,o.a.createElement("p",null,"Last updated August 26, 2020"),o.a.createElement("h5",null,"INTRODUCTION"),o.a.createElement("p",null,"The information provided by Valubees (\u201cwe,\u201d \u201cus\u201d or \u201cour\u201d) on CovidClean (the \u201cSite\u201d) is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability or completeness of any information on the Site."),o.a.createElement("p",null,"Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk. This disclaimer was created using Termly\u2019s disclaimer generator."),o.a.createElement("h5",null,"EXTERNAL LINKS DISCLAIMER FOR WEBSITE"),o.a.createElement("p",null,"The Site may contain (or you may be sent through the Site links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability or completeness by us."),o.a.createElement("p",null,"We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the site or any website or feature linked in any banner or other advertising. We will not be a party to or in any way be responsible for monitoring any transaction between you and third-party providers of products or services."),o.a.createElement("h5",null,"PROFESSIONAL DISCLAIMER FOR WEBSITE"),o.a.createElement("p",null,"The Site cannot and does not contain medical/health advice. The medical/health information is provided for general informational and educational purposes only and is not a substitute for professional advice."),o.a.createElement("p",null,"Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of medical/health advice. The use or reliance of any information contained on this site is solely at your own risk."),o.a.createElement("h5",null,"AFFILIATES DISCLAIMER FOR WEBSITE"),o.a.createElement("p",null,"The Site [and our mobile application] may contain links to affiliate websites, and we receive an affiliate commission for any purchases made by you on the affiliate website using such links. Our affiliates include www.valuebees.co.uk."),o.a.createElement("h5",null,"TESTIMONIALS DISCLAIMER FOR WEBSITE"),o.a.createElement("p",null,"The Site may contain testimonials by users of our products and/or services. These testimonials reflect the real-life experiences and opinions of such users. However, the experiences are personal to those particular users, and may not necessarily be representative of all users of our products and/or services. We do not claim, and you should not assume, that all users will have the same experiences. Your individual results may vary."),o.a.createElement("p",null,"The testimonials on the Site are submitted in various forms such as text, audio and/or video, and are reviewed by us before being posted. They appear on the Site verbatim as given by the users, except for the correction of grammar or typing errors. Some testimonials may have been shortened for the sake of brevity where the full testimonial contained extraneous information not relevant to the general public."),o.a.createElement("p",null,"The views and opinions contained in the testimonials belong solely to the individual user and do not reflect our views and opinions. We are not affiliated with users who provide testimonials, and users are not paid or otherwise compensated for their testimonials."),o.a.createElement("p",null,"The testimonials on the Site are not intended, nor should they be construed, as claims that our products and/or services can be used to diagnose, treat, mitigate, cure, prevent or otherwise be used for any disease or medical condition. No testimonials have been clinically proven or evaluated."))),o.a.createElement(C.a.Footer,null,o.a.createElement(k.a,{onClick:e.onHide},"Close")))})),T=a(54),O=a.n(T),I=a(55),A=a.n(I),F=a(56),j=a.n(F),L=Object(s.b)()((function(e){var t=o.a.useState(!1),a=Object(S.a)(t,2),n=a[0],i=a[1];return o.a.createElement("footer",{class:"footer"},o.a.createElement("div",{class:"row"},o.a.createElement("div",{class:"span-1-of-2"},o.a.createElement("ul",{class:"footer-nav"},o.a.createElement("li",null,o.a.createElement("a",{href:"#"},"About")),o.a.createElement("li",null,o.a.createElement("a",{href:"#",onClick:function(){return i(!0)}},"Disclaimer")),o.a.createElement("li",null,o.a.createElement("a",{href:"#"},"Contact us")),o.a.createElement(x,{show:n,onHide:function(){return i(!1)}}))),o.a.createElement("div",{class:"span-1-of-2"},o.a.createElement("ul",{class:"social-icons"},o.a.createElement("li",null,o.a.createElement("a",{href:"#"},o.a.createElement(A.a,{fontSize:"30px",color:"#55acee"}))),o.a.createElement("li",null,o.a.createElement("a",{href:"#"},o.a.createElement(O.a,{fontSize:"30px",color:"#D44638"}))),o.a.createElement("li",null,o.a.createElement("a",{href:"#"},o.a.createElement(j.a,{fontSize:"30px",color:"#333"})))))),o.a.createElement("div",null,o.a.createElement("p",null,"Copyright \xa9 2020 by CovidClean. All rights reserved.")))}));var R=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(l.a,null,o.a.createElement("meta",{charSet:"utf-8"}),o.a.createElement("title",null,"CovidClean"),o.a.createElement("meta",{name:"title",content:"CovidClean"}),o.a.createElement("meta",{name:"name",content:"CovidClean"}),o.a.createElement("meta",{name:"description",content:"CovidClean"}),o.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"})),o.a.createElement(c,null),o.a.createElement(E,null),o.a.createElement(b,null),o.a.createElement(w,null),o.a.createElement(L,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=a(13),N=a(59),W=a(38),B={data:[]},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(console.log("action:",t),t.type){case"CASES_RESULT":return Object(W.a)({},e,{data:t.cases.records});case"FLIGHT_FILTER":return Object(W.a)({},e,{data:[].concat(Object(N.a)(e.data),[{airline:t.airline,flightNumber:t.flightNumber}])});default:return e}},M=Object(D.c)({flights:z}),H=a(57),U=Object(D.d)(M,Object(D.a)(H.a));r.a.render(o.a.createElement(s.a,{store:U},o.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},63:function(e,t,a){e.exports=a(123)},69:function(e,t,a){},72:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){}},[[63,1,2]]]);
//# sourceMappingURL=main.0a76af60.chunk.js.map