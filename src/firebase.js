import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCqKi0N4fapTLqXMyJJ4SaK7Olp4wsKLSc",
    authDomain: "emsystem-2840f.firebaseapp.com",
    databaseURL: "https://emsystem-2840f-default-rtdb.firebaseio.com",
    projectId: "emsystem-2840f",
    storageBucket: "emsystem-2840f.appspot.com",
    messagingSenderId: "89711059427",
    appId: "1:89711059427:web:041b740d106b953d9c00d6"
}

firebase.initializeApp(firebaseConfig)

export default firebase