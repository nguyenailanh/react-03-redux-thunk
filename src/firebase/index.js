import firebase from 'firebase'

export const config = {
  apiKey: "AIzaSyCoczRC_7RLaQrzcVQxoPxfSfbdubETPNU",
  authDomain: "test-8f21d.firebaseapp.com",
  databaseURL: "https://test-8f21d.firebaseio.com",
  projectId: "test-8f21d",
  storageBucket: "test-8f21d.appspot.com",
  messagingSenderId: "771365223682"
}

firebase.initializeApp(config)

export const db = firebase.database()

const firebaseRef = firebase.database().ref()

export const todosRef = firebaseRef.child('todoList')