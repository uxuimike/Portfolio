import React, { Component } from 'react';

export default class Arrow extends Component {

  render(){

    return(
      <svg
           xmlns="http://www.w3.org/2000/svg"
           xmlnsXlink="http://www.w3.org/1999/xlink"
           viewBox="0 0 100 100"
       >
        <style>
           {
              `.Arrow-Line {
                 fill:none;
                 stroke:currentColor;
                 stroke-width:5;
                 stroke-linecap:round;
                 stroke-miterlimit:10;
               }`
           }
         </style>
         <circle class="Arrow-Line" cx="50" cy="50" r="47.5" />
         <line class="Arrow-Line" x1="22.5" y1="50" x2="77.5" y2="50"/>
         <line class="Arrow-Line" x1="59.8" y1="32.3" x2="77.5" y2="50"/>
         <line class="Arrow-Line" x1="59.8" y1="67.7" x2="77.5" y2="50"/>
       </svg>
    )
  }
}
