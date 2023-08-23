// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5m0lZis1-LeqnHTyEoX9mBjwWJnzXs9c",
  authDomain: "contest-453cc.firebaseapp.com",
  projectId: "contest-453cc",
  storageBucket: "contest-453cc.appspot.com",
  messagingSenderId: "1005590966876",
  appId: "1:1005590966876:web:491580949f594bcae56c99",
  measurementId: "G-5H6K7YFQBN"
};
/*const firebaseApp = firebase.initializeApp(firebaseConfig);*/
//Initialize firebase
const app = initializeApp(firebaseConfig);

//Initialize Firebase Authentication and get a reference to the service
export const auth=getAuth(app);

/*export const db=firebaseApp.firestore();*/
/*const auth = firebase.auth();*/

