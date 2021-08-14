import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCDOC5dvyKngKD8x85HSeEIrxK6mtkhArs",
    authDomain: "ems2-4acc5.firebaseapp.com",
    databaseURL: "https://ems2-4acc5-default-rtdb.firebaseio.com",
    projectId: "ems2-4acc5",
    storageBucket: "ems2-4acc5.appspot.com",
    messagingSenderId: "875665412951",
    appId: "1:875665412951:web:d1acd6be9cb2e9adde6412"
}

firebase.initializeApp(firebaseConfig)

export default firebase