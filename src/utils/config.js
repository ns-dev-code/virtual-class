const API_KEY = process.env.FIREBASE_API_KEY;

const secrets = () => {
  console.log(process.env.NODE_ENV);
  if (process.env.NODE_ENV != "production") {
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
    const cloudApi = "https://us-central1-talentexcel-1.cloudfunctions.net/api";

    return {
      cloudApi,
      firebaseConfig
    };
  } else {
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
    const cloudApi = "https://us-central1-talentexcel-1.cloudfunctions.net/api";
    
    return {
      firebaseConfig,
      cloudApi
    };
  }
};

const { firebaseConfig, cloudApi } = secrets();
export { firebaseConfig, cloudApi };