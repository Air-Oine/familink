import React, { Component, PropTypes } from 'react';
import { NetInfo } from 'react-native';
import { connect } from 'react-redux';
import NavigationContainer from './NavigationContainer';
import { setConnected } from './actions/familink.actions';
// const _ = require('lodash');

class NetworkContainer extends Component {
  componentWillMount() {
    NetInfo.fetch().then((reach) => {
      if (reach === 'NONE') {
        this.props.setConnected(false);
      } else {
        this.props.setConnected(true);
      }
    });
    NetInfo.addEventListener(
      'change',
      (reach) => {
        if (reach === 'NONE') {
          this.props.setConnected(false);
        } else {
          this.props.setConnected(true);
        }
      });
  }
  render() {
    return (
      <NavigationContainer />
    );
  }
}

NetworkContainer.propTypes = {
  setConnected: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    setConnected: isConnected => dispatch(setConnected(isConnected)),
  };
}

export default connect(undefined, mapDispatchToProps)(NetworkContainer);
