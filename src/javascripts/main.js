import firebase from 'firebase/app';
import 'bootstrap';
import '../styles/main.scss';
import auth from './components/auth/auth';
import birf from './components/birfday/birfday';
import apiKeys from './helpers/apiKeys.json';


const init = () => {
  console.error('keys', apiKeys.firebaseKeys);
  firebase.initializeApp(apiKeys.firebaseKeys);
  auth.authDomStringBuilder();
  birf.birfDomStringBuilder();
};

init();
