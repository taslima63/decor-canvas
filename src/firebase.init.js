// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDNcFDmQYYvpExCapPGm_Ay77QHe_Vgfoc",
    authDomain: "independent-service-prov-c6d7c.firebaseapp.com",
    projectId: "independent-service-prov-c6d7c",
    storageBucket: "independent-service-prov-c6d7c.appspot.com",
    messagingSenderId: "967806043540",
    appId: "1:967806043540:web:5fedf5b9641b8674923b81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;