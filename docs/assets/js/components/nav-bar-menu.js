import { Offcanvas } from 'bootstrap';
import { ActivityTracker } from  './activity-tracker';

export const NAV_BAR_MENU_ID = 'offcanvasNavbar';

export class NavBarMenu {
  constructor(id) {
    this.delayMs = 900;
    this.menuElt = document.getElementById(id);
    this.menu = Offcanvas.getOrCreateInstance(this.menuElt);
    this.links = [...this.menuElt.querySelectorAll('.nav-link')];
    this.links.forEach((link) => {
      link.addEventListener('click', event => {
        this.onLinkClicked(event);
      });
    });
    this.activityTracker = ActivityTracker.getInstance();
  }
  onLinkClicked (event) {
    if (this.isMenuOpen()) {
      setTimeout(this.closeMenu.bind(this), this.delayMs);
    }

    this.trackNalinkClicked(event.target);
  }
  isMenuOpen () {
    return this.menuElt.classList.contains('show');
  }
  closeMenu () {
    this.menu.hide();
  }
  trackNalinkClicked (link) {
    const isBooking = link.classList.contains('nav-booking-link');
    const event = isBooking ? "booking-clicked" : "nav-link-clicked";
    const pagePath = window.location.pathname;
    const isHome = pagePath === "/";
    const data = {
      page: isHome ? "home" : pagePath,
      href: link.getAttribute("href")
    };
    
    this.activityTracker.trackEvent(event, data);
  }
}
