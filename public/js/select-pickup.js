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


add4.addEventListener ('click', () => {
    // if ( temp1.checkValidity() != true)
    // {
    //     return;
    // }
  
    console.log("final data: "); 
    console.log(fname2.name, fname2.value)
  
    // window.location.replace("http://127.0.0.1:5500/public/index.html");
    sessionStorage.setItem('customerPickupLocation', 'Burnaby' )

    //SAVE ALL SESSION DATA TO FIREBASE===
  saveData();


    // window.location.pathname = 'public/templates/customer/payment.html'
    // src.style.visibility = "visible"
  });


  const saveData = () => {
    let is_logged_in = sessionStorage.getItem('is_logged_in');
    let logged_in_password = sessionStorage.getItem('logged_in_password');
    let logged_in_email = sessionStorage.getItem('logged_in_email');
    let noOfPeople = sessionStorage.getItem('noOfPeople');
    let experienceSelected = sessionStorage.getItem('experienceSelected');
    let finishDateTime = sessionStorage.getItem('finishDateTime');
    let customerPickupLocation = sessionStorage.getItem('customerPickupLocation');
    let driverSelected = sessionStorage.getItem('driverSelected');
    let city = sessionStorage.getItem('city');
    let departDateTime = sessionStorage.getItem('departDateTime');
    let user_type = sessionStorage.getItem('user_type');


    db.collection('trip')
    .add({
        bookdate: new Date(),
        customer: logged_in_email,
        destination: city,
        driver: driverSelected,
        enddate: finishDateTime,
        experience_selected: experienceSelected,
        guest_count: parseInt(noOfPeople),
        is_cancelled: false,
        startdate: departDateTime
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    window.location.pathname = 'public/templates/customer/payment.html'

    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    window.location.pathname = 'public/templates/customer/payment.html'

    });
}