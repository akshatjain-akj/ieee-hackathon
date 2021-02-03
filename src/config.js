import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDx-p7OstgKeu-FTXnBjul9-Z877HcSRxo",
    authDomain: "ieee-hackathon-749a8.firebaseapp.com",
    projectId: "ieee-hackathon-749a8",
    storageBucket: "ieee-hackathon-749a8.appspot.com",
    messagingSenderId: "1062690144662",
    appId: "1:1062690144662:web:0225cc47d1d16943149db7",
    measurementId: "G-0VLZHN9K4V"
});

export default firebaseConfig;