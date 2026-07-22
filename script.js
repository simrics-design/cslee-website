document.getElementById('year').textContent = new Date().getFullYear();

function trackEvent(name, parameters = {}) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', name, parameters);
  }
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', () => {
    trackEvent('navigation_click', {
      section: link.getAttribute('href').slice(1) || 'top',
      link_text: link.textContent.trim()
    });
  });
});

document.querySelectorAll('a[href^="mailto:"]').forEach((link) => {
  link.addEventListener('click', () => {
    trackEvent('contact_click', { method: 'email' });
  });
});

document.querySelectorAll('a[href*="linkedin.com"]').forEach((link) => {
  link.addEventListener('click', () => {
    trackEvent('contact_click', { method: 'linkedin' });
  });
});

document.querySelectorAll('.focus-item').forEach((note, index) => {
  note.addEventListener('toggle', () => {
    if (note.open) {
      trackEvent('field_note_open', {
        note_number: index + 1,
        note_title: note.querySelector('strong')?.textContent.trim() || ''
      });
    }
  });
});
