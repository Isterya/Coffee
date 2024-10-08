import React from 'react';
import './loader.scss';

const Loader = () => {
   return (
      <div className="loader-container">
         <svg className="loader-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
            <circle fill="#FF156D" stroke="#FF156D" strokeWidth="14" r="15" cx="40" cy="65">
               <animate
                  attributeName="cy"
                  calcMode="spline"
                  dur="1.5s"
                  values="65;135;65;"
                  keySplines=".5 0 .5 1;.5 0 .5 1"
                  repeatCount="indefinite"
                  begin="-.4s"
               ></animate>
            </circle>
            <circle fill="#FF156D" stroke="#FF156D" strokeWidth="14" r="15" cx="100" cy="65">
               <animate
                  attributeName="cy"
                  calcMode="spline"
                  dur="1.5s"
                  values="65;135;65;"
                  keySplines=".5 0 .5 1;.5 0 .5 1"
                  repeatCount="indefinite"
                  begin="-.2s"
               ></animate>
            </circle>
            <circle fill="#FF156D" stroke="#FF156D" strokeWidth="14" r="15" cx="160" cy="65">
               <animate
                  attributeName="cy"
                  calcMode="spline"
                  dur="1.5s"
                  values="65;135;65;"
                  keySplines=".5 0 .5 1;.5 0 .5 1"
                  repeatCount="indefinite"
                  begin="0s"
               ></animate>
            </circle>
         </svg>
      </div>
   );
};

export default Loader;
