import * as firebase from "firebase"

import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyC7uEgGMKAzKtBEzJBbEc62hsKNzgffd1A",
  authDomain: "rn-chat-app-9c8e5.firebaseapp.com",
  projectId: "rn-chat-app-9c8e5",
  storageBucket: "rn-chat-app-9c8e5.appspot.com",
  messagingSenderId: "417266555274",
  appId: "1:417266555274:web:1c5e1ff02df73a854fd073"
}

let app

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app()
}

const db = app.firestore()
const auth = firebase.auth()

export { db, auth }
