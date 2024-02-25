// icon
import "material-symbols";
// bootstrap
// Import our custom CSS
import "./src/scss/style.scss";
// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
// navbarMenu
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
// gsap
gsap.from(".gsap-hero", {
  y: 50,
  opacity: 0,
  ease: "power4.inOut",
  delay: 0.5,
  duration: 1.5,
  stagger: {
    amount: 0.3, //每個元素的delay
  },
});
gsap.utils.toArray(".gsap-wrapper").forEach((wrapper) => {
  const img = wrapper.querySelector(".gsap-product-img");
  const text = wrapper.querySelector(".gsap-product-text");
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: wrapper,
      start: "top-=20 center",
      end: "bottom center",
      toggleActions: "play pause play reset",
    },
  });
  tl.from(img, {
    opacity: 0,
    y: 300,
  });
  tl.from(
    text,
    {
      opacity: 0,
      scale: 0,
    },
    "<"
  );
});
gsap.from(".gsap-card-wrapper", {
  scale: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".hot-product",
    start: "top center",
    end: "bottom+=20 center",
    toggleActions: "play pause play reset",
  },
  stagger: {
    amount: 0.3,
  },
});
const bottleTl = gsap.timeline({
  duration: 2,
  scrollTrigger: {
    trigger: ".bottle-recycling",
    start: "top center",
    end: "bottom bottom",
    scrub: true,
  },
});
bottleTl.from(".gsap-bottle-img", {
  xPercent: -130,
  opacity: 0,
});
bottleTl.from(".gsap-bottle-text", {
  x: 500,
  opacity: 0,
});
const footerTl = gsap.timeline({
  duration: 1.5,
  scrollTrigger: {
    trigger: "footer",
    // markers: true,
    start: "top center",
    end: "bottom bottom",
    scrub: true,
  },
});
footerTl.from(".footer-top", {
  y: 500,
  opacity: 0,
});
footerTl.from(".footer-bottom", {
  y: 500,
  opacity: 0,
});
