/* Red/Blue Lens - shared: i18n, header, filter */
const $ = s => document.querySelector(s);
const L = {
  en: {
    title_cam:'Red/Blue Lens', title_make:'Red/Blue Lens - Make a puzzle',
    mode_n:'Normal', mode_r:'Red filter', mode_b:'Blue filter', mirror:'↔︎ Mirror the picture (read reversed text)',
    start:'▶︎ Start camera', retry:'Try again', reload:'Reload page', copyaddr:'Copy settings address', copied:'Copied. Paste it in a new tab.',
    g_title:'Camera access is blocked', g_intro:'The browser needs your permission to use the camera. To turn it on:',
    g_ios:'1. Tap the “aA” icon in the address bar.\n2. Tap Website Settings, then Camera, then Allow.\n3. Or open the Settings app, then Safari, then Camera, and choose Allow or Ask.\n4. Come back here and tap “Try again”.',
    g_android:'1. Tap the lock (or settings) icon next to the address.\n2. Tap Permissions, then Camera, then Allow.\n3. Or open Android Settings, then Apps, then your browser, then Permissions, then Camera, and choose Allow.\n4. Come back here and tap “Try again”.',
    g_desktop:'1. Click the lock or camera icon at the left of the address bar.\n2. Set Camera to Allow.\n3. Reload the page, or click “Try again”.',
    e_nocam:'No camera was found on this device.', e_busy:'The camera is being used by another app. Close it and tap “Try again”.', e_secure:'The camera only works on a secure (https) page.',
    
    tab_text:'✍️ Sentences', tab_shape:'🔷 Shapes', tab_img:'🖼 Upload image',
    mag_text:'Normal-view sentence (magenta, optional). Invisible through both filters, readable without one.', mag_shape:'Normal-view shape (magenta, optional)', none_shape:'— none —',
    opt_mirror:'Mirror (flip left to right, like in a mirror)', mir_b:'Blue', mir_r:'Red', mir_m:'Normal-view layer',
    hint_img:'Pick a picture or screenshot of a puzzle to see it through the red and blue filters.', pick_img:'Choose an image',
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
    mode_n:'عادي', mode_r:'فلتر أحمر', mode_b:'فلتر أزرق', mirror:'↔︎ اعكس الصورة (لقراءة الكلام المعكوس)',
    start:'▶︎ شغّل الكاميرا', retry:'حاول تاني', reload:'أعد تحميل الصفحة', copyaddr:'انسخ عنوان الإعدادات', copied:'اتنسخ. الصقه في تبويب جديد.',
    g_title:'الوصول للكاميرا مقفول', g_intro:'المتصفح محتاج إذنك عشان يستخدم الكاميرا. عشان تفتحها:',
    g_ios:'1. اضغط على أيقونة «aA» في شريط العنوان.\n2. اضغط إعدادات الموقع، ثم الكاميرا، ثم سماح.\n3. أو افتح تطبيق الإعدادات، ثم Safari، ثم الكاميرا، واختار سماح أو اسأل.\n4. ارجع هنا واضغط «حاول تاني».',
    g_android:'1. اضغط على أيقونة القفل (أو الإعدادات) جنب العنوان.\n2. اضغط الأذونات، ثم الكاميرا، ثم سماح.\n3. أو افتح إعدادات أندرويد، ثم التطبيقات، ثم المتصفح، ثم الأذونات، ثم الكاميرا، واختار سماح.\n4. ارجع هنا واضغط «حاول تاني».',
    g_desktop:'1. اضغط على أيقونة القفل أو الكاميرا على يسار شريط العنوان.\n2. خلي الكاميرا على سماح.\n3. أعد تحميل الصفحة، أو اضغط «حاول تاني».',
    e_nocam:'مفيش كاميرا على الجهاز ده.', e_busy:'الكاميرا مستخدمة في تطبيق تاني. اقفله واضغط «حاول تاني».', e_secure:'الكاميرا بتشتغل بس على صفحة آمنة (https).',
    
    tab_text:'✍️ جمل', tab_shape:'🔷 أشكال', tab_img:'🖼 ارفع صورة',
    mag_text:'جملة تتقرا بالعين العادية بس (ماجنتا، اختياري). بتختفي بالفلترين وبتتقرا من غير فلتر.', mag_shape:'شكل يتشاف بالعين العادية بس (ماجنتا، اختياري)', none_shape:'— مفيش —',
    opt_mirror:'عكس (قلب يمين وشمال زي المراية)', mir_b:'الأزرق', mir_r:'الأحمر', mir_m:'طبقة العين العادية',
    hint_img:'اختار صورة أو سكرين شوت للغز عشان تشوفها بالفلتر الأحمر والأزرق.', pick_img:'اختار صورة',
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

function buildHeader() {
  const h = document.createElement('header');
  h.innerHTML = '<button id="lang" type="button"></button>';
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
