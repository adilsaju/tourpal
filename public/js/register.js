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
    const password2 = document.getElementById('confirmpassword').value
    const fullname = document.getElementById('fullname').value
    const phone = document.getElementById('phone').value
    const picture = document.getElementById('picture').value

    if (password !== password2){
      alert("passwords not same - error")
      return
    }

    auth.createUserWithEmailAndPassword(email, password)
    .then((res) => {
        console.log(res.user)
        //TODO pic
        console.log(picture)
        addToDb(email, password, fullname, phone, picture);
        onSuccessRegister(email, password, res);
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

function addToDb(email, password, fullname, phone, picture) {
  db.collection('customer')
  .add({
      email: email,
      password: password,
      name: fullname,
      phone_number: phone,
      picture: picture
  })
  .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
  })
  .catch((error) => {
      console.error("Error adding document: ", error);
  });
}

function onSuccessRegister(email, password, res) {
  console.log("on success")

  // alert(`Welcome ${email}`)
  alert("User successfully created")

  // window.location.href = `/public/templates/login.html`


}