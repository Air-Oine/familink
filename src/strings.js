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

    loginPageName: 'Déconnexion',
    homePageName: 'Accueil',
    signInPageName: 'S\'enregistrer',
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

    // Familink Action :
    actionError400Message: 'Erreur de login ou de mot de passe',
    actionError500Message: 'Une erreur est survenue coté serveur',

    // Profile 
    profileUser: 'Utilisateur',
    profileLastName: 'Nom',
    profileFirstName: 'Prénom',
    profileEmail: 'Email',
    profileProfil: 'Profile',
    profileSave: 'Sauvegarder',
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

  // Page Familink.actions :
  actionError400Message: I18n.t('actionError400Message'),
  actionError500Message: I18n.t('actionError500Message'),

  // Profile 
  profileUser: I18n.t('profile_User'),
  profileLastName: I18n.t('profile_LastName'),
  profileFirstName: I18n.t('profile_FirstName'),
  profileEmail: I18n.t('profile_Email'),
  profileProfil: I18n.t('profile_Profil'),
  profileSave: I18n.t('profile_save'),
};

/**
 * Usage :
 * import AppString from './strings';
 * {AppString.translatableText}
 */
export default AppString;
