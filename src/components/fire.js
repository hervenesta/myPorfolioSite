import firebase from 'firebase';

var firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "myportfoliosite-88f56.firebaseapp.com",
    databaseURL: "https://myportfoliosite-88f56.firebaseio.com",
    projectId: "myportfoliosite-88f56",
    storageBucket: "myportfoliosite-88f56.appspot.com",
    messagingSenderId: "558731413217",
    appId: "1:558731413217:web:9f1d059c17a95f686519a0",
    measurementId: "G-V426CGM82T"
  };

let fire = firebase.initializeApp(firebaseConfig);

export default fire;