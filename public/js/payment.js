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
  

    
  
    window.onload = function() {
    const confirmed_trip = document.querySelector("#confirmed_trip")
  
    
    // let city = sessionStorage.getItem("city")
    db.collection("trip").where("destination", "==", "North Vancouver").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          const pdiv = document.createElement("div")
          
          const label = document.createElement("label")
          label.innerHTML = `${doc.data().destination}`
          const label2 = document.createElement("label")
          label2.innerHTML = `${sessionStorage.getItem("customerPickupLocation")}`
          const label3 = document.createElement("label")
          label3.innerHTML = `${sessionStorage.getItem("departDateTime")}`
          const label4 = document.createElement("label")
          label4.innerHTML = `${sessionStorage.getItem("driverSelected")}`

          console.log(pdiv)
          pdiv.append("Destination")
          pdiv.appendChild(label)
          pdiv.append("Pickup from:")
          pdiv.appendChild(label2)
          pdiv.append("Time:")
          pdiv.appendChild(label3)
          pdiv.append("Driver:")
          pdiv.appendChild(label4)

    
    
          confirmed_trip.appendChild(pdiv)
    
    
      });
    });
    }