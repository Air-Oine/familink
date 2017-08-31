import { StyleSheet, Platform } from 'react-native';

export const secondaryColor = '#256F5B';
export const secondaryColor2 = '#89A236';
export const complementaryColor = '#519331';

const borderColorInput = '#000000';
const sizeIcon = 135;
const defaultFontSizeButton = 20;
const defaultFontSize = 20;
const defaultFontSizeButtonIcon = defaultFontSizeButton + 10;
const defaultBorderRadius = 20;

const primaryColor = '#00BCD4'; // Blue
export const darkPrimaryColor = '#0097A7'; // Dark Blue
export const lightPrimaryColor = '#B2EBF2'; // Light Blue
export const accentColor = '#FFC107'; // Yellow
const textColor = '#212121'; // Black
const textColorInput = '#FFFFFF'; // White
const textSecondaryLightColor = '#BDBDBD'; // Gray Light
const textSecondaryDarkColor = '#757575'; // Gray

const errorColor = '#F90606'; // Red

const headerBarColor = '#FFFFFF';

// dark-primary-color    { background: #0097A7 ; }
// .default-primary-color { background: #00BCD4 ; }
// .light-primary-color   { background: #B2EBF2 ; }
// .text-primary-color    { color: #FFFFFF ; }
// .accent-color          { background: #FFC107 ; }
// .primary-text-color    { color: #212121 ; }
// .secondary-text-color  { color: #757575 ; }
// .divider-color         { border-color: #BDBDBD ; }


export const buttonColor = primaryColor;
export const inputPlaceHolderColor = textSecondaryDarkColor;
export const inputSelectionColor = textColorInput;

export function inputError(error) {
  return {
    borderColor: error ? errorColor : borderColorInput,
    borderWidth: error ? 2 : 1,
  };
}

export function inputnotWritable(value) {
  return {
    backgroundColor: value ? textSecondaryLightColor : primaryColor,
  };
}
export const styles = StyleSheet.create({
  // Radio 
  radioButtonView: {
    marginTop: 10,
    backgroundColor: primaryColor,
    borderRadius: defaultBorderRadius,
    borderColor: borderColorInput,
    borderWidth: 1,
    padding: 10,
  },
  radioButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  // form
  form: {
    padding: 40,
  },
  // loginView
  login_view: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  login_logo: {
    width: 250,
    height: 250,
    alignSelf: 'center',
  },

  login_viewSignInPwdForgot: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 50,
  },
  login_underlineTextLogin: {
    color: primaryColor,
    textDecorationLine: 'underline',
    fontSize: 18,
  },
  // Contact list
  contactList_img: {
    width: 60,
    height: 60,
  },
  contactList_viewItem: {
    flexDirection: 'row',
  },
  contactList_viewItem_name_phone: {
    flexDirection: 'column',
    flex: 1,
  },
  contactList_viewItemBody: {
    flex: 4,
  },
  contactList_name: {
    fontSize: defaultFontSize,
  },
  contactList_phone: {
    fontSize: defaultFontSize,
    marginTop: 10,
  },
  // -------------------------------------  Universel  ---------------------------------------------
  // --------------  CheckBox
  checkBox: {
    marginTop: 5,
    flexDirection: 'row',
  },
  checkBoxTouchable: {
    padding: 10,
  },
  textCheckbox: {
    paddingLeft: 10,
    color: textSecondaryDarkColor,
  },
  // --------------  Button
  button: {
    borderRadius: defaultBorderRadius,
    backgroundColor: accentColor,
    marginTop: 30,
    marginBottom: 20,
  },
  iconButton: {
    fontSize: defaultFontSizeButtonIcon,
  },
  buttonText: {
    color: textColor,
    fontSize: defaultFontSizeButton,
  },

  // --------------  Input
  input: {
    marginTop: 10,
    backgroundColor: primaryColor,
    paddingLeft: 20,
    borderRadius: defaultBorderRadius,
    borderColor: borderColorInput,
    borderWidth: 1,
  },
  inputIcon: {
    height: 25,
    width: 40,
  },
  inputText: {
    color: inputSelectionColor,
  },
  // -------------------------------------  HEADER BAR  -------------------------------------------
  headerBarHeader: {
    backgroundColor: darkPrimaryColor,
  },
  headerBarIcon: {
    fontSize: 35,
    color: headerBarColor,
  },
  headerBarTitle: {
    fontSize: Platform.OS === 'ios' ? 25 : 30,
    color: headerBarColor,
  },
  // -------------------------------------  MENU  -------------------------------------------
  menuDrawer_itemLabel: {
    color: darkPrimaryColor,
    fontSize: 18,
  },
  menuDrawer_itemIcon: {
    color: darkPrimaryColor,
  },

  text: {
    color: textColor,
    fontSize: 20,
  },
  icon: {
    fontSize: sizeIcon,
    color: secondaryColor,
    textAlign: 'center',
  },
  iconR: {
    fontSize: sizeIcon,
    color: primaryColor,
    textAlign: 'center',
  },
  grid: {
  },
  MenuText: {
    fontSize: 24,
    textAlign: 'center',
    color: primaryColor,
  },
  MenuTextR: {
    fontSize: 24,
    textAlign: 'center',
    color: primaryColor,
  },
  defaultButtonAtBottom: {
    borderWidth: 2,
    borderColor: primaryColor,
    borderRadius: defaultBorderRadius,
  },
  textTouchableHighlight: {
    textAlign: 'center',
    fontSize: defaultFontSize,
    color: complementaryColor,
  },
  flex1: {
    flex: 1,
  },
  // ContactScreen
  gravatar: {
    width: 40,
    height: 40,
    marginLeft: 10,
    marginTop: 15,
  },

  // margin top accueil
  accueilMargin: {
    marginTop: 20,
  },

  // searchBar
  searchBar: {
    backgroundColor: darkPrimaryColor,
  },

  // spinner
  spinner: {
    color: headerBarColor,
  },

});
