import firebase from 'firebase'
const firebaseConfig = {
  apiKey: 'AIzaSyBxMOljSvjl5T637UDBRvN-0h1W6nsmvo0',
  authDomain: 'linkedindemo-fef70.firebaseapp.com',
  projectId: 'linkedindemo-fef70',
  storageBucket: 'linkedindemo-fef70.appspot.com',
  messagingSenderId: '823982884891',
  appId: '1:823982884891:web:10f2bed87c1b88c038d0be',
}

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)
const db = app.firestore()
const aithh = firebase.auth()

export { db, aithh }
