import I18n from 'react-native-i18n';

I18n.fallbacks = true;

I18n.translations = {
  en: {
    test: 'Welcome to React Native!',
  },
  fr: {
    test: 'Bienvenue sur React Native!',
  },
};

const AppString = {
  test: I18n.t('test'),
};
console.log(AppString)
/**
 * Usage :
 * import strings from './strings';
 * {strings.translatableText}
 */
export default AppString;
