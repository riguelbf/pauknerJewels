import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as topicsSelectors from './reducer/topics/reducer';
import TopicsScreen from './containers/TopicsScreen';
//import PostsScreen from './containers/PostsScreen';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {!this.props.isSelectionFinalized ?
          <TopicsScreen /> :
          null
        }
      </div>
    );
  }
}

// which props do we want to inject, given the global store state?
function mapStateToProps(state) {
  return {
    isSelectionFinalized: topicsSelectors.isTopicSelectionFinalized(state)
  };
}

export default connect(mapStateToProps)(App);