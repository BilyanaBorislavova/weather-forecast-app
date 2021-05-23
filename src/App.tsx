import './styles/styles.scss';

import React from 'react';
import Navigation from './components/navigation/navigation';
import SearchInput from './components/search-input/search-input';

const App = () => (
  <section className="App">
    <Navigation />
    <SearchInput />
  </section>
);

export default App;
