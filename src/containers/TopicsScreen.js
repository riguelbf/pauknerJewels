import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as topicsActions from '../store/topics/actions';
import * as topicsSelectors from '../store/topics/reducer';

class TopicsScreen extends Component {
  // view implementation here
}

// which props do we want to inject, given the global store state?
function mapStateToProps(state) {
  return {
    rowsById: topicsSelectors.getTopicsByUrl(state),
    rowsIdArray: topicsSelectors.getTopicsUrlArray(state)
  };
}

export default connect(mapStateToProps)(TopicsScreen);