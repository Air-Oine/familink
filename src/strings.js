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

    addContactSave: 'Enregistrer',
    addContactLastName: 'Nom *',
    addContactFirstName: 'Prénom',
    addContactGravatar: 'Gravatar URL',
    addContactPhone: 'Tél. *',
    addContactEmail: 'Mail',
    addContactToastSuccess: 'Contact ajouté avec succès',

    loginPageName: 'Connexion',
    homePageName: 'Accueil',
    signInPageName: 'S\'identifier',
    forgottenPasswordPageName: 'Mot de passe oublié',
    contactPageName: 'Contact',
    contactListPageName: 'Contacts',
    profilePageName: 'Profil',
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
};

/**
 * Usage :
 * import AppString from './strings';
 * {AppString.translatableText}
 */
export default AppString;
