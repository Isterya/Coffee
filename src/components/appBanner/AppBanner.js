import { Component } from 'react';

import './appBanner.scss';

class AppBanner extends Component {
   render() {
      return (
         <div className="coffee-banner">
            <div className="coffee-banner__wrapper">
               <div className="coffee-banner__title">Our coffee</div>
            </div>
         </div>
      );
   }
}

export default AppBanner;
