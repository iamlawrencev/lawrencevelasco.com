const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

const navItems = [...document.querySelectorAll('.nav-links a[data-nav-section]')].map((link) => ({
  link,
  section: document.getElementById(link.dataset.navSection)
}));

const setActiveNav = (activeLink) => {
  navItems.forEach(({ link }) => {
    const active = link === activeLink;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
};

if ('IntersectionObserver' in window) {
  const sectionObserver = new IntersectionObserver((entries) => {
    const visibleSection = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]?.target;
    if (visibleSection) setActiveNav(navItems.find(({ section }) => section === visibleSection)?.link);
  }, { rootMargin: '-96px 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] });

  navItems.forEach(({ section }) => section && sectionObserver.observe(section));
} else {
  setActiveNav(navItems[0]?.link);
}

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
