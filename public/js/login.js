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


signin.addEventListener ('click', () => {

    console.log("clicked signin");  
    // console.log(email.value, password.value)

    const email = document.getElementById('email1').value
    const password = document.getElementById('password1').value

    auth.signInWithEmailAndPassword(email, password)
    .then((res) => {


        onSuccessLogin(email, password, res);
    })
    .catch((err) => {
        alert(err.message)
        console.log(err.code)
        console.log(err.message)
    })
  });

function onSuccessLogin(email, password, res) {
    console.log("on success")

    console.log(res.user)
    // alert(`Welcome ${email}`)



    sessionStorage.setItem('is_logged_in', true);
    sessionStorage.setItem('logged_in_email', email);
    sessionStorage.setItem('logged_in_password', password);
    sessionStorage.setItem('user_type', "customer");

    window.location.href = `/public/templates/customer/index.html`


}

window.onload = function() {
    is_logged_in = sessionStorage.getItem('is_logged_in');
    
  if (is_logged_in === "true") {
    //redirect
    console.log("user already logged in")
    window.location.href = `/public/templates/customer/index.html`
  }
}