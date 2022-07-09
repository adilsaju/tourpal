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



function pick_fn(e) {
    // if ( temp1.checkValidity() != true)
  // {
  //     return;
  // }

  console.log("clicked add");
  // src.style.visibility = "visible"
  // sessionStorage.setItem("driverSelected", "Jordan Marlin");
  sessionStorage.setItem('driverSelected', e.target.parentElement.id);

  window.location.href = `/public/templates/customer/select-pickup.html`
}


window.addEventListener("load", yourfunction, false);

function yourfunction() {
  const urlParams = new URLSearchParams(window.location.search);
  const exp_id = urlParams.get('exp_id');
  console.log("============")
  console.log(exp_id)



  const selected_info = document.querySelector("#selected_info")
  const driver_list = document.querySelector("#driver_list")
  const selection = document.querySelector("#selection")

  selected_info.innerHTML = `
  <ul>
  <li  class="location-experiences" >${sessionStorage.getItem('city')}</li>
  <li>${sessionStorage.getItem('departDateTime')}</li>
  <li>${sessionStorage.getItem('finishDateTime')}</li>
  <li>${sessionStorage.getItem('noOfPeople')}</li>
  <li>${sessionStorage.getItem('experienceSelected')}</li>
  <li><a href="#"><i class="fas fa-pen"></i></a></li>

  
  </ul>
  `

  const categoryDocRef = db
    .collection('experience')
    .doc(exp_id);
  console.log(categoryDocRef)

  db.collection("driver").where('experiences_covered', 'array-contains', categoryDocRef).get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {







      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      const pdiv = document.createElement("div")
      pdiv.setAttribute("id", doc.id )
      // const input = document.createElement("input")
      const button = document.createElement("button")
      button.setAttribute("type", "button")
      button.setAttribute("name", "ce")
      button.setAttribute("class", "add2")
      button.onclick=pick_fn
      button.innerText=`Pick`

      // input.setAttribute("type", "radio")
      // input.setAttribute("name", "ce")
      const label = document.createElement("label")
      // const img = document.createElement("img")
      // img.setAttribute("src", `data:image/jpeg;base64,${doc.data().picture}`)

      label.innerHTML = `${doc.data().name}`

      console.log(pdiv)
      // pdiv.appendChild(input)
      pdiv.appendChild(label)
      pdiv.appendChild(button)

      // pdiv.appendChild(img)


      driver_list.insertBefore(pdiv, selection)


    });
  });
}