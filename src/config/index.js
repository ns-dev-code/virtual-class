const API_KEY = process.env.FIREBASE_API_KEY;

const secrets = () => {
  if (process.env.NODE_ENV !== "production") {
    const firebaseConfig = {
      apiKey: "AIzaSyCQHOmeuT8y_x2QYhU96SAagHDDUAPuzT0",
      authDomain: "mydemo-7570.firebaseapp.com",
      databaseURL: "https://mydemo-7570.firebaseio.com",
      projectId: "mydemo-7570",
      storageBucket: "mydemo-7570.appspot.com",
      messagingSenderId: "396911617749"
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
      apiKey: "AIzaSyCQHOmeuT8y_x2QYhU96SAagHDDUAPuzT0",
      authDomain: "mydemo-7570.firebaseapp.com",
      databaseURL: "https://mydemo-7570.firebaseio.com",
      projectId: "mydemo-7570",
      storageBucket: "mydemo-7570.appspot.com",
      messagingSenderId: "396911617749"
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