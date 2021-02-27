const API_KEY = process.env.FIREBASE_API_KEY;

const secrets = () => {

  const firebaseConfig = {
    apiKey: "AIzaSyCQHOmeuT8y_x2QYhU96SAagHDDUAPuzT0",
    authDomain: "mydemo-7570.firebaseapp.com",
    databaseURL: "https://mydemo-7570.firebaseio.com",
    projectId: "mydemo-7570",
    storageBucket: "mydemo-7570.appspot.com",
    messagingSenderId: "396911617749"
  };
  const cloudApi = "";

  return {
    cloudApi,
    firebaseConfig
  };
};

const { firebaseConfig, cloudApi } = secrets();
export { firebaseConfig, cloudApi };