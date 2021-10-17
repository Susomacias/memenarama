import firebase from "firebase/compat/app"
import "firebase/compat/storage"
import "firebase/compat/firestore"


export const app= firebase.initializeApp({
    "projectId": "memenarama",
    "appId": "1:78358573970:web:f8b27c7f6727b7fdf1474b",
    "storageBucket": "memenarama.appspot.com",
    "locationId": "europe-west",
    "apiKey": "AIzaSyBTukVLGb2Wwxd_1S2RoNk5AfRNYkhl_AE",
    "authDomain": "memenarama.firebaseapp.com",
    "messagingSenderId": "78358573970",
    "measurementId": "G-ZV4EPH1FQY"
  });