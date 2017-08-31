import I18n from 'react-native-i18n';

I18n.fallbacks = true;

I18n.translations = {
  en: {
    homescreenAnnuaire: 'Phone book',
    homescreenHumeur: 'Mood',
    homescreenConfig: 'Settings',
    homescreenProfil: 'Profile',
    homescreenQuitter: 'Disconnect',

    signIn_User: 'User *',
    signIn_Pwd: 'Password *',
    signIn_PwdConfirm: 'Confirm password *',
    signIn_LastName: 'Last name',
    signIn_FirstName: 'First name *',
    signIn_Email: 'Email',
    signIn_ErrorAccount: 'User already exists error',
    signIn_Error: 'Sign in error',
    signIn_Success: 'User successfully created',

    addContactSave: 'Save',
    addContactLastName: 'Last name',
    addContactFirstName: 'First name *',
    addContactGravatar: 'Gravatar URL',
    addContactPhone: 'Phone *',
    addContactEmail: 'Mail',
    addContactToastSuccess: 'Contact successfully created',
    addContactToastUpdateSuccess: 'Contact successfully updated',

    loginPageName: 'Disconnect',
    homePageName: 'Home',
    signInPageName: 'Sign in',
    forgottenPasswordPageName: 'Forgot password',
    contactPageName: 'Contact',
    contactListPageName: 'Phone book',
    profilePageName: 'Profile',

    errorNoConnection: 'No connection',
    errorRequest: 'Request error',
    alertTitleConnection: 'Connection',
    alertMessageConnection: 'Connection token expired',

    // Page Login
    loginUser: 'Login',
    loginRememberMe: 'Remember me',
    loginPassword: 'Password',
    loginOK: 'Login',
    loginSignup: 'Sign up',
    loginForgotPassword: 'Forgot password ?',
    loginError: 'Login error',
    logoutConfirm: 'You have been disconnected',

    // Page Forgotten password
    forgottenPasswordPhone: 'Phone number *',
    forgottenPasswordSave: 'Generate',
    forgottenPasswordPopInMessage: 'New password : 0000',
    forgottenPasswordPopInTitle: 'Information',
    forgottenPasswordPopInOk: 'Ok',
    forgottenPasswordPopInNotFoundMessage: 'The phone number you entered does not match any user\'s',
    forgottenPasswordPopInNotFoundTitle: 'Warning',

    // Familink Action :
    actionError400Message: 'Login or password error',
    actionError500Message: 'The server has encountered an error',
    actionErrorGetProfiles: 'Error while getting profiles',

    // contact page:
    contactTitleAlertMessage: 'Confirm delete',
    contactBodyAlertMessage1: 'Are you sure you want to delete ?',
    contactBodyAlertMessage2: 'from your contact list ?',
    contactYesAlertMessage: 'yes',
    contactNoAlertMessage: 'no',

    // Profile
    profileUser: 'User',
    profileLastName: 'Last name',
    profileFirstName: 'First name',
    profileEmail: 'Email',
    profileProfil: 'Profile',
    profileSave: 'Save',
    profileUpdateSuccess: 'Profile update success',
    profileError: 'Error while updating',
    profileGetError: 'Error while getting profile',
  },
  fr: {
    homescreenAnnuaire: 'Annuaire',
    homescreenHumeur: 'Humeur',
    homescreenConfig: 'Settings',
    homescreenProfil: 'Profil',
    homescreenQuitter: 'Se déconnecter',

    signIn_User: 'Utilisateur *',
    signIn_Pwd: 'Mot de passe *',
    signIn_PwdConfirm: 'Confirmer mot de passe *',
    signIn_LastName: 'Nom',
    signIn_FirstName: 'Prénom *',
    signIn_Email: 'Email',
    signIn_ErrorAccount: 'Erreur nom de compte déjà existant',
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
    forgottenPasswordPopInNotFoundMessage: 'Le numéro saisi ne correspond a aucun utilisateur',
    forgottenPasswordPopInNotFoundTitle: 'Avertissement',

    // Familink Action :
    actionErrorLogin: 'Erreur de login ou de mot de passe',
    actionError500Message: 'Une erreur est survenue coté serveur',
    actionErrorGetProfiles: 'Erreur lors de la récupération des profiles',
    actionErrorSignIn: 'Erreur lors de la création du compte',
    actionErrorUpdateUserProfile: 'Erreur lors de la modification',
    actionErrorGetUserProfile: 'Erreur lors de la récupération du profile',
    actionErrorContactList: 'Erreur lors de la récupération des contacts',
    actionErrorCreateContact: 'Erreur lors de la création du contact',
    actionErrorUpdateContact: 'Erreur lors de la modification du contact',
    actionErrorRemoveContact: 'Erreur lors de la suppression du contact',
    actionErrorForgotPwd: 'Erreur lors de la récupération du mot de passe',
    actionErrorForgotPwdNotExist: 'Le numéro saisi ne correspond a aucun utilisateur',

    // contact page:
    contactTitleAlertMessage: 'Confirmer la suppression',
    contactBodyAlertMessage1: 'Etes vous sûr de vouloir supprimer',
    contactBodyAlertMessage2: 'de votre liste de contacts?',
    contactYesAlertMessage: 'oui',
    contactNoAlertMessage: 'non',

    // Profile
    profileUser: 'Utilisateur',
    profileLastName: 'Nom',
    profileFirstName: 'Prénom',
    profileEmail: 'Email',
    profileProfil: 'Profile',
    profileSave: 'Sauvegarder',
    profileUpdateSuccess: 'Profil modifié avec succès',
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
  signIn_ErrorAccount: I18n.t('signIn_ErrorAccount'),
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
  actionErrorLogin: I18n.t('actionErrorLogin'),
  actionError500Message: I18n.t('actionError500Message'),
  actionErrorGetProfiles: I18n.t('actionErrorGetProfiles'),
  actionErrorSignIn: I18n.t('actionErrorSignIn'),
  actionErrorUpdateUserProfile: I18n.t('actionErrorUpdateUserProfile'),
  actionErrorGetUserProfile: I18n.t('actionErrorGetUserProfile'),
  actionErrorContactList: I18n.t('actionErrorContactList'),
  actionErrorCreateContact: I18n.t('actionErrorCreateContact'),
  actionErrorUpdateContact: I18n.t('actionErrorUpdateContact'),
  actionErrorRemoveContact: I18n.t('actionErrorRemoveContact'),
  actionErrorForgotPwd: I18n.t('actionErrorForgotPwd'),
  actionErrorForgotPwdNotExist: I18n.t('actionErrorForgotPwdNotExist'),

  // page contact :
  contactTitleAlertMessage: I18n.t('contactTitleAlertMessage'),
  contactBodyAlertMessage1: I18n.t('contactBodyAlertMessage1'),
  contactBodyAlertMessage2: I18n.t('contactBodyAlertMessage2'),
  contactYesAlertMessage: I18n.t('contactYesAlertMessage'),
  contactNoAlertMessage: I18n.t('contactNoAlertMessage'),
  contactDeleteSuccess: I18n.t('contactDeleteSuccess'),

  // Profile
  profileUser: I18n.t('profileUser'),
  profileLastName: I18n.t('profileLastName'),
  profileFirstName: I18n.t('profileFirstName'),
  profileEmail: I18n.t('profileEmail'),
  profileProfil: I18n.t('profileProfil'),
  profileSave: I18n.t('profileSave'),
  profileUpdateSuccess: I18n.t('profileUpdateSuccess'),
};

/**
 * Usage :
 * import AppString from './strings';
 * {AppString.translatableText}
 */
export default AppString;
