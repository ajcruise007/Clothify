import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';



  var firebaseConfig = {
    apiKey: "AIzaSyCZCoqWckkUvckGHdySfJZhnevukgySuLU",
    authDomain: "clothify-db.firebaseapp.com",
    projectId: "clothify-db",
    storageBucket: "clothify-db.appspot.com",
    messagingSenderId: "579439780290",
    appId: "1:579439780290:web:ab1a1da257e447394a365b",
    measurementId: "G-BHY2PYFTCH"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
      if(!userAuth)return;

      const userRef = firestore.doc(`users/${userAuth.uid}`);
      const snapShot = await userRef.get();
      // console.log(snapShot); 
      // console.log(userRef);
      // console.log(userAuth); 
      const{displayName , email, uid} = userAuth;
      const createdAt = new Date();
      if(!snapShot.exists){
        try {
          await userRef.set(
            {displayName, 
            email, 
            createdAt, 
            ...additionalData
            }
          )
        } catch (error) {
          console.log('user not created', error.message);
        }
      }
      return userRef;
  }

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;