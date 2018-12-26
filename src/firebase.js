import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'

const config = {
  apiKey: "AIzaSyCTo2mc6htDyfwh2PclyFVffK9BtSKOL14",
  authDomain: "chelsea-1c207.firebaseapp.com",
  databaseURL: "https://chelsea-1c207.firebaseio.com",
  projectId: "chelsea-1c207",
  storageBucket: "chelsea-1c207.appspot.com",
  messagingSenderId: "1069231485037"
}

firebase.initializeApp(config)

const firebaseDB = firebase.database()
const firebaseMatches = firebaseDB.ref('matches')
const firebasePromotions = firebaseDB.ref('promotions')

export {
  firebase,
  firebaseMatches,
  firebasePromotions
}