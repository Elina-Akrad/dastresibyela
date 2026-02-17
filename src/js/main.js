let search = document.querySelector(".header-search-input");
console.dir(search);
search.addEventListener("focus", function () {
  search.placeholder = "";
});
search.addEventListener("blur", function () {
  search.placeholder = "جستجو";
});

(function () {
  const toggle = document.getElementById("mobile-menu-toggle");
  if (!toggle) return;
  // The submenu follows the input in the DOM
  const menu =
    toggle.nextElementSibling &&
    toggle.nextElementSibling.classList &&
    toggle.nextElementSibling.classList.contains("submenue")
      ? toggle.nextElementSibling
      : document.querySelector(".submenue");

  // Only run this behavior on devices that support hover (avoid interfering on touch devices)
  const canHover =
    window.matchMedia &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (!canHover || !menu) return;

  document.addEventListener("pointermove", (e) => {
    try {
      if (!toggle.checked) return;
      const target = e.target;
      // If pointer is inside menu or on the toggle label/icon, do nothing
      if (
        menu.contains(target) ||
        document
          .querySelector('label[for="mobile-menu-toggle"]')
          ?.contains(target)
      )
        return;
      // otherwise close the menu
      toggle.checked = false;
    } catch (err) {
      // ignore
    }
  });
})();

//clock
function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("txt").innerHTML = h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  effect: "fade",
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".myChosen", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
//chosen swiper
var swiper = new Swiper(".myChosen", {
  spaceBetween: 0,
  slidesPerView: 6,
  loop: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    400: {
      slidesPerView: 2,
    },
    600: {
      slidesPerView: 3,
    },
    800: {
      slidesPerView: 4,
    },
    1000: {
      slidesPerView: 5,
    },

    1235: {
      slidesPerView: 6,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
//available swiper
var swiper = new Swiper(".myAvailable", {
  spaceBetween: 20,
  slidesPerView: 4,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  breakpoints: {
    400: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    600: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    800: {
      slidesPerView: 3.5,
      spaceBetween: 20,
    },
    1000: {
      slidesPerView: 3.7,
      spaceBetween: 20,
    },

    1235: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
//brands swiper
var swiper = new Swiper(".myBrands", {
  spaceBetween: 20,
  slidesPerView: 6,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    400: {
      slidesPerView: 3,
    },
    600: {
      slidesPerView: 4,
    },
    800: {
      slidesPerView: 5,
    },
    1000: {
      slidesPerView: 5.5,
    },

    1235: {
      slidesPerView: 6,
    },
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//journal swiper
var swiper = new Swiper(".myJournal", {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    400: {
      slidesPerView: 3,
    },
    800: {
      slidesPerView: 4,
    },
  },
});

//about>comments swiper
var swiper = new Swiper(".myComments", {
  spaceBetween: 20,
  slidesPerView: 2,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Check if user has a saved dark mode preference
const darkModeToggle = document.getElementById("dark-mode-toggle");
const html = document.documentElement;

// Load saved preference from localStorage
if (localStorage.getItem("darkMode") === "enabled") {
  html.classList.add("dark");
  darkModeToggle.checked = true;
}

// Toggle dark mode on checkbox change
darkModeToggle.addEventListener("change", function () {
  if (this.checked) {
    html.classList.add("dark");
    localStorage.setItem("darkMode", "enabled");
  } else {
    html.classList.remove("dark");
    localStorage.setItem("darkMode", "disabled");
  }
});
