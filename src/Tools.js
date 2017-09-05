import { Toast } from 'native-base';
import { Alert } from 'react-native';
import AppString from './strings';

export default class Tools {
  // --------------------------------------------TOAST--------------------------------------------
  /**
   * Show a success toast
   * @param {*} message 
   * @param {*} duration optional : (default = 2s)
   * @param {*} buttonText confirmation, optional
   */
  static toastSuccess(message, duration, confirmationText) {
    Tools.toast(message, 'success', duration, confirmationText);
  }

  /**
   * Show a warning toast
   * @param {*} message 
   * @param {*} duration optional : (default = 2s)
   * @param {*} buttonText confirmation, optional
   */
  static toastWarning(message, duration, confirmationText) {
    Tools.toast(message, 'warning', duration, confirmationText);
  }

  /**
   * Show a danger toast
   * @param {*} message 
   * @param {*} duration optional : (default = 2s)
   * @param {*} buttonText confirmation, optional
   */
  static toastDanger(message, duration, confirmationText) {
    Tools.toast(message, 'danger', duration, confirmationText);
  }

  /**
   * Show a toast
   * @param {*} message 
   * @param {*} type of the toast (none, success, warning, danger) 
   * @param {*} duration optional : (default = 2s)
   * @param {*} buttonText confirmation, optional
   */
  static toast(message, type, duration = 2000, confirmationText) {
    Toast.show({
      text: message,
      position: 'bottom',
      buttonText: confirmationText,
      duration,
      type,
    });
  }

  // ----------------------------Alert----------------------------------
  /**
   * Show an alert message
   * @param {*} title of the popin
   * @param {*} message 
   * @param {*} okText optional : text for the OK button
   * @param {*} okOnPress optional : function called when OK button pressed
   * @param {*} cancelText optional : text for the cancel button
   * @param {*} cancelOnPress optional : function called when cancel button pressed
   */
  static alert(title, message,
    okText = null, okOnPress = null, cancelText = null, cancelOnPress = null) {
    // Custom buttons
    const buttons = [];
    if (okText) {
      buttons.push({ text: okText, onPress: okOnPress });
    }
    if (cancelText) {
      buttons.push({ text: cancelText, onPress: cancelOnPress });
    }

    Alert.alert(title, message, buttons.length > 0 ? buttons : null, { cancelable: false });
  }

  static alertUnauthorized(onPress) {
    Tools.alert(AppString.alertTitleConnection, AppString.alertMessageConnection, 'OK', onPress);
  }
}
