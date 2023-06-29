import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCjekvKMtv7fZf7C4N3Zl0SO9MxQj11lTY",
  authDomain: "investmate-b8a3b.firebaseapp.com",
  projectId: "investmate-b8a3b",
  storageBucket: "investmate-b8a3b.appspot.com",
  messagingSenderId: "776470446828",
  appId: "1:776470446828:web:59f7676f0d8de4ec39dbc9",
};

const firebaseInit = initializeApp(firebaseConfig);

export default firebaseInit;
