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

add3.addEventListener ('click', () => {
    // if ( temp1.checkValidity() != true)
    // {
    //     return;
    // }
  
    console.log("clicked add");  
  
    // src.style.visibility = "visible"
    sessionStorage.setItem("driverSelected","Jordan Marlin");


    window.location.href = `/public/templates/customer/select-pickup.html`

  });
  

  window.onload = function() {
  const selected_info = document.querySelector("#selected_info")
  const driver_list = document.querySelector("#driver_list")
  const selection = document.querySelector("#selection")

  selected_info.innerHTML = `
  <ul>
  <li>${sessionStorage.getItem('city')}</li>
  <li>${sessionStorage.getItem('departDateTime')}</li>
  <li>${sessionStorage.getItem('finishDateTime')}</li>
  <li>${sessionStorage.getItem('noOfPeople')}</li>
  <li>${sessionStorage.getItem('experienceSelected')}</li>
  
  </ul>
  `
  

  db.collection("driver").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        const pdiv = document.createElement("div")
        const input = document.createElement("input")
        
        input.setAttribute("type", "radio")
        input.setAttribute("name", "ce")
        const label = document.createElement("label")
        // const img = document.createElement("img")
        // img.setAttribute("src", `data:image/jpeg;base64,${doc.data().picture}`)
        
        label.innerHTML = `${doc.data().name}`
  
        console.log(pdiv)
        pdiv.appendChild(input)
        pdiv.appendChild(label)
        // pdiv.appendChild(img)
  
  
        driver_list.insertBefore(pdiv, selection)
  
  
    });
  });
  }