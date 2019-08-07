// const API_KEY = process.env.FIREBASE_API_KEY;

// const secrets = () => {
//   console.log(process.env.NODE_ENV);
//   if (process.env.NODE_ENV != "production") {
//     const firebaseConfig = {
//       apiKey: "AIzaSyAqRfBoxxaBhSwQgunBSrNoACD5RkN6R44",
//       authDomain: "talentexcel-1.firebaseapp.com",
//       databaseURL: "https://talentexcel-1.firebaseio.com",
//       projectId: "talentexcel-1",
//       storageBucket: "talentexcel-1.appspot.com",
//       messagingSenderId: "325296394900"
//     };
//     // http://localhost:5002
//     // https://us-central1-talentexcel-1.cloudfunctions.net/api
//     const cloudApi = "https://us-central1-talentexcel-1.cloudfunctions.net/api";

//     return {
//       cloudApi,
//       firebaseConfig
//     };
//   } else {
//     const firebaseConfig = {
//       apiKey: "AIzaSyB_90sEmUgpCw8Me_JtmWZBtfgzBKOIUSg",
//       authDomain: "orgz-app.firebaseapp.com",
//       databaseURL: "https://orgz-app.firebaseio.com",
//       projectId: "orgz-app",
//       storageBucket: "orgz-app.appspot.com",
//       messagingSenderId: "780831215535",
//       appId: "1:780831215535:web:41b8ee2bce961886"
//     };

//     const cloudApi = "https://us-central1-orgz-app.cloudfunctions.net/api";

//     return {
//       firebaseConfig,
//       cloudApi
//     };
//   }
// };

// const { firebaseConfig, cloudApi } = secrets();
// export { firebaseConfig, cloudApi };


const API_KEY = process.env.FIREBASE_API_KEY;

const secrets = () => {
  console.log(process.env.NODE_ENV);
  if (process.env.NODE_ENV !== "production") {
    const firebaseConfig = {
      apiKey: "AIzaSyAqRfBoxxaBhSwQgunBSrNoACD5RkN6R44",
      authDomain: "talentexcel-1.firebaseapp.com",
      databaseURL: "https://talentexcel-1.firebaseio.com",
      projectId: "talentexcel-1",
      storageBucket: "talentexcel-1.appspot.com",
      messagingSenderId: "325296394900"
    };
    // http://localhost:5002
    // https://us-central1-talentexcel-1.cloudfunctions.net/api
    const cloudApi = "http://localhost:8080";

    return {
      cloudApi,
      firebaseConfig
    };
  } else {
    
    const firebaseConfig = {
      apiKey: "AIzaSyB_90sEmUgpCw8Me_JtmWZBtfgzBKOIUSg",
      authDomain: "orgz-app.firebaseapp.com",
      databaseURL: "https://orgz-app.firebaseio.com",
      projectId: "orgz-app",
      storageBucket: "orgz-app.appspot.com",
      messagingSenderId: "780831215535",
      appId: "1:780831215535:web:41b8ee2bce961886"
    };
    // http://localhost:5002
    // https://us-central1-talentexcel-1.cloudfunctions.net/api
    //const cloudApi = "https://us-central1-orgz-app.cloudfunctions.net/api";
    const cloudApi = "https://us-central1-orgz-app.cloudfunctions.net/api";

    return {
      firebaseConfig,
      cloudApi
    };
  }
};

const { firebaseConfig, cloudApi } = secrets();
export { firebaseConfig, cloudApi };