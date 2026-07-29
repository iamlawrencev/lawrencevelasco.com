(() => {
  const canonical = 'https://iamlawrencev.github.io/lawrencevelasco.com/';
  const title = 'Lawrence Velasco | Software Developer & Project Coordinator';
  const description = 'Lawrence Velasco is a hands-on software developer and project coordinator building mobile apps, web systems, automation, and AI-assisted solutions.';

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${canonical}#lawrence-velasco`,
        name: 'Lawrence Velasco',
        url: canonical,
        jobTitle: 'Software Developer and Project Coordinator',
        sameAs: ['https://www.linkedin.com/in/iamlawrencev/'],
        knowsAbout: ['React Native', '.NET MAUI', 'Xamarin', 'Native iOS', 'Native Android', 'TypeScript', 'C#', 'Supabase', 'Angular', 'Microsoft Excel and VBA', 'Databases', 'Systems automation', 'Project delivery'],
      },
      {
        '@type': 'WebSite',
        '@id': `${canonical}#website`,
        url: canonical,
        name: 'Lawrence Velasco',
        inLanguage: 'en',
        publisher: { '@id': `${canonical}#lawrence-velasco` },
      },
      {
        '@type': 'WebPage',
        '@id': `${canonical}#webpage`,
        url: canonical,
        name: title,
        description: 'Portfolio of Lawrence Velasco, covering mobile apps, web systems, automation, and project delivery.',
        isPartOf: { '@id': `${canonical}#website` },
        about: { '@id': `${canonical}#lawrence-velasco` },
        inLanguage: 'en',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What does Lawrence Velasco do?',
            acceptedAnswer: { '@type': 'Answer', text: 'Lawrence Velasco is a hands-on software developer and project coordinator who turns product and business needs into mobile apps, web systems, automation, and practical AI-assisted solutions.' },
          },
          {
            '@type': 'Question',
            name: 'What technologies does Lawrence work with?',
            acceptedAnswer: { '@type': 'Answer', text: 'His experience includes React Native, .NET MAUI, Xamarin, native iOS and Android, TypeScript, C#, Supabase, Angular, databases, and Excel and VBA automation.' },
          },
          {
            '@type': 'Question',
            name: 'What products has Lawrence shipped?',
            acceptedAnswer: { '@type': 'Answer', text: 'His personal products include San Bidet, a restroom finder; AniVoice, an anime voice actor discovery app; and Pitchie, a pitch-recognition training app.' },
          },
        ],
      },
    ],
  };

  const headMarkup = `
<title>${title}</title>
<meta name="description" content="${description}">
<meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1">
<meta name="theme-color" content="#17140f">
<link rel="canonical" href="${canonical}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Lawrence Velasco">
<meta property="og:title" content="${title}">
<meta property="og:description" content="Mobile apps, web systems, automation, and AI-assisted solutions by Lawrence Velasco.">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${canonical}assets/social-preview.png">
<meta property="og:image:alt" content="Lawrence Velasco — Problem Solver & Solution Implementer">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${title}">
<meta name="twitter:description" content="Mobile apps, web systems, automation, and AI-assisted solutions by Lawrence Velasco.">
<meta name="twitter:image" content="${canonical}assets/social-preview.png">
<script type="application/ld+json">${JSON.stringify(structuredData).replace(/</g, '\\u003c')}<\/script>`;

  const faqMarkup = `
<section id="faq" style="max-width:1100px;margin:0 auto;padding:var(--space-8) var(--space-8);scroll-margin-top:90px">
  <div style="margin-bottom:var(--space-8)">
    <span style="font-size:var(--text-label-size);font-weight:600;letter-spacing:0.04em;text-transform:uppercase;color:var(--color-action-primary-bg)">FAQ</span>
    <h2 style="font-size:var(--text-section-title-size);line-height:var(--text-section-title-lh);font-weight:var(--text-section-title-weight);letter-spacing:var(--text-section-title-tracking);margin:10px 0 12px;color:var(--color-text-primary)">How can Lawrence help?</h2>
  </div>
  <div style="display:grid;gap:12px">
    <details style="padding:18px 20px;border:1px solid var(--color-border-hairline);border-radius:var(--radius-md);background:var(--color-bg-surface-secondary)">
      <summary style="cursor:pointer;font-weight:700;color:var(--color-text-primary)">What does Lawrence Velasco do?</summary>
      <p style="margin:12px 0 0;color:var(--color-text-secondary);line-height:1.6">Lawrence is a hands-on software developer and project coordinator who turns product and business needs into mobile apps, web systems, automation, and practical AI-assisted solutions.</p>
    </details>
    <details style="padding:18px 20px;border:1px solid var(--color-border-hairline);border-radius:var(--radius-md);background:var(--color-bg-surface-secondary)">
      <summary style="cursor:pointer;font-weight:700;color:var(--color-text-primary)">What technologies does Lawrence work with?</summary>
      <p style="margin:12px 0 0;color:var(--color-text-secondary);line-height:1.6">His experience includes React Native, .NET MAUI, Xamarin, native iOS and Android, TypeScript, C#, Supabase, Angular, databases, and Excel and VBA automation.</p>
    </details>
    <details style="padding:18px 20px;border:1px solid var(--color-border-hairline);border-radius:var(--radius-md);background:var(--color-bg-surface-secondary)">
      <summary style="cursor:pointer;font-weight:700;color:var(--color-text-primary)">What products has Lawrence shipped?</summary>
      <p style="margin:12px 0 0;color:var(--color-text-secondary);line-height:1.6">His personal products include San Bidet, a restroom finder; AniVoice, an anime voice actor discovery app; and Pitchie, a pitch-recognition training app.</p>
    </details>
  </div>
</section>`;

  document.addEventListener('DOMContentLoaded', () => {
    const templateEl = document.querySelector('script[type="__bundler/template"]');
    if (!templateEl || templateEl.dataset.seoEnhanced) return;

    try {
      const template = JSON.parse(templateEl.textContent);
      const enhancedTemplate = template
        .replace('<html>', '<html lang="en">')
        .replace('<head>', `<head>${headMarkup}`)
        .replace('SOLUTIONS & AI / PHILIPPINES', '')
        .replace('<section id="contact"', `${faqMarkup}<section id="contact"`);

      templateEl.textContent = JSON.stringify(enhancedTemplate);
      templateEl.dataset.seoEnhanced = 'true';
    } catch (error) {
      console.warn('SEO enhancement could not be prepared.', error);
    }
  });
})();
