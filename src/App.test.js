import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './Header/Header'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
