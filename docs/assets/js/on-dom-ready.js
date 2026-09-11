import { initPageBookingBtns } from './components/booking-btns';
import { initPageCollapseableLists } from './components/collapsable-list';

export default class OnDomReady {
  run () {
    initPageBookingBtns();
    initPageCollapseableLists();
  }
}
