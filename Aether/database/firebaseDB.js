// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyC4--vUHL_pmcBnQ2cZ6MOI_4Nqo5T_kuE",
	authDomain: "aether-mobile.firebaseapp.com",
	projectId: "aether-mobile",
	storageBucket: "aether-mobile.appspot.com",
	messagingSenderId: "1014874844913",
	appId: "1:1014874844913:web:8e138209b0f051d6be8350",
	measurementId: "G-4S56QLR3V6",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebase;
