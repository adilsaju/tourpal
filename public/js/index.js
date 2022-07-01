window.onload = function() {
  
  
  
  // console.log("it worked")
  let is_logged_in = "false"
  try {
    is_logged_in = sessionStorage.getItem('is_logged_in');
    
  } catch (error) {
    is_logged_in = "false"
  }
  if (is_logged_in === "true") {
    console.log("user already logged in. no problem")
    let useremail = sessionStorage.getItem("logged_in_email")
    console.log(useremail)
    const logouta = document.querySelector("#logout")
    logouta.append(useremail)
  }
  else
  {
    //redirect
    let host = window.location.host
    console.log(host)
    window.location.href = `/public/templates/landing-page.html`
  }
}

add.addEventListener ('click', () => {
    // if ( temp1.checkValidity() != true)
    // {
    //     return;
    // }

    console.log("clicked add");  

    // cur_exp.style.visibility = "visible"
    // location.href = "www.yoursite.com";

  //SAVEEE
  const city = document.querySelector("#fname")
  const departDateTime = document.querySelector("#c100")
  const finishDateTime = document.querySelector("#c200")
  const noOfPeople = document.querySelector("#p100")

  console.log(city.value)
  console.log(departDateTime.value)
  console.log(finishDateTime.value)
  console.log(noOfPeople.value)

  sessionStorage.setItem('city', city.value);
  sessionStorage.setItem('departDateTime', departDateTime.value);
  sessionStorage.setItem('finishDateTime', finishDateTime.value);
  sessionStorage.setItem('noOfPeople', noOfPeople.value);

    window.location.href = `/public/templates/customer/select-experience.html`
  });


//hamburger
const menuButton = document.querySelector("#menu")
const navbar = document.querySelector("header>nav")

menuButton.onclick = function() {
  console.log("toggle")
  navbar.classList.toggle("hide")
}