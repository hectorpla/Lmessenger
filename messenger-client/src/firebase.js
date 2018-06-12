import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDJntUPw_kEEXckFaxFGvfgfRGE06POfnk",
    authDomain: "my-messenger-bff9d.firebaseapp.com",
    databaseURL: "https://my-messenger-bff9d.firebaseio.com",
    projectId: "my-messenger-bff9d",
    storageBucket: "my-messenger-bff9d.appspot.com",
    messagingSenderId: "940703013395"
  };
firebase.initializeApp(config);

export default firebase;