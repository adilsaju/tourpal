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