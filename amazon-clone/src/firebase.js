// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAzCm3SuPAWFxOg3pNiYnIu2mGB-B4Zkig",
    authDomain: "clone-ba6c7.firebaseapp.com",
    projectId: "clone-ba6c7",
    storageBucket: "clone-ba6c7.appspot.com",
    messagingSenderId: "404830088284",
    appId: "1:404830088284:web:442f92e2ee4b52bdbc4a99",
    measurementId: "G-PC4WMEWSCR",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };