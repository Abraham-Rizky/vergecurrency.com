
          window.__NEXT_REGISTER_PAGE('/CurrentYearRoadmap', function() {
            var comp = module.exports=webpackJsonp([44],{322:function(e,t,r){e.exports=r(323)},323:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=r(0),o=a(s),n=r(67),i=a(n),d=[{done:!0,doneDate:"1st January 2018",title:"Core Wallet 4.0 Release Stage 2",description:"Tor Integration & Optional Stealth Addressing",progress:100,progressState:""},{done:!0,doneDate:"24th March 2018",title:"New website",description:"New look, guides, updated roadmap, list of official core members, blog with official news, mobile friendly",progress:100,progressState:""},{done:!0,doneDate:"9th June 2018",title:"First Verge Meetup",description:"First verge meetup in Netherlands, Amsterdam",progress:100,progressState:""},{done:!0,doneDate:"24th June 2018",title:"Mining Update",description:"XVGui Miner for Windows",progress:100,progressState:""},{done:!0,doneDate:"17th January 2019",title:"BlackPaper Version 5.0",description:"5th revision of the BlackPaper",progress:100,progressState:""},{done:!0,doneDate:"11th April 2019",title:"Merchandise Online Store",description:"Verge branded apparel that can be purchased with XVG and BTC.",progress:100,progressState:"https://vergecurrency.store"},{done:!0,doneDate:"23rd April 2019",title:"Official iOS wallet",description:"iOS wallet with full-fledged feature set like a normal wallet.",progress:100,progressState:"Released"},{done:!0,doneDate:"16th May 2019",title:"Rebased Codebase",description:"Rebasing the entire codebase to include the newest standards shared by bitcoin.",progress:100,progressState:"Released"},{done:!0,doneDate:"25th May 2019",title:"Second Verge Meetup",description:"Second verge meetup in Netherlands, Rotterdam",progress:100,progressState:""},{done:!1,doneDate:"",title:"Desktop Wallet",description:"Electron based wallet with better performance and minimalistic UI design",progress:5,progressState:"Work in progress"},{done:!1,doneDate:"",title:"Official Android wallet update",description:"Freshly redesigned wallet to match our corporate design and feature set.",progress:30,progressState:"Work in progress"},{done:!1,doneDate:"",title:"RSK",description:"RSK Smart Contract Integration",progress:25,progressState:"Investigating integration"}];t.default=function(e){var t=e.start,r=void 0===t?0:t,a=e.maxLength,s=void 0===a?d.length:a;return d.slice(r,r+s).map(function(e){return o.default.createElement("li",{className:"roadmap__item roadmap__item--"+(e.done?"done":"planned")},o.default.createElement("h3",null,e.title),e.description," ",o.default.createElement("br",null),e.done?o.default.createElement("div",{className:"roadmap-update-progress"},o.default.createElement("span",null,"Released")," ",o.default.createElement("div",{className:"progress progress-text"},e.doneDate)):o.default.createElement(i.default,{percentage:e.progress,text:e.progressState}))})}},67:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(0),s=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default=function(e){var t=e.size,r=void 0===t?25:t,a=e.percentage,o=e.text,n=a/100;return s.default.createElement("div",{className:"roadmap-update-progress"},s.default.createElement("svg",{className:"progress",width:r,height:r,viewBox:"0 0 120 120"},s.default.createElement("circle",{className:"progress__meter",cx:"60",cy:"60",r:"54",strokeWidth:"12"}),s.default.createElement("circle",{className:"progress__value",cx:"60",cy:"60",r:"54",strokeWidth:"12",style:{strokeDashoffset:2*Math.PI*54*(1-n),strokeDasharray:2*Math.PI*54}})),s.default.createElement("p",{className:"progress progress-text"},a,"% - ",o))}}},[322]);
            return { page: comp.default }
          })
        