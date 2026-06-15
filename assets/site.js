/* ============================================================
   Bluebonnet Legacy — shared site interactions
   All features guard for element existence, so this one file
   runs safely on every page.
   ============================================================ */
(function () {
  var root = document.documentElement;
  root.classList.add('js');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var finePointer = window.matchMedia('(pointer: fine)').matches;

  /* ---- scroll reveal ---- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---- nav state + scroll progress ---- */
  var nav = document.getElementById('nav');
  var sb = document.getElementById('scrollbar');
  var onScroll = function () {
    var y = window.scrollY || document.documentElement.scrollTop;
    if (nav) nav.classList.toggle('scrolled', y > 12);
    if (sb) {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      sb.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
    }
  };
  onScroll(); window.addEventListener('scroll', onScroll, { passive: true });

  /* ---- mobile drawer ---- */
  var drawer = document.getElementById('drawer');
  var menuBtn = document.getElementById('menuBtn');
  var closeBtn = document.getElementById('drawerClose');
  if (drawer && menuBtn) {
    var setDrawer = function (open) {
      drawer.classList.toggle('open', open);
      drawer.setAttribute('aria-hidden', open ? 'false' : 'true');
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.style.overflow = open ? 'hidden' : '';
    };
    menuBtn.addEventListener('click', function () { setDrawer(true); });
    if (closeBtn) closeBtn.addEventListener('click', function () { setDrawer(false); });
    drawer.addEventListener('click', function (e) { if (e.target === drawer) setDrawer(false); });
    drawer.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setDrawer(false); }); });
  }

  /* ---- hero pointer light + bloom ---- */
  var hero = document.querySelector('.hero');
  if (hero && finePointer && !reduce) {
    hero.addEventListener('pointermove', function (e) {
      var r = hero.getBoundingClientRect();
      hero.style.setProperty('--hx', ((e.clientX - r.left) / r.width * 100) + '%');
      hero.style.setProperty('--hy', ((e.clientY - r.top) / r.height * 100) + '%');
    });
  }
  var heroFlower = document.querySelector('.hero-flower');
  if (heroFlower) requestAnimationFrame(function () { heroFlower.classList.add('bloom-in'); });

  /* ---- problem viz: scatter -> aligned ---- */
  var viz = document.querySelector('.align-viz');
  if (viz && 'IntersectionObserver' in window) {
    var vio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        viz.querySelectorAll('#scatter .node').forEach(function (n, i) {
          n.style.transition = 'opacity .6s ease ' + (i * 0.05) + 's'; n.style.opacity = '.25';
        });
        var aligned = viz.querySelector('#aligned');
        if (aligned) { aligned.style.transition = 'opacity .9s ease .4s'; aligned.style.opacity = '1'; }
        vio.disconnect();
      });
    }, { threshold: 0.4 });
    vio.observe(viz);
  }

  /* ---- framework: flower bloom + pillar sync ---- */
  var flowerEl = document.getElementById('flower');
  if (flowerEl) {
    var pillars = [].slice.call(document.querySelectorAll('.pillar'));
    var petals = [].slice.call(document.querySelectorAll('.petal'));
    var descEl = document.getElementById('pillarDesc');
    var copy = {
      reporting:  'The visibility layer — dashboards, metrics, and a single source of truth — so leaders see performance and risk in time to act.',
      process:    'Informal, memory-bound workflows become documented operating systems that reduce rework and key-person dependency.',
      technology: 'The right systems, integrated well — so tools remove drag instead of adding another place to check.',
      incentive:  'Compensation, accountability, and scorecards tuned to the outcomes the business actually wants.',
      capital:    'A clear view of where capital and effort earn their return — and where value quietly leaks.',
      leadership: 'The cadence of meetings, decisions, and review that keeps the operating model alive and accountable.'
    };
    var fwStage = document.querySelector('.flower-stage');
    if ('IntersectionObserver' in window) {
      var fio = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { if (e.isIntersecting) { flowerEl.classList.add('drawn'); fio.disconnect(); } });
      }, { threshold: 0.3 });
      fio.observe(flowerEl);
    } else { flowerEl.classList.add('drawn'); }

    var setActive = function (key) {
      pillars.forEach(function (p) { p.classList.toggle('active', p.dataset.key === key); });
      petals.forEach(function (p) { p.classList.toggle('active', p.dataset.key === key); });
      if (descEl && copy[key]) descEl.textContent = copy[key];
    };
    var focusFlower = function (on) { flowerEl.classList.toggle('focused', on); };
    pillars.forEach(function (p) {
      p.addEventListener('mouseenter', function () { setActive(p.dataset.key); focusFlower(true); });
      p.addEventListener('focus', function () { setActive(p.dataset.key); focusFlower(true); });
      p.addEventListener('click', function () { setActive(p.dataset.key); });
    });
    petals.forEach(function (p) {
      p.addEventListener('mouseenter', function () { setActive(p.dataset.key); focusFlower(true); });
      p.addEventListener('click', function () { setActive(p.dataset.key); });
    });
    if (fwStage) fwStage.addEventListener('mouseleave', function () { focusFlower(false); });
    var pillarsWrap = document.getElementById('pillars');
    if (pillarsWrap) pillarsWrap.addEventListener('mouseleave', function () { focusFlower(false); });
  }

  /* ---- liquid hover light on service cards ---- */
  if (finePointer && !reduce) {
    document.querySelectorAll('.svc').forEach(function (card) {
      card.addEventListener('pointermove', function (e) {
        var r = card.getBoundingClientRect();
        card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
        card.style.setProperty('--my', (e.clientY - r.top) + 'px');
      });
    });
  }

  /* ---- magnetic CTA buttons ---- */
  if (finePointer && !reduce) {
    document.querySelectorAll('.btn-gold, .btn-primary').forEach(function (b) {
      if (b.classList.contains('menu-btn')) return;
      b.addEventListener('pointermove', function (e) {
        var r = b.getBoundingClientRect();
        b.style.setProperty('--bx', ((e.clientX - r.left - r.width / 2) * 0.18) + 'px');
        b.style.setProperty('--by', ((e.clientY - r.top - r.height / 2) * 0.28) + 'px');
      });
      b.addEventListener('pointerleave', function () { b.style.setProperty('--bx', '0px'); b.style.setProperty('--by', '0px'); });
    });
  }

  /* ---- count-up numbers ([data-count]) ---- */
  var counters = document.querySelectorAll('[data-count]');
  if (counters.length && 'IntersectionObserver' in window) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target, target = parseFloat(el.getAttribute('data-count')),
            suffix = el.getAttribute('data-suffix') || '', dur = 1100, t0 = null;
        if (reduce) { el.textContent = target + suffix; cio.unobserve(el); return; }
        var step = function (ts) {
          if (!t0) t0 = ts;
          var p = Math.min((ts - t0) / dur, 1);
          el.textContent = Math.round(target * (0.5 - Math.cos(Math.PI * p) / 2)) + suffix;
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        cio.unobserve(el);
      });
    }, { threshold: 0.6 });
    counters.forEach(function (c) { cio.observe(c); });
  }
})();
