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
      const pdiv = document.createElement("article")
      const h2 = document.createElement("h2")
      const p = document.createElement("p")
      const button = document.createElement("button")
      
      button.setAttribute("type", "button")
      button.setAttribute("name", "ce")
      button.setAttribute("class", "add2")

      button.innerText=`Pick`
      // const label = document.createElement("label")
      const img = document.createElement("img")
      img.setAttribute("src", `data:image/jpeg;base64,${doc.data().picture}`)
      
      h2.innerHTML = `${doc.data().name}`
      p.innerHTML = `${doc.data().description}`
      // label.innerHTML = `pick`

      console.log(pdiv)
      pdiv.appendChild(img)
      pdiv.appendChild(h2)
      pdiv.appendChild(p)
      pdiv.appendChild(button)
      // pdiv.appendChild(label)


      exps.appendChild(pdiv)




      const nextBtn = document.querySelectorAll("button")
nextBtn[0].addEventListener ('click', () => {
  // if ( temp1.checkValidity() != true)
  // {
  //     return;
  // }

  console.log("clicked add");  

  // driver_list.style.visibility = "visible"
  sessionStorage.setItem('experienceSelected', "Cooking Show");

  window.location.href = `/public/templates/customer/select-driver.html`

});


  });
});
}