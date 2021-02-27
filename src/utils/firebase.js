// initialize the firebase app triggered from login.js / logout
// mostly called from where there is a form to interface with firebase db

let fb;

if (typeof window !== "undefined") {
  const firebase = require("firebase");
  require("firebase/auth")
  // require("firebase/firebase-firestore")
  require('firebase/storage');


  const { Component } = require("react");
  const { firebaseConfig } = require("./config");

  class Firebase extends Component {
    constructor(props) {
      super(props);
      if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
      }
      this.auth = firebase.auth();
      this.storage = firebase.storage();
      this.db = firebase.firestore();
      this.provider = new firebase.auth.GoogleAuthProvider()
      // this.storage = fb.storage().ref();
      this.state = {
        currentUser: firebase.auth().currentUser,
      };

    }
    // static async getInitalProps() {
    //   console.log("Getiinital props");
    //   this.auth = app.auth();
    //   this.db = app.firestore();

    // }

    // componentDidMount() {
    //   console.log("Component did mount");
    //   this.auth = app.auth();
    //   this.db = app.firestore();
    //   console.log(app.auth());
    //   console.log(app.firestore());
    // }

    login(email, password) {
      this.db.collection('')
      return this.auth.signInWithEmailAndPassword(email, password);
    }

    logout() {
      return this.auth.signOut();
    }

    isInitialized() {
      //console.log(this.auth.onAuthStateChanged(resolve))
      return new Promise(resolve => {
        this.auth.onAuthStateChanged(resolve);
      });
    }

    getCurrentUsername() {
      return this.auth.currentUser && this.auth.currentUser.displayName;
    }
  }
  fb = new Firebase();
  //export default new Firebase();

}

export default fb;


// const firebase = require("firebase");
// require("firebase/auth")
// // require("firebase/firebase-firestore")
// require('firebase/storage');


// const { Component } =  require("react");
// const { firebaseConfig } = require("./config");

// class Firebase extends Component {
// constructor(props) {
// super(props);
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }
// this.auth = firebase.auth();
// this.storage = firebase.storage();
// this.db = firebase.firestore();
// this.provider =  new firebase.auth.GoogleAuthProvider()
// // this.storage = fb.storage().ref();
// this.state = {
//   currentUser: firebase.auth().currentUser
// };
// }

// // static async getInitalProps() {
// //   console.log("Getiinital props");
// //   this.auth = app.auth();
// //   this.db = app.firestore();

// // }

// // componentDidMount() {
// //   console.log("Component did mount");
// //   this.auth = app.auth();
// //   this.db = app.firestore();
// //   console.log(app.auth());
// //   console.log(app.firestore());
// // }

// login(email, password) {
// return this.auth.signInWithEmailAndPassword(email, password);
// }

// logout() {
// return this.auth.signOut();
// }

// isInitialized() {
// //console.log(this.auth.onAuthStateChanged(resolve))
// return new Promise(resolve => {
//   this.auth.onAuthStateChanged(resolve);
// });
// }

// getCurrentUsername() {
// return this.auth.currentUser && this.auth.currentUser.displayName;
// }
// }

// export default new Firebase();