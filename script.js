const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

const navItems = [...document.querySelectorAll('.nav-links a[data-nav-section]')].map((link) => ({
  link,
  section: document.getElementById(link.dataset.navSection)
}));

const updateActiveNav = () => {
  const offset = 130;
  let activeLink = null;

  for (const item of navItems) {
    if (item.section?.getBoundingClientRect().top <= offset) activeLink = item.link;
  }

  navItems.forEach(({ link }) => {
    const active = link === activeLink;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
};

let scrollScheduled = false;
window.addEventListener('scroll', () => {
  if (scrollScheduled) return;
  scrollScheduled = true;
  requestAnimationFrame(() => {
    scrollScheduled = false;
    updateActiveNav();
  });
}, { passive: true });
updateActiveNav();

menuToggle?.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});

navLinks?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    updateActiveNav();
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
