function updateAllExpandableTextHeights() {
    document.querySelectorAll('.expandable-text').forEach((expandable) => {
        const firstParagraph = expandable.querySelector('p:first-child');

        if (!firstParagraph) {
            return;
        }

        const isOpen = expandable.classList.contains('is-open');

        // Désactive temporairement la contrainte de hauteur
        expandable.style.maxHeight = 'none';

        // Mesure de l'état fermé
        expandable.classList.remove('is-open');
        expandable.classList.add('is-closed');

        const closedHeight = firstParagraph.offsetHeight;

        // Mesure de l'état ouvert
        expandable.classList.remove('is-closed');
        expandable.classList.add('is-open');

        const openHeight = expandable.scrollHeight;

        // Restaure l'état initial
        expandable.classList.toggle('is-open', isOpen);
        expandable.classList.toggle('is-closed', !isOpen);

        // Restaure la contrainte CSS
        expandable.style.removeProperty('max-height');

        expandable.style.setProperty(
            '--closed-height',
            `${closedHeight}px`
        );

        expandable.style.setProperty(
            '--open-height',
            `${openHeight}px`
        );
    });
};

export function initPageExpandableTextLists() {
  document.querySelectorAll('.expandable-text-list').forEach((list) => {
    const headings = list.querySelectorAll('h2');

    headings.forEach((heading) => {
      const paragraphs = [];

      let element = heading.nextElementSibling;

      while (element && element.tagName !== 'H2') {
        if (element.tagName === 'P') {
          paragraphs.push(element);
        }

        element = element.nextElementSibling;
      }

      if (paragraphs.length === 0) {
        return;
      }

      const expandable = document.createElement('div');
      expandable.classList.add(
        'expandable-text',
        'is-closed'
      );

      paragraphs.forEach((paragraph) => {
        expandable.appendChild(paragraph);
      });

      heading.after(expandable);

      expandable.addEventListener('click', () => {
        const isOpen = expandable.classList.contains('is-open');

        expandable.classList.toggle('is-open', !isOpen);
        expandable.classList.toggle('is-closed', isOpen);
      });
    });
  });

  requestAnimationFrame(() => {
    updateAllExpandableTextHeights();
  });

  window.addEventListener('resize', updateAllExpandableTextHeights);
};
