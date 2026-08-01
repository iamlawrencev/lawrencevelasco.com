const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

const contactEmail = String.fromCharCode(109, 101, 64, 108, 97, 119, 114, 101, 110, 99, 101, 118, 101, 108, 97, 115, 99, 111, 46, 99, 111, 109);
document.querySelectorAll('[data-email-link]').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = `mailto:${contactEmail}`;
  });
});

const navItems = [...document.querySelectorAll('.nav-links a[data-nav-section]')].map((link) => ({
  link,
  section: document.getElementById(link.dataset.navSection)
}));

let activeNavLink;

const setActiveNav = (activeLink) => {
  if (!activeLink || activeLink === activeNavLink) return;
  activeNavLink = activeLink;
  navItems.forEach(({ link }) => {
    const active = link === activeLink;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
};

let pendingNavLink;
let navUpdateFrame;
const scheduleActiveNav = (activeLink) => {
  pendingNavLink = activeLink;
  if (navUpdateFrame) return;
  navUpdateFrame = requestAnimationFrame(() => {
    navUpdateFrame = undefined;
    setActiveNav(pendingNavLink);
  });
};

if ('IntersectionObserver' in window) {
  const sectionObserver = new IntersectionObserver((entries) => {
    const visibleSection = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]?.target;
    if (visibleSection) scheduleActiveNav(navItems.find(({ section }) => section === visibleSection)?.link);
  }, { rootMargin: '-96px 0px -55% 0px', threshold: [0, 0.5, 1] });

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
