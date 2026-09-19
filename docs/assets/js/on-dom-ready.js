import { initPageBookingBtns } from './components/booking-btns';
import { initPageCollapseableLists } from './components/collapsable-list';
import {initPageExpandableTextLists } from './components/expandable-text-list';

export default class OnDomReady {
  run () {
    initPageBookingBtns();
    initPageCollapseableLists();
    initPageExpandableTextLists();
  }
}
