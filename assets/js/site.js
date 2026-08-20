(() => {
  const config = window.POKE64_SITE || {};

  document.querySelectorAll('[data-site-link]').forEach((el) => {
    const key = el.dataset.siteLink;
    const url = config[key];
    if (url) {
      el.href = url;
      el.classList.remove('is-disabled');
      el.removeAttribute('aria-disabled');
    } else {
      el.href = '#';
      el.classList.add('is-disabled');
      el.setAttribute('aria-disabled', 'true');
      el.addEventListener('click', (event) => event.preventDefault());
    }
  });

  document.querySelectorAll('[data-support-email]').forEach((el) => {
    if (config.supportEmail) {
      el.textContent = config.supportEmail;
      el.href = `mailto:${config.supportEmail}`;
      el.hidden = false;
    } else {
      el.hidden = true;
    }
  });

  const year = document.querySelector('[data-current-year]');
  if (year) year.textContent = new Date().getFullYear();

  const current = document.body.dataset.page;
  if (current) {
    document.querySelectorAll('[data-nav]').forEach((link) => {
      if (link.dataset.nav === current) link.setAttribute('aria-current', 'page');
    });
  }
})();
