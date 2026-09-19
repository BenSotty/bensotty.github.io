function updateAllExpandableTextHeights() {
    document.querySelectorAll('.expandable-text').forEach((expandable) => {
        const firstParagraph = expandable.querySelector('p:first-child');

        if (!firstParagraph) {
            return;
        }

        expandable.style.maxHeight = 'none';

        const closedHeight = firstParagraph.offsetHeight;
        const openHeight = expandable.scrollHeight;

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

export function initPageExpandableTextLists () {
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
          expandable.classList.add('expandable-text');

          paragraphs.forEach((paragraph) => {
              expandable.appendChild(paragraph);
          });

          heading.after(expandable);
          expandable.classList.add('is-closed');


          expandable.addEventListener('click', () => {
              const isOpen = expandable.classList.contains('is-open');

              expandable.classList.toggle('is-open', !isOpen);
              expandable.classList.toggle('is-closed', isOpen);
          });

          setTimeout(updateAllExpandableTextHeights, 100);
      });
  });

   window.addEventListener('resize', updateAllExpandableTextHeights);
};
