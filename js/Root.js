import React, { Component } from 'react';

import { getSettings, setSettings } from './constants';

import { Main } from './components';

import { Router, browserHistory } from 'react-router';

import routes from './routes';

export default class Root extends Component {
  constructor(p) {
    super(p);
    const { nightMode } = getSettings();
    this.state = { nightMode };
    document.body.style.backgroundColor = nightMode ? '#212121' : '';
  }
  toggleNightMode() {
    let newSettings = getSettings();
    newSettings.nightMode = !this.state.nightMode;
    setSettings(newSettings);
    document.body.style.backgroundColor = !this.state.nightMode ? '#212121' : '';
    this.setState({ nightMode: !this.state.nightMode });
  }
  render() {
    const App = props => (
      <Main onNightModeToggle={() => this.toggleNightMode()} nightMode={this.state.nightMode} {...props} />
    );

    return (
      <Router history={browserHistory} onUpdate={() => document.body.scrollTop = 0} routes={routes(App)} />
    );
  }
}
