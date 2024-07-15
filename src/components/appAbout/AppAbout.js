import { Component } from 'react';
import AppNavigation from '../appNavigation/AppNavigation';
import AppFooter from '../appFooter/AppFooter';

import './appAbout.scss';

class AppAbout extends Component {
   render() {
      return (
         <section className="coffee-about">
            <AppNavigation />
         </section>
      );
   }
}

export default AppAbout;
