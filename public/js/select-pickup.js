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


add4.addEventListener('click', () => {
  // if ( temp1.checkValidity() != true)
  // {
  //     return;
  // }

  console.log("final data: ");
  // console.log(fname2.name, fname2.value)

  // window.location.replace("http://127.0.0.1:5500/public/index.html");
  // sessionStorage.setItem('customerPickupLocation', 'Burnaby' )
  sessionStorage.setItem('customerLat', lat.value)
  sessionStorage.setItem('customerLng', lng.value)

  //SAVE ALL SESSION DATA TO FIREBASE===
  saveData();


  // window.location.pathname = 'public/templates/customer/payment.html'
  // src.style.visibility = "visible"
});


const saveData = () => {
  let is_logged_in = sessionStorage.getItem('is_logged_in');
  let logged_in_password = sessionStorage.getItem('logged_in_password');
  let logged_in_uid = sessionStorage.getItem('logged_in_uid');
  let noOfPeople = sessionStorage.getItem('noOfPeople');
  let experienceSelected = sessionStorage.getItem('experienceSelected');
  let finishDateTime = sessionStorage.getItem('finishDateTime');
  // let customerPickupLocation = sessionStorage.getItem('customerPickupLocation');
  let customerLat = sessionStorage.getItem('customerLat');
  let customerLng = sessionStorage.getItem('customerLng');

  let driverSelected = sessionStorage.getItem('driverSelected');
  let city = sessionStorage.getItem('city');
  let departDateTime = sessionStorage.getItem('departDateTime');
  let user_type = sessionStorage.getItem('user_type');


  const driverRef = db
    .collection('driver')
    .doc(driverSelected);
  console.log("==========================")
  console.log(driverRef)
  
  const customerRef = db
  .collection('customer')
  .doc(logged_in_uid);
console.log(customerRef)

const expRef = db
.collection('experience')
.doc(experienceSelected);
console.log(expRef)



  db.collection('trip')
    .add({
      bookdate: new Date(),
      customer: customerRef,
      destination: city,
      driver: driverRef,
      enddate: new Date(finishDateTime),
      experience_selected: expRef,
      guest_count: parseInt(noOfPeople),
      is_cancelled: false,
      startdate: new Date(departDateTime)
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
      //trip id save to local
      sessionStorage.setItem("trip_id" , docRef.id)


      console.log(db.collection('trip').doc(logged_in_uid))

      db.collection('customer').doc(logged_in_uid)
        .update({
          //or set
          //TODO: add coord to trips table also
          current_location: new firebase.firestore.GeoPoint(parseFloat(customerLat), parseFloat(customerLng))
        })
        .then((docRef) => {
          // console.log("Document written with ID: ", docRef.id);
          window.location.pathname = 'public/templates/customer/payment.html'
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
          alert("error")
        });
        
      }).catch((error) => {
        console.error("Error adding document: ", error);
    })

}


const x = document.querySelector("#error_box")

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  document.getElementById('lat').value = position.coords.latitude
  document.getElementById('lng').value = position.coords.longitude;
}

function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = "User denied the request for Geolocation."
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "Location information is unavailable."
      break;
    case error.TIMEOUT:
      x.innerHTML = "The request to get user location timed out."
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = "An unknown error occurred."
      break;
  }
}

get_loc.onclick=getLocation