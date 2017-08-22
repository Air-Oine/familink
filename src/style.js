import { StyleSheet, Platform } from 'react-native';

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
const defaultBorderRadius = 15;

export const buttonColor = primaryColor;

export const styles = StyleSheet.create({
  // HeaderBar
  headerBarContainer: {
    flexDirection: 'row',
    marginTop: (Platform.OS === 'ios') ? 20 : 0,
    height: 36,
  },
  headerBarIcon: {
    width: 36,
    height: 36,
  },
  headerBarTitle: {
    color: secondaryColor,
    fontSize: 25,
    marginLeft: 10,
  },

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
    width: '100%',
    height: defaultHeightButton,
    backgroundColor: primaryColor,
    borderWidth: 2,
    borderColor: complementaryColor,
    marginTop: 10,
    marginBottom: 20,
    borderRadius: defaultBorderRadius,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTouchableHighlight: {
    textAlign: 'center',
    fontSize: defaultfontSize,
    color: complementaryColor,
  },
  flex1: {
    flex: 1,
  },
  // ContactScreen
  gravatar: {
    width: 60,
    height: 60,
    marginTop: 15,
  },
});
