import I18n from 'react-native-i18n';

I18n.fallbacks = true;

I18n.translations = {
  en: {
    test: 'Welcome to React Native!',
  },
  fr: {
    test: 'Bienvenue sur React Native!',
    signIn_User: 'Utilisateur',
    signIn_Pwd: 'Mot de passe',
    signIn_PwdConfirm: 'Confirmer mot de passe',
    signIn_LastName: 'Nom',
    signIn_FirstName: 'Prénom',
    signIn_Email: 'Email',
  },
};

const AppString = {
  signIn_User: I18n.t('signIn_User'),
  signIn_Pwd: I18n.t('signIn_Pwd'),
  signIn_PwdConfirm: I18n.t('signIn_PwdConfirm'),
  signIn_LastName: I18n.t('signIn_LastName'),
  signIn_FirstName: I18n.t('signIn_FirstName'),
  signIn_Email: I18n.t('signIn_Email'),
};
/**
 * Usage :
 * import AppString from './strings';
 * strings.translatableText
 */
export default AppString;
