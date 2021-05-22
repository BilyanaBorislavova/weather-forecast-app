import * as React from 'react';
import NavigationSearchField from './navigation-search-field';

const Navigation = () => (
  <nav className="navigation">
    <h3 className="navigation-title">
      Weather Forecast App
    </h3>
    <NavigationSearchField />
  </nav>
);

export default Navigation;
