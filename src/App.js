import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ErrorBoundary } from 'library/common/components';
import Routes from 'core/Routes'

class App extends Component {

  render() {
    return (
        <ErrorBoundary>
              <Routes />
        </ErrorBoundary>
    );
  }
}

export default connect(null, null)(App);
