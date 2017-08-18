/*
import React from 'react';
//import { NetInfo, AppState } from 'react-native';
*/

export default class Helper {
  static isValidPhoneNumber(phoneNumber) {
    const pattern = /^[0-9]{10}$/; // Check if number is 10 digits
    return pattern.test(phoneNumber); // Return true if test pass / false if it doesn't
  }

  static isValidPassword(password) {
    const pattern = /^[0-9]{4}$/; // Check if number is 4 digits
    return pattern.test(password); // Return true if test pass / false if it doesn't
  }

  static isValidEmail(email) {
    const pattern = /.+@.+\..+/;
    return pattern.test(email);
  }
}
