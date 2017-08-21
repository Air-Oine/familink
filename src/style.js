import { StyleSheet } from 'react-native';

export const primaryColor = '#9E3549';
export const secondaryColor = '#256F5B';
export const secondaryColor2 = '#89A236';
export const complementaryColor = '#519331';
export const errorColor = '#F90606';
export const textColor = secondaryColor;
export const sizeIcon = 135;
const defaultPadding = 20;
const defaultfontSize = 20;
const defaultHeightButton = 36;
const defaultBorderRaduis = 15;

export const buttonColor = primaryColor;

export const styles = StyleSheet.create({
  text: {
    color: textColor,
    fontSize: defaultfontSize,
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
    color: secondaryColor,
  },
  MenuTextR: {
    fontSize: 24,
    textAlign: 'center',
    color: primaryColor,
  },
  form: {
    paddingLeft: defaultPadding,
    paddingRight: defaultPadding,
  },
  defaultButtonAtBottom: {
    height: defaultHeightButton,
    backgroundColor: primaryColor,
    borderWidth: 2,
    borderColor: complementaryColor,
    marginBottom: 20,
    borderRadius: defaultBorderRaduis,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textTouchableHighlight: {
    textAlign: 'center',
    fontSize: defaultfontSize,
    color: complementaryColor,
  },
});
