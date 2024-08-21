// Import the functions you need from the SDKs you need

const {initializeApp} = require("firebase/app")
const {getStorage} = require("firebase/storage")
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhBCg040VXI-57-hYIhWlkjFbuv_FWJX8",
  authDomain: "photogallery-44310.firebaseapp.com",
  projectId: "photogallery-44310",
  storageBucket: "photogallery-44310.appspot.com",
  messagingSenderId: "873008941368",
  appId: "1:873008941368:web:9ac308ea7a979188ff99cd",
  measurementId: "G-CL7TJ03SXN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
module.exports = {storage};

