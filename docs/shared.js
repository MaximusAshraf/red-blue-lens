/* Red/Blue Lens - shared: i18n, header, filter */
const $ = s => document.querySelector(s);
const L = {
  en: {
    title_cam:'Red/Blue Lens', title_make:'Red/Blue Lens - Make a puzzle',
    nav_cam:'📷 Camera', nav_make:'✏️ Make a puzzle',
    mode_n:'Normal', mode_r:'Red filter', mode_b:'Blue filter',
    clarity:'Clarity', start:'▶︎ Start camera', flip:'🔄 Flip', upload:'🖼 Photo', examples:'Try an example:',
    idle:'Tap “Start camera”, or pick an example below.\nThen switch between the red and blue filters.',
    cam_err:'Camera not available.\nAllow camera access and open this page over https.\nYou can still use “Photo” or an example.',
    tab_text:'✍️ Sentences', tab_shape:'🔷 Shapes',
    hint_text:'Write two sentences. They are drawn on top of each other, one in blue and one in red. By eye it is a mess. Through the red filter you see the blue one, through the blue filter you see the red one.',
    blue_text:'Blue sentence (shown by the red filter)', red_text:'Red sentence (shown by the blue filter)',
    hint_shape:'Pick two shapes. The blue one shows through the red filter, the red one through the blue filter.',
    blue_shape:'Blue shape (shown by the red filter)', red_shape:'Red shape (shown by the blue filter)',
    level:'Difficulty', lv0:'Easy (two shapes only)', lv1:'Medium (scribbles)', lv2:'Hard (lots of scribbles, tilted)', lv3:'Very hard (heavy noise, thick shape)',
    rnd:'🎲 Random shapes', reroll:'🔀 New noise', gen:'Make the puzzle',
    p_n:'The puzzle as printed', p_r:'Through the red filter', p_b:'Through the blue filter',
    dl:'⬇︎ Download PNG for printing', open_cam:'📷 Open in camera', presets:'Ready-made puzzles',
    s_happy:'😊 Happy face', s_angry:'😠 Angry face', s_heart:'❤️ Heart', s_star:'⭐ Star', s_cross:'✝️ Cross', s_house:'🏠 House',
    s_sun:'☀️ Sun', s_fish:'🐟 Fish', s_flower:'🌸 Flower', s_church:'⛪ Church', s_tree:'🌳 Tree', s_cat:'🐱 Cat',
    def_b:'Mina went to church early and met George then they bought ice cream',
    def_r:'Mary hid the gift under the bed and left a clue on a small note'
  },
  ar: {
    title_cam:'عدسة الأحمر والأزرق', title_make:'عدسة الأحمر والأزرق - اعمل لغز',
    nav_cam:'📷 الكاميرا', nav_make:'✏️ اعمل لغز',
    mode_n:'عادي', mode_r:'فلتر أحمر', mode_b:'فلتر أزرق',
    clarity:'الوضوح', start:'▶︎ شغّل الكاميرا', flip:'🔄 اقلب', upload:'🖼 صورة', examples:'جرّب مثال:',
    idle:'اضغط «شغّل الكاميرا» أو اختار مثال من تحت.\nوبعدين بدّل بين الفلتر الأحمر والأزرق.',
    cam_err:'الكاميرا مش متاحة.\nاسمح بالكاميرا وافتح الصفحة من رابط https.\nتقدر برضه تستخدم «صورة» أو مثال.',
    tab_text:'✍️ جمل', tab_shape:'🔷 أشكال',
    hint_text:'اكتب جملتين. هيتركبوا فوق بعض (واحدة أزرق وواحدة أحمر). بالعين مش مفهومة، وبالفلتر الأحمر هتشوف الزرقا وبالفلتر الأزرق هتشوف الحمرا.',
    blue_text:'الجملة الزرقا (بتظهر بالفلتر الأحمر)', red_text:'الجملة الحمرا (بتظهر بالفلتر الأزرق)',
    hint_shape:'اختار شكلين. الأزرق بيظهر بالفلتر الأحمر، والأحمر بيظهر بالفلتر الأزرق.',
    blue_shape:'الشكل الأزرق (بيظهر بالفلتر الأحمر)', red_shape:'الشكل الأحمر (بيظهر بالفلتر الأزرق)',
    level:'الصعوبة', lv0:'سهل (شكلين بس)', lv1:'متوسط (خطوط تشويش)', lv2:'صعب (تشويش كتير وأشكال مايلة)', lv3:'صعب جداً (تشويش كتير والشكل سميك)',
    rnd:'🎲 شكلين عشوائي', reroll:'🔀 بدّل التشويش', gen:'اعمل اللغز',
    p_n:'اللغز زي ما هيتطبع', p_r:'بالفلتر الأحمر', p_b:'بالفلتر الأزرق',
    dl:'⬇︎ نزّل الصورة للطباعة', open_cam:'📷 افتحه في الكاميرا', presets:'ألغاز جاهزة',
    s_happy:'😊 وش مبسوط', s_angry:'😠 وش زعلان', s_heart:'❤️ قلب', s_star:'⭐ نجمة', s_cross:'✝️ صليب', s_house:'🏠 بيت',
    s_sun:'☀️ شمس', s_fish:'🐟 سمكة', s_flower:'🌸 وردة', s_church:'⛪ كنيسة', s_tree:'🌳 شجرة', s_cat:'🐱 قطة',
    def_b:'مينا راح الكنيسة الصبح وقابل جورج وبعدها اشتروا آيس كريم',
    def_r:'مريم خبّت الهدية تحت السرير وكتبت الدليل على ورقة صغيرة'
  }
};
let lang = 'en';
try { const s = localStorage.getItem('rbl_lang'); if (s === 'ar' || s === 'en') lang = s; } catch (e) {}
const t = k => (L[lang] && L[lang][k]) || L.en[k] || k;

function buildHeader(page) {
  const h = document.createElement('header');
  h.innerHTML = '<a href="index.html" data-i="nav_cam"></a><a href="make.html" data-i="nav_make"></a><button id="lang" type="button"></button>';
  h.querySelector(page === 'cam' ? 'a[href="index.html"]' : 'a[href="make.html"]').classList.add('on');
  document.body.prepend(h);
  h.querySelector('#lang').onclick = () => { lang = lang === 'en' ? 'ar' : 'en'; try { localStorage.setItem('rbl_lang', lang); } catch (e) {} applyLang(); };
}
function applyLang() {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i]').forEach(e => e.textContent = t(e.dataset.i));
  document.title = t(document.body.dataset.title);
  const b = $('#lang'); if (b) b.textContent = lang === 'en' ? 'عربي' : 'EN';
  if (window.onLang) window.onLang();
}

/* Red filter: R channel is brightness (red ink vanishes, blue ink is dark).
   Blue filter: B channel is brightness (blue ink vanishes, red ink is dark). */
function filterInto(w, h, drawFn, out, mode, k) {
  out.width = w; out.height = h;
  const ctx = out.getContext('2d', { willReadFrequently: true });
  drawFn(ctx);
  if (mode === 'n') return;
  const img = ctx.getImageData(0, 0, w, h), d = img.data, ch = mode === 'r' ? 0 : 2;
  for (let i = 0; i < d.length; i += 4) {
    let v = (d[i + ch] - 140) * k + 140; v = v < 0 ? 0 : v > 255 ? 255 : v;
    if (mode === 'r') { d[i] = v; d[i + 1] = v * .18; d[i + 2] = v * .18; }
    else { d[i] = v * .18; d[i + 1] = v * .35; d[i + 2] = v; }
  }
  ctx.putImageData(img, 0, 0);
}
