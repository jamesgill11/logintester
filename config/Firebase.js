import firebase from "firebase";
import {
  API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  PROJECT_ID,
  MESSAGE_SENDER_ID,
  APP_ID,
} from "react-native-dotenv";

// const firebaseConfig = {
//   apiKey: "AIzaSyAfyvOon68vUfa5qMZoMhRt-yuPZxwLqr8",
//   authDomain: "my-awesome-project-42e39.firebaseapp.com",
//   databaseURL: "https://my-awesome-project-42e39.firebaseio.com",
//   projectId: "my-awesome-project-42e39",
//   storageBucket: "my-awesome-project-42e39.appspot.com",
//   messagingSenderId: "1046433424488",
//   appId: "1:1046433424488:web:54eaea0514a08a09e947dd",
// };
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket: "",
  messagingSenderId: MESSAGE_SENDER_ID,
  appId: APP_ID,
};

// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;
