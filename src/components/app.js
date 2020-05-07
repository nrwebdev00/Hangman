import React, { Component } from 'react';

import HangmanScreen from './hangmanScreen';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <HangmanScreen />
      </div>
    );
  }
}
