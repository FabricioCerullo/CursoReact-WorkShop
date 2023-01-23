import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyx-9mk0qoEDJJJgTtpi8GGL9wnzDpce8",
  authDomain: "tienda-de-comidas---react-js.firebaseapp.com",
  projectId: "tienda-de-comidas---react-js",
  storageBucket: "tienda-de-comidas---react-js.appspot.com",
  messagingSenderId: "700552747453",
  appId: "1:700552747453:web:048e08949b21c3732fdad4"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

