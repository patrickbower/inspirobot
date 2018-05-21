import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyAh51aunc6U8O4uaLvTNIT3jE3BlfOH1HI",
    authDomain: "inspirobot-f7594.firebaseapp.com",
    databaseURL: "https://inspirobot-f7594.firebaseio.com",
    projectId: "inspirobot-f7594",
    storageBucket: "inspirobot-f7594.appspot.com",
    messagingSenderId: "524808413008"
};
var fire = firebase.initializeApp(config);
export default fire;