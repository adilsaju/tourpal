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
// const auth = firebaseApp.auth();

// var abc=123
add2.addEventListener ('click', () => {
  // if ( temp1.checkValidity() != true)
  // {
  //     return;
  // }

  console.log("clicked add");  

  // driver_list.style.visibility = "visible"
  sessionStorage.setItem('experienceSelected', "Cooking Show");

  window.location.href = `/public/templates/customer/select-driver.html`

});

window.onload = function() {
  console.log("hw")
//   const readData = () => {
//     db.collection('experience')
//     .get()
//     .then((data) => {
//         console.log(data.docs.map((item) => {
//             let a =  {...item.data(), id: item.id}
//             // console.log(a[0])
//             return a
//         }))

//     })
// }
// readData()
const exps = document.querySelector("#exps")

db.collection("experience").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      const pdiv = document.createElement("div")
      const h3 = document.createElement("h3")
      const p = document.createElement("p")
      const input = document.createElement("input")
      
      input.setAttribute("type", "radio")
      input.setAttribute("name", "ce")
      // input.setAttribute("value", "radio")
      const label = document.createElement("label")
      const img = document.createElement("img")
      img.setAttribute("src", `data:image/jpeg;base64,${doc.data().picture}`)
      
      h3.innerHTML = `${doc.data().name}`
      p.innerHTML = `${doc.data().description}`
      label.innerHTML = `pick`

      console.log(pdiv)
      pdiv.appendChild(h3)
      pdiv.appendChild(p)
      pdiv.appendChild(input)
      pdiv.appendChild(label)
      pdiv.appendChild(img)


      exps.appendChild(pdiv)


  });
});
}