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
  
    // db.collection("trip").doc(`${sessionStorage.getItem("city")}`)


    const snapshot = db
    .collection('trip')
    .doc(`${sessionStorage.getItem("city")}`).get().then((doc)=>{
      // const data = doc.data();

        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        const pdiv = document.createElement("div")
        
        //TODO: destination undefined
        // const label = document.createElement("label")
        // label.innerHTML = `${doc.data().destination}`
        // <li>Destination: ${doc.data().destination}</li>

        const snapshot = db
        .collection('driver')
        .doc(sessionStorage.getItem("driverSelected")).get().then((querySnapshot)=>{
          const data = querySnapshot.data();
          console.log("========================")

          const snapshot2 = db
          .collection('experience')
          .doc(sessionStorage.getItem("experienceSelected")).get().then((querySnapshot)=>{
            const data2 = querySnapshot.data();
            console.log("========================")
            console.log(data2.name)
      
            pdiv.innerHTML = `
            <ul>
            <li>Cost: $${data2.cost}</li>
            <li>Pickup from: ${sessionStorage.getItem("customerLocation")}</li>
            <li>Destination City: ${sessionStorage.getItem("city")}</li>
            <li>Experience: ${data2.name}</li>
            <li>Depart Time: ${sessionStorage.getItem("departDateTime")}</li>
            <li>Driver: ${data.name}</li>
            </ul>
            `
          });



        });



        console.log(pdiv)
        // ===========conflict from mohit===============
// =======================================
  
confirmed_trip.appendChild(pdiv)



    });



    }