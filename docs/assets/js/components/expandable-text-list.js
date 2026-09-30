function updateHeightsAndRestoreState(expandable, isOpen) {
  const body = expandable.querySelector('.expandable-body');
  const openHeight = body.scrollHeight;

  body.style.setProperty('--open-height', `${openHeight}px`);

  if (!isOpen) {
    expandable.classList.remove('is-open');
  }
}

function updateAllExpandableTextHeights() {
  document.querySelectorAll('.expandable-text').forEach((expandable) => {
    const isOpen = expandable.classList.contains('is-open');

    if (!isOpen) {
      expandable.classList.add('is-open');
    }
    updateHeightsAndRestoreState(expandable, isOpen);
  });
};

export function initPageExpandableTextLists() {
  document.querySelectorAll('.expandable-text-list').forEach((list) => {
    list.querySelectorAll('h2').forEach((heading) => {
      const paragraphs = [];

      let element = heading.nextElementSibling;

      while (element && element.tagName !== 'H2') {
        paragraphs.push(element);
        element = element.nextElementSibling;
      }

      if (paragraphs.length < 2) {
        return;
      }

      const expandable = document.createElement('div');
      expandable.classList.add('expandable-text');
      expandable.appendChild(heading);
      paragraphs.forEach((paragraph) => {
        expandable.appendChild(paragraph);
      });
      list.insertBefore(expandable, element);

      const expandableBody = document.createElement('div');
      expandableBody.classList.add('expandable-body');
      for (let i = 1; i < paragraphs.length; i++) {
        expandableBody.appendChild(paragraphs[i]);
      }
      expandable.insertBefore(expandableBody, paragraphs[0]);

      const expandableHeader = document.createElement('div');
      expandableHeader.classList.add('expandable-header');
      expandableHeader.append(heading);
      expandableHeader.append(paragraphs[0]);
      expandable.insertBefore(expandableHeader, expandableBody);

      expandable.addEventListener('click', () => {
        expandable.classList.toggle('is-open');
      });
    });
  });

  requestAnimationFrame(() => {
    updateAllExpandableTextHeights();
  });

  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);

    resizeTimeout = setTimeout(() => {
      updateAllExpandableTextHeights();
    }, 50);
  });
};
