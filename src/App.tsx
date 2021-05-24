import './styles/styles.scss';
import './styles/app.scss';

import React from 'react';
import Navigation from './components/navigation/navigation';
import Home from './components/home/home';

const App = () => (
  <section className="page-content-wrapper">
    <Navigation />
    <Home />
  </section>
);

export default App;
