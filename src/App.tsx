import './styles/styles.scss';

import React from 'react';
import Navigation from './components/navigation/navigation';
import Home from './components/home/home';

const App = () => (
  <section className="App">
    <Navigation />
    <Home />
  </section>
);

export default App;
