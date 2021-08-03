import Rebase  from "re-base"
import firebase from "firebase/app"
import 'firebase/database'


const fireBaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBxgAx_Sq_Dc1FNq6YrQ2cRyia101bB8z0",
    authDomain: "chatbox-app-e84a7.firebaseapp.com",
    databaseURL: "https://chatbox-app-e84a7-default-rtdb.europe-west1.firebasedatabase.app"
})

const base = Rebase.createClass( firebase.database() )

export { fireBaseApp }
export default base
