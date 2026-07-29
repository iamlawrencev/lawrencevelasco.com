(() => {
  const images = {
    'shot-sanbidet': 'assets/projects/san-bidet-app-store.png',
    'shot-anivoice': 'assets/projects/anivoice-app-store.jpg',
    'shot-pitchie': 'assets/projects/pitchie-app-store.png',
  };

  let attempts = 0;
  const applyImages = () => {
    let applied = 0;
    document.querySelectorAll('image-slot[id]').forEach((slot) => {
      const src = images[slot.id];
      if (!src) return;
      slot.setAttribute('src', src);
      applied += 1;
    });

    if (applied < Object.keys(images).length && attempts++ < 60) {
      window.setTimeout(applyImages, 100);
    }
  };

  window.addEventListener('DOMContentLoaded', applyImages);
})();
