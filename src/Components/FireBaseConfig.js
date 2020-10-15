import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyCzmsU5W8QD3XLbLRbPqI2cvsYSbkiU_dw",
    authDomain: "messenger-1507b.firebaseapp.com",
    databaseURL: "https://messenger-1507b.firebaseio.com",
    projectId: "messenger-1507b",
    storageBucket: "messenger-1507b.appspot.com",
    messagingSenderId: "773335158067",
    appId: "1:773335158067:web:6c941ed0541518a97f0246",
    measurementId: "G-S5F7Y3FPKJ"
};

firebase.initializeApp(config);

export default firebase;