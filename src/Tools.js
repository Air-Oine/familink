import { Toast } from 'native-base';
import { Alert } from 'react-native';

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
  static alert(title, message) {
    Alert.alert(title, message, null, { cancelable: false,
    });
  }
}
