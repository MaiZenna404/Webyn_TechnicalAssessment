document.addEventListener("DOMContentLoaded", function () {

    /* Add templates' images */
    var imgDocs = document.getElementsByTagName("img")[1];
    var imgThemes = document.getElementsByTagName("img")[2];
    if (imgThemes && imgDocs) {
      imgThemes.src = "./assets/images/bootstrap-themes.png";
      imgThemes.alt = "Bootstrap Themes";
      imgDocs.src = "./assets/images/bootstrap-docs.png";
      imgDocs.alt = "Bootstrap Docs";
    }
  

  /* Logo */

  /* Chercher le premier élement [index Node 0] ayant la classe "d-block mx-auto mb4"*/
  var logo = document.getElementsByTagName("img")[0];
  if (logo) {
    logo.src = "./assets/images/logo-webyn.webp";
    logo.alt = "Webyn Logo";
    logo.style.width = "20%";
    logo.style.height = "auto";
  }

  /* title */

  var title = document.getElementsByTagName("h1")[1];
  if (logo) {
    title.innerHTML =
      "Generate <span id = 'highlightWords'>more revenues </span>with your website!";
    var highlightWords = document.getElementById("highlightWords");
    highlightWords.style.color = "#0ea5e9";
  }
  /* Description Text */

  var description = document.getElementsByTagName("p")[0];
  if (description) {
    description.innerHTML =
      "97% of your traffic does not convert. <br> Webyn automatically generates improvements on your website to maximize your conversions. <br> 100% No-Code";
  }
  /* Left Button */

  var leftButton = document.getElementsByTagName("button")[4];
  if (leftButton) {
    leftButton.innerText = "Book a Demo";
    leftButton.style.borderRadius = "50px";
    leftButton.style.backgroundColor = "#0ea5e9";
    leftButton.style.color = "#ffffff";
    /* Fonction pour afficher en popup le mail envoyé lors du clic*/
    leftButton.addEventListener("click", function () {
      controlEmailInput();
    });

    /* Right Button */

    var rightButton = document.getElementsByTagName("button")[5];
    if (rightButton) {
      rightButton.innerText = "Analyse my website →";
      rightButton.style.borderRadius = "50px";

      /* Fonction pour afficher en popup le mail envoyé lors du clic*/

      rightButton.addEventListener("click", function () {
        controlEmailInput();
      });

      /* Bonus 1 : Form Email Input Field */

      var form = document.getElementsByTagName("form")[0];
      if (form) {
        form.style.display = "flex";
        form.style.justifyContent = "center";
      }

      var emailInput = document.getElementsByTagName("input")[0];

      if (emailInput) {
        emailInput.style.borderRadius = "50px";
        emailInput.style.padding = "10px";
        emailInput.style.border = "1px solid #0ea5e9";
        emailInput.style.width = "75%";
      }

      function controlEmailInput() {
        let email = document.forms["emailForm"]["emailInput"].value;
        if (email == "") {
          alert("Please enter your email to contact us !");
        } else {
          alert(
            "Thank you for contacting us, we will get back to you shortly at " +
              email
          );
        }
      }

      /* Bonus 2 : Swap the Centered Screenshoot & Left-aligned Hero Cards */

      /* Besoin d'un DOMContentLoaded, au risque d'avoir un CSS qui casse lors du swap*/
      document.addEventListener("DOMContentLoaded", function () {
        swapCards();
      });

      function swapCards() {
        var centeredScreenShootCard = document.getElementsByClassName(
          "text-center border-bottom"
        )[0];
        var leftAlignedCard = document.getElementsByClassName(
          "container col-xxl-8 px-4 py-5"
        )[0];

        if (centeredScreenShootCard && leftAlignedCard) {
          var card = centeredScreenShootCard.innerHTML;
          var card2 = leftAlignedCard.innerHTML;

          centeredScreenShootCard.innerHTML = card2;

          leftAlignedCard.innerHTML = card;
        }
      }
    }
  }
});
