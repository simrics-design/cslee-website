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

// Bookstore link click tracking
document.querySelectorAll('.book-store-buttons a').forEach((btn) => {
  btn.addEventListener('click', () => {
    trackEvent('book_store_click', {
      store: btn.textContent.replace('↗', '').trim(),
      url: btn.getAttribute('href')
    });
  });
});

// Email 1-click copy
const copyBtn = document.getElementById('copyEmailBtn');
if (copyBtn) {
  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText('simrics@gmail.com').then(() => {
      copyBtn.textContent = '복사됨!';
      copyBtn.classList.add('copied');
      setTimeout(() => {
        copyBtn.textContent = '복사';
        copyBtn.classList.remove('copied');
      }, 2000);
    }).catch(() => {
      // Fallback if clipboard API fails
      const tempInput = document.createElement('input');
      tempInput.value = 'simrics@gmail.com';
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
      copyBtn.textContent = '복사됨!';
      copyBtn.classList.add('copied');
      setTimeout(() => {
        copyBtn.textContent = '복사';
        copyBtn.classList.remove('copied');
      }, 2000);
    });
    trackEvent('contact_click', { method: 'email_copy' });
  });
}

// Mobile Drawer Controls
const menuToggle = document.getElementById('mobileMenuToggle');
const drawer = document.getElementById('mobileDrawer');
const backdrop = document.getElementById('mobileBackdrop');
const drawerClose = document.getElementById('mobileDrawerClose');
const drawerLinks = document.querySelectorAll('.mobile-drawer-link');

function openMenu() {
  if (!drawer || !backdrop) return;
  drawer.classList.add('is-active');
  backdrop.classList.add('is-active');
  drawer.setAttribute('aria-hidden', 'false');
  backdrop.setAttribute('aria-hidden', 'false');
  if (menuToggle) menuToggle.setAttribute('aria-expanded', 'true');
  document.body.classList.add('menu-open');
  trackEvent('mobile_menu_toggle', { action: 'open' });
}

function closeMenu() {
  if (!drawer || !backdrop) return;
  drawer.classList.remove('is-active');
  backdrop.classList.remove('is-active');
  drawer.setAttribute('aria-hidden', 'true');
  backdrop.setAttribute('aria-hidden', 'true');
  if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('menu-open');
}

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    if (drawer && drawer.classList.contains('is-active')) closeMenu();
    else openMenu();
  });
}
if (drawerClose) drawerClose.addEventListener('click', closeMenu);
if (backdrop) backdrop.addEventListener('click', closeMenu);

drawerLinks.forEach((link) => {
  link.addEventListener('click', () => {
    closeMenu();
    const section = link.getAttribute('href').slice(1) || 'top';
    trackEvent('navigation_click', {
      section: section,
      link_text: link.textContent.trim(),
      device_type: 'mobile_drawer'
    });
  });
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && drawer && drawer.classList.contains('is-active')) {
    closeMenu();
  }
});

