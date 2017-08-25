import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavigationContainer from './NavigationContainer';

const _ = require('lodash');

export const CONTACTLIST_SCENE_NAME = 'CONTACTLIST_SCENE';

class ConnectionContainer extends Component {

  constructor(props) {
    super(props);
    
  }

  render() { 
    return (
      <NavigationContainer />
    );
  }
}


ConnectionContainer.propTypes = {
};

function mapDispatchToProps(dispatch) {
  return {

  };
}
function mapStateToProps(state) {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectionContainer);
