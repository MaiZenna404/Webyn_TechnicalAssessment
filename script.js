document.addEventListener("DOMContentLoaded", function() {
    /* Logo */
    /* Chercher le premier élement [index Node 0] ayant la classe "d-block mx-auto mb4"*/
    var logo = document.getElementsByClassName("d-block mx-auto mb4")[0];
    if (logo){
      logo.src = "./assets/images/logo-webyn.webp";
    }
    /* title */
    document.getElementsByClassName(
      "display-5 fw-bold text-body-emphasis"
    ).innerText = "Generate more revenue with your website !";
    /* Description Text */
    document.getElementsByClassName("lead mb-4").innerText =
      "97% of your traffic does not convert. Webyn automatically generates improvements on your website to maximize your conversions. 100% No-Code";
    /* Left Button */
    document.getElementsByClassName("btn btn-primary btn-lg px-4 gap-3").innerText = "Book a Demo";
    document.getElementsByClassName("btn btn-primary btn-lg px-4 gap-3").style.borderradius = "50px";
    document.getElementsByClassName("btn btn-primary btn-lg px-4 gap-3").style.backgroundColor = "#0ea5e9";
    document.getElementsByClassName("btn btn-primary btn-lg px-4 gap-3").style.color = "#ffffff";
    /* Right Button */
    document.getElementsByClassName("btn btn-outline-secondary btn-lg px-4").innerText = "Analyse my website →";
    document.getElementsByClassName("btn btn-outline-secondary btn-lg px-4").style.borderradius = "50px";
  
  });