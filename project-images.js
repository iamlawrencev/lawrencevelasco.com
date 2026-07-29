(() => {
  const images = {
    'shot-sanbidet': 'assets/projects/san-bidet-app-store.png',
    'shot-anivoice': 'assets/projects/anivoice-app-store.webp',
  };

  const pitchieScreenshots = [
    'assets/projects/pitchie-app-store-1.webp',
    'assets/projects/pitchie-app-store-2.webp',
  ];

  const renderPitchieScreenshots = (slot) => {
    if (!slot || document.getElementById('pitchie-store-screenshots')) return;
    const pair = document.createElement('div');
    pair.id = 'pitchie-store-screenshots';
    pair.setAttribute('aria-label', 'Pitchie App Store screenshots');
    pair.style.cssText = 'display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:6px;width:100%;height:100%;';

    pitchieScreenshots.forEach((src, index) => {
      const image = document.createElement('img');
      image.src = src;
      image.alt = `Pitchie App Store screenshot ${index + 1}`;
      image.loading = 'lazy';
      image.style.cssText = 'width:100%;height:100%;object-fit:contain;display:block;border-radius:10px;background:#2b2b2b;';
      pair.append(image);
    });

    slot.replaceWith(pair);
  };

  let attempts = 0;
  const applyImages = () => {
    let applied = document.getElementById('pitchie-store-screenshots') ? 1 : 0;
    document.querySelectorAll('image-slot[id]').forEach((slot) => {
      if (slot.id === 'shot-pitchie') {
        renderPitchieScreenshots(slot);
        applied += 1;
        return;
      }
      const src = images[slot.id];
      if (!src) return;
      if (slot.id === 'shot-anivoice') slot.setAttribute('fit', 'contain');
      slot.setAttribute('src', src);
      applied += 1;
    });

    if (applied < 3 && attempts++ < 60) {
      window.setTimeout(applyImages, 100);
    }
  };

  window.addEventListener('DOMContentLoaded', applyImages);
})();
