import { initPageBookingBtns } from './components/booking-btns';
import { initPageCollapseableLists } from './components/collapsable-list';
import {initPageExpandableTextLists } from './components/expandable-text-list';
import { NavBarMenu, NAV_BAR_MENU_ID } from  './components/nav-bar-menu';

export default class OnDomReady {
  run () {
    document.querySelector("body").classList.remove("js-not-loaded");
    initPageBookingBtns();
    new NavBarMenu(NAV_BAR_MENU_ID);
    initPageCollapseableLists();
    initPageExpandableTextLists();
  }
}
