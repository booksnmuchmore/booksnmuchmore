/* ============================================================
   Shared site navigation — booksnmuchmore.com
   Renders identical nav markup/links into every page's
   <nav id="navbar" data-page="..."></nav> placeholder.
   Pair with nav.css. See nav.css header comment for usage.
   ============================================================ */
(function () {
  var FALLBACK_LOGO = 'https://raw.githubusercontent.com/booksnmuchmore/booksnmuchmore/main/logo.webp';

  var BOOK_ICON = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="width:14px;height:14px;vertical-align:-2px;fill:none;stroke:currentColor;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round;"><path d="M19 21l-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg> ';
  var LIBRARY_ICON = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="width:14px;height:14px;vertical-align:-2px;fill:none;stroke:currentColor;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round;"><path d="M19 21l-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg> ';

  // key = value of the <nav data-page="..."> attribute on that page
  var LINKS = [
    { key: 'home',     label: 'Home',       file: 'index.html',      hash: '' },
    { key: 'about',    label: 'About',      file: 'index.html',      hash: '#about' },
    { key: 'books',    label: 'Books',      file: 'books.html',      hash: '' },
    { key: 'lessons',  label: 'Lessons',    file: 'lessons.html',    hash: '', icon: BOOK_ICON },
    { key: 'library',  label: 'My Library', file: 'my-library.html', hash: '', icon: LIBRARY_ICON },
    { key: 'subscribe',label: 'Subscribe',  file: 'index.html',      hash: '#subscribe' }
  ];

  function renderNav() {
    var nav = document.getElementById('navbar');
    if (!nav) return;

    var activePage = nav.getAttribute('data-page') || '';
    var onHome = activePage === 'home';
    var logoUrl = (window.SITE && window.SITE.logoUrl) ? window.SITE.logoUrl : FALLBACK_LOGO;

    var linksHtml = LINKS.map(function (l) {
      // On the home page itself, About/Subscribe are in-page anchors.
      var href = (onHome && l.file === 'index.html') ? (l.hash || l.file) : (l.file + l.hash);
      var cls = l.key === activePage ? ' class="active"' : '';
      var icon = l.icon || '';
      return '<li><a href="' + href + '"' + cls + '>' + icon + l.label + '</a></li>';
    }).join('');

    var ctaHref = nav.getAttribute('data-cta-href');
    var ctaLabel = nav.getAttribute('data-cta-label');
    var ctaClass = nav.getAttribute('data-cta-class') || 'btn-primary';
    var ctaHtml = (ctaHref && ctaLabel)
      ? '<a href="' + ctaHref + '" class="' + ctaClass + '"' +
        (ctaHref.indexOf('http') === 0 ? ' target="_blank" rel="noopener"' : '') +
        '>' + ctaLabel + '</a>'
      : '';

    var accountSlotHtml = nav.hasAttribute('data-account-slot')
      ? '<div id="nav-account-slot"></div>'
      : '';

    nav.innerHTML =
      '<a href="index.html" class="nav-logo"><img data-site-logo src="' + logoUrl + '" alt="Books n Much More"></a>' +
      '<ul class="nav-links">' + linksHtml + '</ul>' + ctaHtml + accountSlotHtml;

    function onScroll() {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    }
    window.addEventListener('scroll', onScroll);
    onScroll();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderNav);
  } else {
    renderNav();
  }
})();
