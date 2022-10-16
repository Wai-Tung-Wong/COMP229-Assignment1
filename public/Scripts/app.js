(function(){
    function start(){
        console.log("App started...")
    }
    window.addEventListener("load", start);
})();

//function for the contact form to redirect user to home page
function backToHome(){
    location.replace("/");
  }