import { Collapse } from 'bootstrap';

const containerClass = "collapsable-list";

export default class CollapsableList {
  constructor(elt) {
    this.elt = elt;
    this.collapses = [...this.elt.querySelectorAll('.collapse')];
    const collapsesById = {};

    this.collapses.forEach((elt) => {
      collapsesById[elt.id] = new Collapse(elt, { toggle: false });
       elt.addEventListener('show.bs.collapse', event => {
          this.closeOtherCollapsables(event.target.id);
       });
     });
     this.collapsesById = collapsesById;
  }

  closeOtherCollapsables (id) {
    this.collapses.forEach((elt) => {
      if (elt.id != id) {
        const collapse = this.collapsesById[elt.id];
        setTimeout(() => collapse.hide(), 500);
      }
    });
  }
}

export function initPageCollapseableLists () {
  const collapseEltLists = document.querySelectorAll("." + containerClass);
  [...collapseEltLists].map(elt => new CollapsableList(elt));
}
