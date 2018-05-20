import * as firebase from 'firebase';

const prodConfig = {
  apiKey: "AIzaSyAgW7phzqEX8uHS3ZaGtZs3P4j3Fbmf-ic",
  authDomain: "test-e0c36.firebaseapp.com",
  databaseURL: "https://test-e0c36.firebaseio.com",
  projectId: "test-e0c36",
  storageBucket: "",
  messagingSenderId: "230099250129"
};

const devConfig = {
  apiKey: "AIzaSyAgW7phzqEX8uHS3ZaGtZs3P4j3Fbmf-ic",
  authDomain: "test-e0c36.firebaseapp.com",
  databaseURL: "https://test-e0c36.firebaseio.com",
  projectId: "test-e0c36",
  storageBucket: "",
  messagingSenderId: "230099250129"
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
