// Import CSS
import '../scss/styles.scss';

// Specify Bootsrap plugins
import {
// Alert,
// Button,
// Carousel,
  Collapse,
// Dropdown,
// Modal,
  Offcanvas
// Popover,
// ScrollSpy,
// Tab,
// Toast,
// Tooltip
} from 'bootstrap';

import OnDomReady from './on-dom-ready';


document.addEventListener("DOMContentLoaded", (event) => {
  new OnDomReady().run();
});
