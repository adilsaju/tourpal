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
    window.location.href = `/public/templates/customer/select-experience.html`
  });


//hamburger
const menuButton = document.querySelector("#menu")
const navbar = document.querySelector("header>nav")

menuButton.onclick = function() {
  console.log("toggle")
  navbar.classList.toggle("hide")
}