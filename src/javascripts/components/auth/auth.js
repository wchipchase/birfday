import firebase from 'firebase/app';
import 'firebase/auth';

import util from '../../helpers/util';

import googleImage from './sign-in-with-google.png';

const signMeIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const authStringBuilder = () => {
  let domString = '<button id="google-auth" class="btn btn-danger">';
  domString += `<img src=${googleImage} />`;
  domString += '</button>';
  util.printToDom('auth', domString);
  document.getElementById('google-auth').addEventListener('click', signMeIn);
};

export default { authStringBuilder };
