import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
	apiKey: "AIzaSyBUkRho5EitWN3qY2C0fAEr9mBnbYYWI9w",
	authDomain: "erider-221f8.firebaseapp.com",
	projectId: "erider-221f8",
	storageBucket: "erider-221f8.appspot.com",
	messagingSenderId: "126412828355",
	appId: "1:126412828355:web:38fdb732bfee846498fc76"
      };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
