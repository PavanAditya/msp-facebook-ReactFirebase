import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/messaging';
import 'firebase/functions';

// ! Firebase config credentials
const firebaseConfig = {
    apiKey: 'AIzaSyDgslr4oRnfk05wYozxJauLhSmUq_R-P5E',
    authDomain: 'msp-facebook.firebaseapp.com',
    databaseURL: 'https://msp-facebook.firebaseio.com',
    projectId: 'msp-facebook',
    storageBucket: 'msp-facebook.appspot.com',
    messagingSenderId: '986185232615',
    appId: '1:986185232615:web:8b5531806c400fe141f242',
    measurementId: 'G-406HVPVHR9'
};
// ! Firebase config credentials

export const firebaseApp = firebase.initializeApp(firebaseConfig);

export const userRef = firebaseApp.database().ref('users');

export const postRef = firebaseApp.database().ref('posts');