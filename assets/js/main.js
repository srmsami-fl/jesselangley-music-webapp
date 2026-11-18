/* JESSE LANGLEY — main.js (Bootstrap 5 + vanilla JS) */
(function () {
  "use strict";
  const S = window.SITE, $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const url = f => S.imgBase + encodeURI(f);
  const L = v => (Array.isArray(v) ? v : [v]).filter(Boolean);
  /* try each candidate file in order, use the first that exists */
  function first(files, ok, fail) { let i = 0; (function next() { if (i >= files.length) { if (fail) fail(); return; }
    const im = new Image(); im.onload = () => ok(files[i]); im.onerror = () => { i++; next(); }; im.src = url(files[i]); })(); }
  console.info("%cWebsite by SRM卝SAMIヅ", "color:#e8a94d;font-weight:bold");

  /* pictures from config */
  $$("img[data-img]").forEach(el => { const k = el.dataset.img; if (!S.img[k]) return; if (S.pos[k]) el.style.objectPosition = S.pos[k];
    first(L(S.img[k]), f => { el.src = url(f); }, () => { el.hidden = true; }); });
  $$("[data-bg]").forEach(el => { const k = el.dataset.bg; if (!S.img[k]) return;
    first(L(S.img[k]), f => { el.style.setProperty("--img", `url("${new URL(url(f), document.baseURI).href}")`); el.classList.add("has-img"); }); });
  $$("img[data-logo]").forEach(el => { const f = L(S.img[el.dataset.logo])[0]; if (!f) return;
    el.addEventListener("load", () => { el.classList.add("on"); const t = el.parentElement.querySelector(".brand-txt"); if (t) t.hidden = true; }); el.src = url(f); });
  const fav = $("link[rel=icon]"); if (fav && S.img.favicon) fav.href = url(L(S.img.favicon)[0]);

  /* social icons */
  const IC = { youtube: '<rect x="2.5" y="5" width="19" height="14" rx="4"/><path d="M10 9.5v5l4.5-2.5z" fill="currentColor"/>',
    spotify: '<circle cx="12" cy="12" r="9.5"/><path d="M6.8 9.6c3.4-1 7-.7 10.2 1M7.4 12.7c2.8-.8 5.6-.5 8.2.9M8 15.6c2.2-.5 4.3-.3 6.3.7"/>',
    soundcloud: '<path d="M3 14v3M6 12v5M9 10v7M12 8.5V17h6.2a3 3 0 0 0 .3-6A5.5 5.5 0 0 0 12 8.5z"/>',
    threads: '<path d="M17.5 9c-.7-2.6-2.7-4-5.5-4-3.8 0-6 2.7-6 7s2.2 7 6 7c3.200 0 5-1.700 5-4 0-2.500-2.200-3.600-4.600-3.600-1.700 0-2.800.8-2.800 2 0 1.200 1.100 1.900 2.500 1.900 2.200 0 3.400-1.400 3.400-4.300"/>',
    tiktok: '<path d="M14 4v10.5a3.5 3.5 0 1 1-3.5-3.5M14 4c.4 2.4 2 3.9 4.5 4"/>',
    instagram: '<rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17" cy="7" r=".8" fill="currentColor"/>',
    facebook: '<path d="M14 21v-8h2.7l.5-3.2H14V8c0-.9.4-1.6 1.7-1.6h1.6V3.5c-.4-.1-1.3-.2-2.3-.2-2.6 0-4.1 1.5-4.1 4.2v2.3H8.2V13h2.7v8z"/>' };
  const svg = n => `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${IC[n]}</svg>`;
  $$("[data-social]").forEach(b => { b.innerHTML = Object.keys(S.platforms).map(k => `<a class="soc" href="${esc(S.platforms[k].url)}" target="_blank" rel="noopener" aria-label="${S.platforms[k].name}">${svg(k)}</a>`).join(""); });
  $$("[data-platforms]").forEach(b => { b.innerHTML = Object.keys(S.platforms).map(k => `<a class="plat" href="${esc(S.platforms[k].url)}" target="_blank" rel="noopener">${svg(k)}<span>${S.platforms[k].name}</span></a>`).join(""); });

  /* navbar + progress + back to top */
  const nav = $("#nav"), prog = $("#prog"), top = $("#totop");
  const onS = () => { const y = scrollY, h = document.documentElement.scrollHeight - innerHeight;
    nav.classList.toggle("solid", y > 40 || $("#menu").classList.contains("show")); prog.style.width = (h > 0 ? y / h * 100 : 0) + "%"; top.hidden = y < 700; };
  addEventListener("scroll", onS, { passive: true }); onS();
  ["show.bs.collapse", "hidden.bs.collapse"].forEach(ev => $("#menu").addEventListener(ev, () => setTimeout(onS, 10)));
  top.addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));
  $$("#menu .nav-link").forEach(a => a.addEventListener("click", () => { const m = bootstrap.Collapse.getInstance($("#menu")); if (m) m.hide(); }));

  /* lightbox (Bootstrap modal) */
  const lbEl = $("#lbModal"), lb = new bootstrap.Modal(lbEl); let items = [], idx = 0;
  const show = () => { const it = items[idx]; $("#lbImg").src = it.src; $("#lbImg").alt = it.cap; $("#lbCap").textContent = it.cap; $("#lbN").textContent = `${idx + 1} / ${items.length}`; };
  const go = d => { idx = (idx + d + items.length) % items.length; show(); };
  function openLb(list, i) { items = list; idx = i; show(); lb.show(); }
  $("#lbPrev").addEventListener("click", () => go(-1)); $("#lbNext").addEventListener("click", () => go(1));
  lbEl.addEventListener("keydown", e => { if (e.key === "ArrowRight") go(1); if (e.key === "ArrowLeft") go(-1); });
  let x0 = null; lbEl.addEventListener("touchstart", e => { x0 = e.touches[0].clientX; }, { passive: true });
  lbEl.addEventListener("touchend", e => { if (x0 === null) return; const d = e.changedTouches[0].clientX - x0; if (Math.abs(d) > 50) go(d < 0 ? 1 : -1); x0 = null; });
  lbEl.addEventListener("hidden.bs.modal", () => { $("#lbImg").src = ""; });

  /* childhood + gallery + award */
  const chB = $("#childhood");
  if (chB) { const L = S.childhood.map(c => ({ src: url(c.file), cap: c.cap }));
    chB.innerHTML = S.childhood.map((c, i) => `<div class="col-6 ${i === 0 ? "col-lg-4" : "col-lg-4"}"><figure class="polaroid" data-rv><button class="pol-btn" data-i="${i}" aria-label="Open photo: ${esc(c.cap)}"><img src="${url(c.file)}" alt="${esc(c.cap)}" loading="lazy" onerror="this.closest('.col-6').hidden=true"></button><figcaption>${esc(c.cap)}</figcaption></figure></div>`).join("");
    chB.addEventListener("click", e => { const b = e.target.closest(".pol-btn"); if (b) openLb(L, +b.dataset.i); }); }
  const gB = $("#gallery");
  if (gB) { const L = S.gallery.map((f, i) => ({ src: url(f), cap: `Jesse Langley, photo ${i + 1}` }));
    gB.innerHTML = S.gallery.map((f, i) => `<button class="g" data-i="${i}" aria-label="Open photo ${i + 1}"><img src="${url(f)}" alt="Jesse Langley, photo ${i + 1}" loading="lazy" onerror="this.parentElement.hidden=true"></button>`).join("");
    gB.addEventListener("click", e => { const b = e.target.closest(".g"); if (b) openLb(L, +b.dataset.i); }); }
  $$("[data-zoom]").forEach(el => el.addEventListener("click", () => openLb([{ src: el.querySelector("img").src, cap: el.dataset.zoom }], 0)));

  /* YouTube Shorts */
  const ytId = u => { const m = String(u).match(/(?:shorts\/|v=|youtu\.be\/|embed\/)([\w-]{6,})/); return m ? m[1] : (/^[\w-]{6,}$/.test(u) ? u : ""); };
  const ytEl = $("#ytModal"), yt = new bootstrap.Modal(ytEl);
  $$("[data-shorts]").forEach(box => { const lim = +box.dataset.limit || S.shorts.length, list = S.shorts.slice(0, lim);
    box.innerHTML = list.map((s, i) => { const id = ytId(s.url); return `<div class="${box.dataset.cols || "col-6 col-md-4 col-lg-3"}"><button class="short ratio ratio-9x16" data-id="${id}" data-t="${esc(s.title)}" aria-label="Play ${esc(s.title)}">
      <span><img src="https://i.ytimg.com/vi/${id}/hq720.jpg" alt="" loading="lazy" data-id="${id}"><i class="play" aria-hidden="true"><svg viewBox="0 0 24 24" width="26" height="26"><path d="M8 5.5v13l11-6.5z" fill="currentColor"/></svg></i><b>${esc(s.title)}</b></span></button></div>`; }).join("");
    $$("img[data-id]", box).forEach(im => { const fb = () => { if (!im.dataset.f) { im.dataset.f = 1; im.src = `https://i.ytimg.com/vi/${im.dataset.id}/hqdefault.jpg`; } else im.hidden = true; };
      im.addEventListener("error", fb); im.addEventListener("load", () => { if (im.naturalWidth < 200) fb(); }); });
    box.addEventListener("click", e => { const b = e.target.closest(".short"); if (!b) return;
      $("#ytTitle").textContent = b.dataset.t; $("#ytLink").href = `https://www.youtube.com/shorts/${b.dataset.id}`;
      $("#ytFrame").src = `https://www.youtube-nocookie.com/embed/${b.dataset.id}?autoplay=1&rel=0&playsinline=1`; yt.show(); }); });
  ytEl.addEventListener("hidden.bs.modal", () => { $("#ytFrame").src = ""; });

  /* contact form -> Formspree */
  const f = $("#contactForm");
  if (f) f.addEventListener("submit", async e => { e.preventDefault(); f.classList.add("was-validated"); if (!f.checkValidity()) return;
    if ($("#website").value) return; /* honeypot */
    const btn = $("button[type=submit]", f), ok = $("#formOk"), bad = $("#formBad"); btn.disabled = true; btn.textContent = "Sending..."; bad.hidden = true;
    try { const r = await fetch(S.formspree, { method: "POST", body: new FormData(f), headers: { Accept: "application/json" } });
      if (!r.ok) throw new Error("bad"); f.hidden = true; ok.hidden = false; ok.focus(); }
    catch (_) { bad.hidden = false; btn.disabled = false; btn.textContent = "Send message"; } });


  /* lyrics + poems (cards + reader modal) */
  const lyrEl = $("#lyrModal"), lyr = new bootstrap.Modal(lyrEl), all = { l: S.lyrics, p: S.poems };
  const card = (t, i, k) => `<div class="col-md-6 col-lg-4"><article class="paper" data-rv><span class="ptag">${esc(t.theme)}</span><h3>${esc(t.title)}</h3>
    <p class="snip">${t.sections[0].lines.slice(0, 3).map(esc).join("<br>")}</p><button class="btn btn-sm btn-outline-dark" data-lyr="${k}${i}">Read in full</button><em class="demo">Sample</em></article></div>`;
  $$("[data-lyrics]").forEach(b => { const n = +b.dataset.limit || S.lyrics.length; b.innerHTML = S.lyrics.slice(0, n).map((t, i) => card(t, i, "l")).join(""); });
  $$("[data-poems]").forEach(b => { b.innerHTML = S.poems.map((t, i) => card(t, i, "p")).join(""); });
  document.addEventListener("click", e => { const b = e.target.closest("[data-lyr]"); if (!b) return; const t = all[b.dataset.lyr[0]][+b.dataset.lyr.slice(1)];
    $("#lyrTitle").textContent = t.title; $("#lyrTheme").textContent = t.theme;
    $("#lyrBody").innerHTML = t.sections.map(s => `${s.label ? `<h4 class="sl">${esc(s.label)}</h4>` : ""}<p>${s.lines.map(esc).join("<br>")}</p>`).join(""); lyr.show(); });

  /* gallery mosaic (home) */
  $$("[data-mosaic]").forEach(b => { const n = +b.dataset.mosaic, Lm = S.gallery.map((f, i) => ({ src: url(f), cap: `Jesse Langley, photo ${i + 1}` }));
    b.innerHTML = S.gallery.slice(0, n).map((f, i) => `<button class="m m${i}" data-i="${i}" aria-label="Open photo ${i + 1}"><img src="${url(f)}" alt="Jesse Langley, photo ${i + 1}" loading="lazy" onerror="this.parentElement.hidden=true"></button>`).join("");
    b.addEventListener("click", e => { const x = e.target.closest(".m"); if (x) openLb(Lm, +x.dataset.i); }); });

  /* count-up numbers */
  const cu = $$("[data-count]");
  if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const io2 = new IntersectionObserver(es => es.forEach(en => { if (!en.isIntersecting) return; io2.unobserve(en.target); const el = en.target, to = +el.dataset.count; let n = 0;
      const step = () => { n += Math.max(1, Math.round(to / 24)); if (n >= to) { el.textContent = to; return; } el.textContent = n; requestAnimationFrame(step); }; step(); }), { threshold: .6 });
    cu.forEach(el => io2.observe(el)); }

  /* scroll reveal */
  const rv = $$("[data-rv]");
  if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), { threshold: .12 });
    rv.forEach(el => { el.classList.add("rv"); io.observe(el); });
  }
})();
