
$(document).ready(function () {
  // menu hover 
  $(".navbar-light .dmenu").hover(
    function () {
      $(this).find(".sm-menu").first().stop(true, true).slideDown(150);
    },
    function () {
      $(this).find(".sm-menu").first().stop(true, true).slideUp(105);
    }
  );
  
    $(".btnClick").click(function() {
      $(this).toggleClass('added')
    })
    if( $('.datepickerClass').length ) {
      $('.datepicker').datepicker();
    }


  // fancybox 
  $("a.fancybox").fancybox({
    // openEffect	: 'none',
    // closeEffect	: 'none'
    loop: false,
    fitToView: false,
    // beforeShow: function () {
    //     this.width = "80%";
    //     this.height = "80%";
    // }
  });
  $("a.fancyboxVideo").fancybox({
    // openEffect	: 'none',
    // closeEffect	: 'none'
    type: "iframe",
    width: "80%",
    height: "80%",
    youtube: {
      autoplay: 1, // enable autoplay
    },
  });


});


const swiper = new Swiper(".swiperProgress", {
  // Optional parameters
  // direction: 'vertical',
  loop: false,
  spaceBetween: 24,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1.08,
});
const swiper01 = new Swiper(".swiperFav", {
  // Optional parameters
  // direction: 'vertical',
  loop: false,
  spaceBetween: 24,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1,
});
const swiper2 = new Swiper(".minSwiper", {
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
const swiper3 = new Swiper(".swiperADS", {
  slidesPerView: 2,
  spaceBetween: 30,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    1400: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    // when window width is >= 640px
    1600: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
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
const swiper4 = new Swiper(".swiperActivities", {
  slidesPerView: 2,
  spaceBetween: 30,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,

    },
    // when window width is >= 480px
    1400: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 640px
    1920: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});



// custom popup for new employee
const openModal = document.querySelector(".openPopup");
const modalContent = document.querySelector(".contentPopup");
const closeContent = document.getElementById("closePop");

openModal?.addEventListener("click", () => {
  openModal.classList.add("hidden");
  modalContent.classList.add("contentPopup");
  modalContent.classList.remove("contentPopupClose");
});

closeContent?.addEventListener("click", () => {
  openModal.classList.remove("hidden");
  modalContent.classList.add("contentPopupClose");
});

const scrollBtn = document.getElementById("toTop");
scrollBtn?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


// adding number ro car 
const checkBtn = document.querySelector('.checkNum')
checkBtn?.addEventListener("click" , () => {
  checkBtn.classList.toggle('addNum')
  console.log(checkBtn.children);
})
