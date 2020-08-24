import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBCeceCQeKPsJppuCGWmsUawkpxdzlSMLc",
    authDomain: "ez-chat-d7a7e.firebaseapp.com",
    databaseURL: "https://ez-chat-d7a7e.firebaseio.com",
    projectId: "ez-chat-d7a7e",
    storageBucket: "ez-chat-d7a7e.appspot.com",
    messagingSenderId: "221818057962",
    appId: "1:221818057962:web:b328f726a5a731daefd393",
    measurementId: "G-XGPJ0E8JD7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider };
export default db;