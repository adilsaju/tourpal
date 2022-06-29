window.onload = function() {
  // console.log("it worked")
  let is_logged_in = "false"
  try {
    is_logged_in = sessionStorage.getItem('is_logged_in');
    
  } catch (error) {
    is_logged_in = "false"
  }
  if (is_logged_in === "true") {
    //redirect
    console.log("user already logged in. no problem")
  }
  else
  {
    let host = window.location.host
    console.log(host)
    window.location.href = `/public/landing-page.html`
  }
}

add.addEventListener ('click', () => {
    // if ( temp1.checkValidity() != true)
    // {
    //     return;
    // }

    console.log("clicked add");  

    cur_exp.style.visibility = "visible"
  });
var abc=123
  add2.addEventListener ('click', () => {
    // if ( temp1.checkValidity() != true)
    // {
    //     return;
    // }

    console.log("clicked add");  

    driver_list.style.visibility = "visible"
  });

  add3.addEventListener ('click', () => {
    // if ( temp1.checkValidity() != true)
    // {
    //     return;
    // }

    console.log("clicked add");  

    src.style.visibility = "visible"
  });

  add4.addEventListener ('click', () => {
    // if ( temp1.checkValidity() != true)
    // {
    //     return;
    // }

    console.log("final data: "); 
    console.log(fname2.name, fname2.value)

    // window.location.replace("http://127.0.0.1:5500/public/index.html");

    window.location.pathname = 'public/payment.html'
    // src.style.visibility = "visible"
  });