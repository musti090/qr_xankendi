/*
 * Sərgi bələdçisi — tətbiq məntiqi.
 *
 * Marşrutlar:
 *   index.html               -> bütün əsərlər (qalereya)
 *   index.html#<eser-id>     -> əsər səhifəsi (əvvəlcə əsər, sonra müəllif)
 *   index.html?eser=<id>     -> eyni əsər səhifəsi (QR üçün alternativ)
 */
(function () {
  "use strict";

  var data = window.SERGI;
  if (!data) return;

  var SITE = data.SITE;
  var AUTHORS = data.AUTHORS;
  var WORKS = data.WORKS;
  var TOTAL = WORKS.length;

  var authorsById = {};
  AUTHORS.forEach(function (a) { authorsById[a.id] = a; });

  var indexById = {};
  WORKS.forEach(function (w, i) { indexById[w.id] = i; });

  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  var header = $(".topbar");
  var main = $("#main");
  var topbar = $("#topbar");
  var lightbox = $("#lightbox");
  var lbImg = $("#lb-img");
  var lbCap = $("#lb-cap");
  var lbClose = $("#lb-close");

  var state = {
    view: null,
    work: null,
    filter: "all",
    lastWorkId: null,
    firstRender: true,
    lastFocus: null,
    lbWork: null,
    lbTimer: null
  };

  if ("scrollRestoration" in history) history.scrollRestoration = "manual";

  /* ---------- Animasiya ---------- */

  // "Hərəkəti azalt" seçilibsə və ya brauzer dəstəkləmirsə, animasiya olmur
  var reduceMotion = !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  var canAnimate = !reduceMotion && "IntersectionObserver" in window;
  if (canAnimate) document.documentElement.classList.add("anim");

  var observer = canAnimate
    ? new IntersectionObserver(function (entries) {
        var n = 0;
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          observer.unobserve(entry.target);
          reveal(entry.target, n++ * 90);
        });
      }, { rootMargin: "0px 0px -6% 0px", threshold: 0.01 })
    : null;

  function reveal(el, delay) {
    el.style.setProperty("--d", Math.min(delay || 0, 900) + "ms");
    el.classList.add("is-in");
  }

  // Görünən elementləri dərhal (növbə ilə), qalanlarını sürüşdürəndə göstər
  function setupReveals() {
    var items = $$("[data-reveal]", main);
    if (!canAnimate) {
      items.forEach(function (el) { el.classList.add("is-in"); });
      return;
    }
    void main.offsetWidth; // ilkin (gizli) vəziyyəti tətbiq et ki, keçid baş versin
    var vh = window.innerHeight || document.documentElement.clientHeight;
    var n = 0;
    items.forEach(function (el) {
      if (el.classList.contains("is-in")) return;
      var r = el.getBoundingClientRect();
      var hasBox = r.width > 0 || r.height > 0;
      if (hasBox && r.top < vh * 0.94 && r.bottom > 0) reveal(el, n++ * 85);
      else observer.observe(el);
    });
  }

  // Başlığı sözlərə böl: hər söz maskanın altından qalxır
  function splitWords(text) {
    return String(text).split(/\s+/).filter(Boolean).map(function (word, i) {
      return '<span class="w"><span style="--i:' + i + '">' + esc(word) + "</span></span>";
    }).join(" ");
  }

  /* ---------- Köməkçilər ---------- */

  function esc(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  var ICONS = {
    back: '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M15 18l-6-6 6-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    prev: '<svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d="M15 18l-6-6 6-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    next: '<svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    zoom: '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><circle cx="11" cy="11" r="6.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M16 16l4.5 4.5M11 8.5v5M8.5 11h5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    down: '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M12 5v14M6 13l6 6 6-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  };

  function workUrl(id) {
    return "#" + encodeURIComponent(id);
  }

  function metaRows(w) {
    var rows = [];
    if (w.medium) rows.push(["Material", w.medium]);
    if (w.size) rows.push(["Ölçü", w.size]);
    if (w.collection) rows.push(["Kolleksiya", w.collection]);
    return rows;
  }

  function cardMeta(w) {
    return [w.medium, w.size].filter(Boolean).join(" · ") || w.collection || "";
  }

  function renderBlocks(blocks) {
    return blocks.map(function (b) {
      if (b && b.poem) {
        return '<blockquote class="poem">' +
          b.poem.map(function (line) { return '<p data-reveal="line">' + esc(line) + "</p>"; }).join("") +
          "</blockquote>";
      }
      return "<p data-reveal>" + esc(b) + "</p>";
    }).join("");
  }

  function focusHeading() {
    var h = $("h1", main);
    if (h) {
      h.setAttribute("tabindex", "-1");
      h.focus({ preventScroll: true });
    }
  }

  function smoothBehavior() {
    return canAnimate ? "smooth" : "auto";
  }

  /* ---------- Üst panel ---------- */

  function renderTopbar(view, w) {
    if (view === "work") {
      var i = indexById[w.id];
      topbar.innerHTML =
        '<a class="back-btn" href="#/">' + ICONS.back + "<span>Bütün əsərlər</span></a>" +
        '<span class="counter" aria-label="Əsər ' + (i + 1) + ", cəmi " + TOTAL + '">' + (i + 1) + " / " + TOTAL + "</span>";
    } else {
      topbar.innerHTML =
        '<a class="brand" href="#/"><span class="brand-mark" aria-hidden="true"></span>' + esc(SITE.brand) + "</a>" +
        '<span class="counter">' + TOTAL + " əsər</span>";
    }
  }

  function updateTopbarShadow() {
    header.classList.toggle("is-scrolled", (window.pageYOffset || document.documentElement.scrollTop) > 8);
  }

  /* ---------- Qalereya ---------- */

  function galleryHTML() {
    var chips = ['<button type="button" class="chip" data-filter="all" aria-pressed="false">Hamısı <span class="chip-count">' + TOTAL + "</span></button>"];
    AUTHORS.forEach(function (a) {
      var count = WORKS.filter(function (w) { return w.author === a.id; }).length;
      chips.push('<button type="button" class="chip" data-filter="' + esc(a.id) + '" aria-pressed="false">' +
        esc(a.name) + ' <span class="chip-count">' + count + "</span></button>");
    });

    var cards = WORKS.map(function (w) {
      var a = authorsById[w.author];
      return '<li class="card" data-reveal data-id="' + esc(w.id) + '" data-author="' + esc(w.author) + '">' +
        '<a class="card-link" href="' + workUrl(w.id) + '">' +
          '<div class="wall wall-thumb">' +
            '<img src="' + esc(w.image) + '" alt="' + esc(w.alt) + '" width="' + w.w + '" height="' + w.h + '" loading="lazy" decoding="async">' +
          "</div>" +
          '<div class="card-body">' +
            '<h2 class="card-title">' + esc(w.title) + "</h2>" +
            '<p class="card-author">' + esc(a.name) + "</p>" +
            (cardMeta(w) ? '<p class="card-meta">' + esc(cardMeta(w)) + "</p>" : "") +
          "</div>" +
        "</a></li>";
    }).join("");

    return '<section class="container hero">' +
        '<p class="eyebrow" data-reveal>' + esc(SITE.eyebrow) + "</p>" +
        '<h1 class="hero-title split" data-reveal="split">' + splitWords(SITE.title) + "</h1>" +
        '<p class="hero-lede" data-reveal>' + TOTAL + " əsər · " + AUTHORS.length + " rəssam. " + esc(SITE.lede) + "</p>" +
      "</section>" +
      '<section class="container" aria-label="Əsərlərin siyahısı">' +
        '<div class="chips" role="group" aria-label="Rəssama görə süz" data-reveal="fade">' + chips.join("") + "</div>" +
        '<ul class="grid">' + cards + "</ul>" +
      "</section>";
  }

  function applyFilter(filter, animate) {
    if (filter !== "all" && !authorsById[filter]) filter = "all";
    state.filter = filter;
    $$(".chip", main).forEach(function (chip) {
      chip.setAttribute("aria-pressed", String(chip.getAttribute("data-filter") === filter));
    });

    var shown = [];
    $$(".card", main).forEach(function (card) {
      var show = filter === "all" || card.getAttribute("data-author") === filter;
      card.hidden = !show;
      if (show) shown.push(card);
    });

    // Filtr dəyişəndə görünən kartlar növbə ilə yenidən üzə çıxır
    if (animate && canAnimate && shown.length) {
      shown.forEach(function (card) {
        observer.unobserve(card);
        card.classList.remove("is-in");
        card.style.setProperty("--d", "0ms");
      });
      void main.offsetWidth;
      shown.forEach(function (card, k) { reveal(card, k * 70); });
    }
  }

  function showGallery() {
    state.view = "gallery";
    state.work = null;
    if (observer) observer.disconnect();
    renderTopbar("gallery");
    main.innerHTML = galleryHTML();
    applyFilter(state.filter, false);
    document.title = SITE.title + " | " + SITE.brand;

    var card = state.lastWorkId && $('.card[data-id="' + state.lastWorkId + '"]', main);
    if (card && !card.hidden) {
      card.scrollIntoView({ block: "center" });
      var link = $(".card-link", card);
      if (link && !state.firstRender) link.focus({ preventScroll: true });
    } else {
      window.scrollTo(0, 0);
      if (!state.firstRender) focusHeading();
    }
    // Aktiv çipi görünən yerə gətir
    var active = $('.chip[aria-pressed="true"]', main);
    if (active && active.scrollIntoView && state.filter !== "all") {
      active.scrollIntoView({ block: "nearest", inline: "center" });
    }
    setupReveals();
    updateTopbarShadow();
  }

  /* ---------- Əsər səhifəsi ---------- */

  function workHTML(w) {
    var a = authorsById[w.author];
    var i = indexById[w.id];
    var prev = WORKS[(i - 1 + TOTAL) % TOTAL];
    var next = WORKS[(i + 1) % TOTAL];
    var others = WORKS.filter(function (x) { return x.author === a.id && x.id !== w.id; });
    var showYears = a.lifespan && /^\d{4}–\d{4}$/.test(a.lifespan);

    var meta = metaRows(w).map(function (r) {
      return "<dt>" + esc(r[0]) + "</dt><dd>" + esc(r[1]) + "</dd>";
    }).join("");

    var othersHTML = "";
    if (others.length) {
      othersHTML = '<h3 class="more-title" data-reveal>Rəssamın digər əsərləri</h3><ul class="mini-grid">' +
        others.map(function (o) {
          return '<li data-reveal><a class="mini-link" href="' + workUrl(o.id) + '">' +
            '<div class="wall wall-thumb"><img src="' + esc(o.image) + '" alt="" width="' + o.w + '" height="' + o.h + '" loading="lazy" decoding="async"></div>' +
            '<span class="mini-title">' + esc(o.title) + "</span></a></li>";
        }).join("") + "</ul>";
    }

    return '<article class="work" aria-labelledby="work-title">' +
        '<div class="container work-grid">' +
          '<figure class="work-figure">' +
            '<button type="button" class="wall zoom-btn" data-zoom aria-label="Şəkli böyüt: ' + esc(w.title) + '">' +
              '<img data-reveal="painting" src="' + esc(w.image) + '" alt="' + esc(w.alt) + '" width="' + w.w + '" height="' + w.h + '" style="max-width:' + Math.round(w.w * 2.6) + 'px" decoding="async" fetchpriority="high">' +
              '<span class="zoom-hint" data-reveal="fade" aria-hidden="true">' + ICONS.zoom + "Böyüt</span>" +
            "</button>" +
          "</figure>" +
          '<div class="work-info">' +
            '<p class="eyebrow" data-reveal>Əsər haqqında məlumat</p>' +
            '<h1 class="work-title split" id="work-title" data-reveal="split">' + splitWords(w.title) + "</h1>" +
            '<p class="work-author" data-reveal>Müəllif: <button type="button" class="link-btn" data-goto-author>' + esc(a.name) + "</button>" +
              (showYears ? " (" + esc(a.lifespan) + ")" : "") + "</p>" +
            (meta ? '<dl class="meta" data-reveal>' + meta + "</dl>" : '<div style="height:22px"></div>') +
            '<h2 class="section-title" data-reveal>Əsər haqqında</h2>' +
            '<div class="prose">' + renderBlocks(w.description) + "</div>" +
            '<div class="actions" data-reveal>' +
              '<button type="button" class="pill-btn primary" data-goto-author>' + ICONS.down + "Müəllif haqqında</button>" +
            "</div>" +
          "</div>" +
        "</div>" +
      "</article>" +
      '<section class="author" id="muellif" aria-labelledby="author-name">' +
        '<div class="container">' +
          '<div class="author-layout">' +
            '<div class="portrait-wrap" data-reveal="curtain">' +
              '<img class="portrait" src="' + esc(a.photo) + '" alt="' + esc(a.photoAlt) + '" style="object-position:' + esc(a.focus || "50% 30%") + '" loading="lazy" decoding="async">' +
            "</div>" +
            "<div>" +
              '<p class="eyebrow" data-reveal>Müəllif haqqında</p>' +
              '<h2 class="author-name split" id="author-name" tabindex="-1" data-reveal="split">' + splitWords(a.name) + "</h2>" +
              '<p class="author-sub" data-reveal>' + esc(a.lifespan) + (a.role ? '<span class="dot" aria-hidden="true">·</span>' + esc(a.role) : "") + "</p>" +
              '<div class="prose">' + renderBlocks(a.bio) + "</div>" +
              othersHTML +
            "</div>" +
          "</div>" +
        "</div>" +
      "</section>" +
      '<nav class="container pager" aria-label="Əsərlər arasında keçid">' +
        '<a class="pager-link prev" data-reveal href="' + workUrl(prev.id) + '" rel="prev">' +
          '<span class="pager-label">' + ICONS.prev + "Əvvəlki əsər</span>" +
          '<span class="pager-title">' + esc(prev.title) + "</span></a>" +
        '<a class="pager-link next" data-reveal href="' + workUrl(next.id) + '" rel="next">' +
          '<span class="pager-label">Növbəti əsər' + ICONS.next + "</span>" +
          '<span class="pager-title">' + esc(next.title) + "</span></a>" +
      "</nav>";
  }

  function showWork(w) {
    var a = authorsById[w.author];
    state.view = "work";
    state.work = w;
    state.lastWorkId = w.id;
    if (observer) observer.disconnect();
    renderTopbar("work", w);
    main.innerHTML = workHTML(w);
    document.title = w.title + " — " + a.name + " | " + SITE.brand;
    window.scrollTo(0, 0);
    setupReveals();
    updateTopbarShadow();
    if (!state.firstRender) focusHeading();

    // Növbəti əsərin şəklini əvvəlcədən yüklə
    var next = WORKS[(indexById[w.id] + 1) % TOTAL];
    var pre = new Image();
    pre.src = next.image;
  }

  function scrollToAuthor() {
    var section = $("#muellif");
    if (!section) return;
    section.scrollIntoView({ behavior: smoothBehavior(), block: "start" });
    var h = $("#author-name");
    if (h) h.focus({ preventScroll: true });
  }

  /* ---------- Marşrutlaşdırma ---------- */

  function currentId() {
    var hash = location.hash;
    if (hash) {
      try { return decodeURIComponent(hash.slice(1)).replace(/^\/+/, ""); }
      catch (e) { return ""; }
    }
    var params = new URLSearchParams(location.search);
    return params.get("eser") || "";
  }

  function route() {
    closeLightbox({ instant: true, restoreFocus: false });
    var id = currentId();
    var w = Object.prototype.hasOwnProperty.call(indexById, id) ? WORKS[indexById[id]] : null;
    if (w) showWork(w);
    else showGallery();
    state.firstRender = false;
  }

  function go(id) {
    location.hash = workUrl(id);
  }

  /* ---------- Böyüdülmüş görünüş ---------- */

  function lightboxIsOpen() {
    return !lightbox.hidden && !lightbox.classList.contains("is-closing");
  }

  function openLightbox(w) {
    var a = authorsById[w.author];
    clearTimeout(state.lbTimer);
    lightbox.classList.remove("is-closing");
    state.lastFocus = document.activeElement;
    lbImg.src = w.image;
    lbImg.alt = w.alt;
    state.lbWork = w;
    sizeLightbox();
    lbCap.innerHTML = esc(w.title) + "<span>" + esc(a.name) + (w.size ? " · " + esc(w.size) : "") + "</span>";
    lightbox.hidden = false;
    document.body.classList.add("no-scroll");
    lbClose.focus();
  }

  // Şəkli ekrana sığacaq qədər böyüt (aşağı keyfiyyətli şəkilləri 3 dəfədən çox yox)
  function sizeLightbox() {
    var w = state.lbWork;
    if (!w) return;
    var maxW = window.innerWidth - 24;
    var maxH = window.innerHeight - 150;
    var scale = Math.max(0.1, Math.min(maxW / w.w, maxH / w.h, 3));
    lbImg.style.width = Math.round(w.w * scale) + "px";
    lbImg.style.height = Math.round(w.h * scale) + "px";
  }

  function finishClose() {
    lightbox.hidden = true;
    lightbox.classList.remove("is-closing");
    lbImg.removeAttribute("src");
  }

  function closeLightbox(opts) {
    opts = opts || {};
    if (lightbox.hidden) return;
    var alreadyClosing = lightbox.classList.contains("is-closing");
    if (!alreadyClosing) {
      state.lbWork = null;
      document.body.classList.remove("no-scroll");
      if (opts.restoreFocus !== false && state.lastFocus && document.contains(state.lastFocus)) {
        state.lastFocus.focus({ preventScroll: true });
      }
      state.lastFocus = null;
    }
    clearTimeout(state.lbTimer);
    if (opts.instant || !canAnimate) {
      finishClose();
    } else if (!alreadyClosing) {
      lightbox.classList.add("is-closing");
      state.lbTimer = setTimeout(finishClose, 220);
    }
  }

  /* ---------- Hadisələr ---------- */

  document.addEventListener("click", function (e) {
    var t = e.target;
    if (!(t instanceof Element)) return;

    var filterBtn = t.closest("[data-filter]");
    if (filterBtn) {
      applyFilter(filterBtn.getAttribute("data-filter"), true);
      return;
    }
    if (t.closest("[data-zoom]") && state.work) {
      openLightbox(state.work);
      return;
    }
    if (t.closest("[data-goto-author]")) {
      scrollToAuthor();
      return;
    }
    if (t.closest("[data-top]")) {
      window.scrollTo({ top: 0, behavior: smoothBehavior() });
      return;
    }
  });

  lightbox.addEventListener("click", function () { closeLightbox(); });

  document.addEventListener("keydown", function (e) {
    if (!lightbox.hidden) {
      if (!lightboxIsOpen()) return;
      if (e.key === "Escape") { e.preventDefault(); closeLightbox(); }
      else if (e.key === "Tab") { e.preventDefault(); lbClose.focus(); }
      return;
    }
    if (state.view !== "work" || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
    var tag = (document.activeElement && document.activeElement.tagName) || "";
    if (/^(INPUT|TEXTAREA|SELECT)$/.test(tag)) return;
    var i = indexById[state.work.id];
    if (e.key === "ArrowLeft") go(WORKS[(i - 1 + TOTAL) % TOTAL].id);
    else if (e.key === "ArrowRight") go(WORKS[(i + 1) % TOTAL].id);
  });

  // Şəkil yüklənməsə, yerində qeyd göstər
  document.addEventListener("error", function (e) {
    var t = e.target;
    if (t && t.tagName === "IMG") {
      var holder = t.closest(".wall");
      if (holder) holder.classList.add("img-missing");
    }
  }, true);

  window.addEventListener("hashchange", route);
  window.addEventListener("resize", function () { if (lightboxIsOpen()) sizeLightbox(); });
  window.addEventListener("scroll", updateTopbarShadow, { passive: true });

  $("#footer-text").textContent = SITE.brand + " · " + TOTAL + " əsər, " + AUTHORS.length + " rəssam";

  route();
})();
