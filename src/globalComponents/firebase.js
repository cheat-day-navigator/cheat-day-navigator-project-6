import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCKqCQ2bnxrqZ267e6kBbkitweRVisybKA",
    authDomain: "superfoods-navigator-project-6.firebaseapp.com",
    databaseURL: "https://superfoods-navigator-project-6.firebaseio.com",
    projectId: "superfoods-navigator-project-6",
    storageBucket: "superfoods-navigator-project-6.appspot.com",
    messagingSenderId: "72580584215",
    appId: "1:72580584215:web:f2caafd0f0ae81e1"
};

firebase.initializeApp(firebaseConfig);

export default firebase;