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

    signIn_User: 'Utilisateur *',
    signIn_Pwd: 'Mot de passe *',
    signIn_PwdConfirm: 'Confirmer mot de passe *',
    signIn_LastName: 'Nom',
    signIn_FirstName: 'Prénom *',
    signIn_Email: 'Email',
    signIn_Error: 'Erreur lors de la création du compte',
    signIn_Success: 'Compte ajouté avec succès',

    addContactSave: 'Enregistrer',
    addContactLastName: 'Nom',
    addContactFirstName: 'Prénom *',
    addContactGravatar: 'Gravatar URL',
    addContactPhone: 'Tél *',
    addContactEmail: 'Mail',
    addContactToastSuccess: 'Contact ajouté avec succès',
    addContactToastUpdateSuccess: 'Contact mis à jour avec succès',

    loginPageName: 'Déconnexion',
    homePageName: 'Accueil',
    signInPageName: 'S\'inscrire',
    forgottenPasswordPageName: 'Mot de passe oublié',
    contactPageName: 'Contact',
    contactListPageName: 'Annuaire',
    profilePageName: 'Profil',

    errorNoConnection: 'Pas de connexion réseaux',
    errorRequest: 'Erreur lors de la requête',
    alertTitleConnection: 'Connexion',
    alertMessageConnection: 'Jeton de connexion expiré',

    // Page Login
    loginUser: 'Login',
    loginRememberMe: 'Se souvenir de moi',
    loginPassword: 'Mot de passe',
    loginOK: 'Se connecter',
    loginSignup: 'S\'inscrire',
    loginForgotPassword: 'Mot de passe oublié ?',
    loginError: 'Erreur de connexion',
    logoutConfirm: 'Vous avez été déconnecté',

    // Page Forgotten password
    forgottenPasswordPhone: 'Numéro *',
    forgottenPasswordSave: 'Générer',
    forgottenPasswordPopInMessage: 'Voici votre nouveau mot de passe : 0000',
    forgottenPasswordPopInTitle: 'Information',
    forgottenPasswordPopInOk: 'J\'ai noté',
    forgottenPasswordPopInNotFoundMessage: 'Le numéro que vous avez saisi ne correspond a aucun utilisateur',
    forgottenPasswordPopInNotFoundTitle: 'Avertissement',

    // Familink Action :
    actionError400Message: 'Erreur de login ou de mot de passe',
    actionError500Message: 'Une erreur est survenue coté serveur',

    // contact page:
    contactTitleAlertMessage: 'Confirmer la suppression',
    contactBodyAlertMessage1: 'Etes vous sûr de vouloir supprimer',
    contactBodyAlertMessage2: 'de votre liste de contacts?',
    contactYesAlertMessage: 'oui',
    contactNoAlertMessage: 'non',

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
  signIn_Success: I18n.t('signIn_Success'),

  // Home
  homescreenAnnuaire: I18n.t('homescreenAnnuaire'),
  homescreenHumeur: I18n.t('homescreenHumeur'),
  homescreenConfig: I18n.t('homescreenConfig'),
  homescreenProfil: I18n.t('homescreenProfil'),
  homescreenQuitter: I18n.t('homescreenQuitter'),

  // Page add contact
  addContactSave: I18n.t('addContactSave'),
  addContactLastName: I18n.t('addContactLastName'),
  addContactFirstName: I18n.t('addContactFirstName'),
  addContactGravatar: I18n.t('addContactGravatar'),
  addContactPhone: I18n.t('addContactPhone'),
  addContactEmail: I18n.t('addContactEmail'),
  addContactToastSuccess: I18n.t('addContactToastSuccess'),
  addContactToastUpdateSuccess: I18n.t('addContactToastUpdateSuccess'),

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

  // WebService
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
  logoutConfirm: I18n.t('logoutConfirm'),

  // Page Forgotten password
  forgottenPasswordPhone: I18n.t('forgottenPasswordPhone'),
  forgottenPasswordSave: I18n.t('forgottenPasswordSave'),
  forgottenPasswordPopInTitle: I18n.t('forgottenPasswordPopInTitle'),
  forgottenPasswordPopInMessage: I18n.t('forgottenPasswordPopInMessage'),
  forgottenPasswordPopInOk: I18n.t('forgottenPasswordPopInOk'),
  forgottenPasswordPopInNotFoundTitle: I18n.t('forgottenPasswordPopInNotFoundTitle'),
  forgottenPasswordPopInNotFoundMessage: I18n.t('forgottenPasswordPopInNotFoundMessage'),

  // Page Familink.actions :
  actionError400Message: I18n.t('actionError400Message'),
  actionError500Message: I18n.t('actionError500Message'),

  // page contact :
  contactTitleAlertMessage: I18n.t('contactTitleAlertMessage'),
  contactBodyAlertMessage1: I18n.t('contactBodyAlertMessage1'),
  contactBodyAlertMessage2: I18n.t('contactBodyAlertMessage2'),
  contactYesAlertMessage: I18n.t('contactYesAlertMessage'),
  contactNoAlertMessage: I18n.t('contactNoAlertMessage'),

};

/**
 * Usage :
 * import AppString from './strings';
 * {AppString.translatableText}
 */
export default AppString;
