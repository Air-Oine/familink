import I18n from 'react-native-i18n';

I18n.fallbacks = true;

I18n.translations = {
  en: {
    test: 'Welcome to React Native!',
  },
  fr: {
    test: 'Bienvenue sur React Native!',
    homescreenAnnuaire: 'Annuaire',
    homescreenHumeur: 'Humeur',
    homescreenConfig: 'Configuration',
    homescreenProfil: 'Profil',
    homescreenQuitter: 'Se déconnecter',


    loginPageName: 'Connexion',
    homePageName: 'Accueil',
    signInPageName: 'S\'identifier',
    forgottenPasswordPageName: 'Mot de passe oublié',
    contactPageName: 'Contact',
    contactListPageName: 'Contacts',
  },
};

const AppString = {
  test: I18n.t('test'),
  // Home
  homescreenAnnuaire: I18n.t('homescreenAnnuaire'),
  homescreenHumeur: I18n.t('homescreenHumeur'),
  homescreenConfig: I18n.t('homescreenConfig'),
  homescreenProfil: I18n.t('homescreenProfil'),
  homescreenQuitter: I18n.t('homescreenQuitter'),
  // PageName
  loginPageName: I18n.t('loginPageName'),
  homePageName: I18n.t('homePageName'),
  signInPageName: I18n.t('signInPageName'),
  forgottenPasswordPageName: I18n.t('forgottenPasswordPageName'),
  contactPageName: I18n.t('contactPageName'),
  contactListPageName: I18n.t('contactListPageName'),
};

/**
 * Usage :
 * import AppString from './strings';
 * {AppString.translatableText}
 */
export default AppString;
