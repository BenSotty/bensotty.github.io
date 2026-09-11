export function initPageBookingBtns () {
  const bookBtnElts = document.querySelectorAll(".booking-btn");
  [...bookBtnElts].map((elt) => {
    elt.addEventListener("click", function (e) {
      e.preventDefault();
      const bookNavItem = document.querySelector('#header-navbar .nav-booking-link');
      bookNavItem.click();
    });
  });
};
