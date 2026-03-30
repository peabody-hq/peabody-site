/* ============================================================
   PEABODY PRODUCTIONS — Main JavaScript
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── CUSTOM CURSOR ── */
  const cursor = document.getElementById('cursor');
  const ring   = document.getElementById('cursorRing');
  if (cursor && ring) {
    document.addEventListener('mousemove', e => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top  = e.clientY + 'px';
      ring.style.left   = e.clientX + 'px';
      ring.style.top    = e.clientY + 'px';
    });
  }

  /* ── TAB / PAGE NAVIGATION ── */
  const pages   = document.querySelectorAll('.page');
  const tabLinks= document.querySelectorAll('.nav-tabs a[data-page]');

  window.showSection = function (name) {
    // Hide all pages
    pages.forEach(p => p.classList.remove('active'));
    // Deactivate all tab links
    tabLinks.forEach(a => a.classList.remove('active'));

    // Show target page
    const target = document.getElementById('page-' + name);
    if (target) target.classList.add('active');

    // Activate matching tab
    const tab = document.getElementById('tab-' + name);
    if (tab) tab.classList.add('active');

    window.scrollTo(0, 0);
    // Update browser URL hash without reloading
    history.pushState(null, '', '#' + name);
    return false;
  };

  // Wire up nav tab clicks
  tabLinks.forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      window.showSection(a.dataset.page);
    });
  });

  // Handle direct URL hash on load
  const hash = window.location.hash.replace('#', '');
  const validPages = ['about', 'media', 'shop', 'contact'];
  if (hash && validPages.includes(hash)) {
    window.showSection(hash);
  } else {
    window.showSection('about');
  }

  /* ── MEDIA FILTER BUTTONS ── */
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      // Future: filter media items by data-type attribute
    });
  });

  /* ── CONTACT FORM ── */
  const form    = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      form.style.display = 'none';
      if (success) success.classList.add('visible');
    });
  }

  /* ── SMOOTH ANCHOR SCROLL ── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    if (!a.dataset.page) {
      a.addEventListener('click', e => e.preventDefault());
    }
  });

});
