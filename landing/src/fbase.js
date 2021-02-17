import firebase from "firebase/app";
import "firebase/firestore";


  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyB0x6Ft1iEFIMeZAhkimMaw6P7ekngOIvk",
    authDomain: "chips-170c7.firebaseapp.com",
    projectId: "chips-170c7",
    storageBucket: "chips-170c7.appspot.com",
    messagingSenderId: "40178406138",
    appId: "1:40178406138:web:4463d93acb9836a5bdaf43",
    measurementId: "G-0DL5L1ZG6M"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

  const firestore = new firebase.firestore();

export { firestore };
