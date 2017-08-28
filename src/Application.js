import React from 'react';
import { Root } from 'native-base';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import NetworkContainer from './NetworkContainer';
import familinkReducer from './reducers/familink.reducer';


const middlewares = [thunk];
const logger = createLogger({
  duration: true,
  collapsed: true,
});
middlewares.push(logger);

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

const store = createStoreWithMiddleware(
  combineReducers({
    familinkReducer,
  }),
);

// class 'Application' written as a Pure Function :
export default function Application() {
  return (
    <Root>
      <Provider store={store}>
        <NetworkContainer />
      </Provider>
    </Root>
  );
}

/*
function mapStateToProps(state) {
  return {
    token: state.familinkReducer.userToken,
  };
}

export default connect(mapStateToProps, undefined)(Application);
*/
