//hamburger
const menuButton = document.querySelector("#menu")
const navbar = document.querySelector("header>nav")

menuButton.onclick = function() {
  console.log("toggle")
  navbar.classList.toggle("hide")
}


window.onload = function() {
  
  
  
  console.log("it worked===============================")
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