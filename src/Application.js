import React, {Component} from 'react';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';

import NavigationContainer from './NavigationContainer';

import familinkReducer from './reducers/familink.reducer';

const middlewares = [thunk];
if (!isReleaseMode()) {
  const logger = createLogger({
    duration: true,
    collapsed: true,
  });
  middlewares.push(logger);
}

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

const store = createStoreWithMiddleware (
  combineReducers({
    greetings
  })
);

export class Application extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer/>
      </Provider>
    )
  };
}

function mapStateToProps(state) {
  return {
    todoList: state.todosReducer.todos
  }
}

export default connect(mapStateToProps, undefined)(Application)
