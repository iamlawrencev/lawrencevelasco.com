const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle?.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});

navLinks?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.work-card');

filters.forEach((filter) => {
  filter.addEventListener('click', () => {
    const selected = filter.dataset.filter;
    filters.forEach((button) => button.classList.toggle('active', button === filter));
    cards.forEach((card) => {
      card.hidden = selected !== 'all' && !card.dataset.tags.split(' ').includes(selected);
    });
  });
});
