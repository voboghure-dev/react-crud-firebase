import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6nIO6RzjdBZmpvbLSyxYUest4qYy4vEA",
  authDomain: "react-crud-9a036.firebaseapp.com",
  databaseURL: "https://react-crud-9a036-default-rtdb.firebaseio.com",
  projectId: "react-crud-9a036",
  storageBucket: "react-crud-9a036.appspot.com",
  messagingSenderId: "102444288803",
  appId: "1:102444288803:web:6e365c454597c7e7ed9a96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

var database = app.database();

export default database;