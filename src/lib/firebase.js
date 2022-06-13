import Firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDCAoqXZNoFkjz2AbgcW4wQocLxY1OAQ54",
  authDomain: "instagram-yt-4ded6.firebaseapp.com",
  projectId: "instagram-yt-4ded6",
  storageBucket: "instagram-yt-4ded6.appspot.com",
  messagingSenderId: "560502821159",
  appId: "1:560502821159:web:d0e7431156648492865902",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
