import { Offcanvas } from 'bootstrap';

export const NAV_BAR_MENU_ID = 'offcanvasNavbar';

export class NavBarMenu {
  constructor(id) {
    this.delayMs = 900;
    this.menuElt = document.getElementById(id);
    this.menu = Offcanvas.getOrCreateInstance(this.menuElt);
    this.links = [...this.menuElt.querySelectorAll('.nav-link')];
    this.links.forEach((link) => {
      link.addEventListener('click', e => {
        this.onLinkClicked();
      });
    });
  }
  onLinkClicked () {
    if (this.isMenuOpen()) {
      setTimeout(this.closeMenu.bind(this), this.delayMs);
    }
  }
  isMenuOpen () {
    return this.menuElt.classList.contains('show');
  }
  closeMenu () {
    this.menu.hide();
  }
}
