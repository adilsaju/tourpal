const firebaseApp = firebase.initializeApp({
    //Your own Firebase Credentials..
    apiKey: "AIzaSyBT-dRzb2pbR9exsiiIJtoILkf5ck3X0pg",
    authDomain: "tourpal-e680e.firebaseapp.com",
    databaseURL: "https://tourpal-e680e-default-rtdb.firebaseio.com",
    projectId: "tourpal-e680e",
    storageBucket: "tourpal-e680e.appspot.com",
    messagingSenderId: "648603206107",
    appId: "1:648603206107:web:c425541113bc713a2be7fe",
    measurementId: "G-G9LL7MBNG0"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

signup.addEventListener ('click', () => {

    console.log("clicked singup");  
    // console.log(email.value, password.value)

    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    auth.createUserWithEmailAndPassword(email, password)
    .then((res) => {
        console.log(res.user)
        alert("User successfully created")
    })
    .catch((err) => {
        alert(err.message)
        console.log(err.code)
        console.log(err.message)
    })
  });

  window.onload = function() {
    is_logged_in = sessionStorage.getItem('is_logged_in');
    
  if (is_logged_in === "true") {
    //redirect
    console.log("user already logged in")
    window.location.href = `/public/templates/customer/index.html`
  }
}