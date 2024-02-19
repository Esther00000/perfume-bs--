// icon
import "material-symbols";
// bootstrap
// Import our custom CSS
import "./src/scss/style.scss";
// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

const navbarMenuBtn = document.querySelector(".navbar-toggler");

navbarMenuBtn.addEventListener("click", (e) => {
  const menuBtn = e.target;
  if (menuBtn.classList.contains("navbar-toggler-menu")) {
    menuBtn.classList.toggle("close");
    menuBtn.textContent = menuBtn.classList.contains("close")
      ? "close"
      : "menu";
  }
});
//表單驗證
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
