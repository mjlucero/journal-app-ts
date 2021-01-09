import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyD2Edif7-toqFDAvkaAnZQ9rNeEEF6-8C4',
	authDomain: 'journal-app-8d509.firebaseapp.com',
	projectId: 'journal-app-8d509',
	storageBucket: 'journal-app-8d509.appspot.com',
	messagingSenderId: '55424411638',
	appId: '1:55424411638:web:5e0c2b2466ab778346c9d7'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
