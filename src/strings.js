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

    signIn_User: 'Utilisateur',
    signIn_Pwd: 'Mot de passe',
    signIn_PwdConfirm: 'Confirmer mot de passe',
    signIn_LastName: 'Nom',
    signIn_FirstName: 'Prénom',
    signIn_Email: 'Email',
    signIn_Error: 'Erreur lors de la création du compte',
    loginPageName: 'Connexion',
    homePageName: 'Accueil',
    signInPageName: 'S\'enregistrer',
    forgottenPasswordPageName: 'Mot de passe oublié',
    contactPageName: 'Contact',
    contactListPageName: 'Contacts',
    profilePageName: 'Profil',
    errorNoConnection: 'Pas de connexion réseaux',
    errorRequest: 'Erreur lors de la requête',
    alertTitleConnection: 'Connexion',
    alertMessageConnection: 'Jeton de connexion expiré',
    // Page Login
    loginUser: 'Login',
    loginRememberMe: 'Souvenez-vous de moi',
    loginPassword: 'Mot de passe',
    loginOK: 'OK',
    loginSignup: 'S\'inscrire',
    loginForgotPassword: 'Mot de pass oublié ?',
    loginError: 'Erreur de connexion',
  },
};

const AppString = {
  // Page signin
  signIn_User: I18n.t('signIn_User'),
  signIn_Pwd: I18n.t('signIn_Pwd'),
  signIn_PwdConfirm: I18n.t('signIn_PwdConfirm'),
  signIn_LastName: I18n.t('signIn_LastName'),
  signIn_FirstName: I18n.t('signIn_FirstName'),
  signIn_Email: I18n.t('signIn_Email'),
  signin_Error: I18n.t('signIn_Error'),
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
  profilePageName: I18n.t('profilePageName'),
  // Error
  errorNoConnection: I18n.t('errorNoConnection'),
  errorRequest: I18n.t('errorRequest'),
  // WebServie
  alertTitleConnection: I18n.t('alertTitleConnection'),
  alertMessageConnection: I18n.t('alertMessageConnection'),
  // Page Login
  loginUser: I18n.t('loginUser'),
  loginRememberMe: I18n.t('loginRememberMe'),
  loginPassword: I18n.t('loginPassword'),
  loginOK: I18n.t('loginOK'),
  loginSignup: I18n.t('loginSignup'),
  loginForgotPassword: I18n.t('loginForgotPassword'),
  loginError: I18n.t('loginError'),
};

/**
 * Usage :
 * import AppString from './strings';
 * {AppString.translatableText}
 */
export default AppString;
