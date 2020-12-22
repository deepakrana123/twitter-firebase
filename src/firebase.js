
import firebase from 'firebase';


	
	// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDqc4kAAdj-g3q_wiY76j0bfeYLZ-IJ8iI",
	authDomain: "instagramclone-405ec.firebaseapp.com",
	databaseURL:"https://instagramclone-405ec.appspot.com",
	projectId: "instagramclone-405ec",
	storageBucket: "instagramclone-405ec.appspot.com",
	messagingSenderId: "8709936102",
	appId: "1:8709936102:web:f90babfeec7a118b657c27",
	measurementId: "G-X87N87YZV0"
  };
  

const firebaseApp=firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();
const auth=firebase.auth();
const storage=firebase.storage();

export {db,auth,storage};




