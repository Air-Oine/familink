/*
import React from 'react';
//import { NetInfo, AppState } from 'react-native';
*/
const lodash = require('lodash');

export default class Helper {
  static isValidPhoneNumber(phoneNumber) {
    // Valid if empty (don't handle required)
    if (lodash.isEmpty(phoneNumber)) {
      return true;
    }

    const pattern = /^[0-9]{10}$/; // Check if number is 10 digits
    return pattern.test(phoneNumber); // Return true if test pass / false if it doesn't
  }

  static isValidPassword(password) {
    // Valid if empty (don't handle required)
    if (lodash.isEmpty(password)) {
      return true;
    }

    const pattern = /^[0-9]{4}$/; // Check if number is 4 digits
    return pattern.test(password); // Return true if test pass / false if it doesn't
  }

  static isValidEmail(email) {
    // Valid if empty (don't handle required)
    if (lodash.isEmpty(email)) {
      return true;
    }

    const pattern = /.+@.+\..+/;
    return pattern.test(email);
  }
}
