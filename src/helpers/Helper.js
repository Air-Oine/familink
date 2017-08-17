import React from 'react';
import { NetInfo, AppState } from 'react-native';

class Helper {

/*
  state = {
    appState: AppState.currentState;
  }
*/

    static function isConnected() {
        NetInfo.isConnected.fetch().then(isConnected => {
            console.log('First, is ' + (isConnected ? 'online' : 'offline'));
        });
    }

}
