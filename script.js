// ====== إعدادات المتجر ======
const STORE = {
  name: "شركة أبو سيفين للتجارة",
  phone: "201142002900" // رقم الواتساب بصيغة دولية
};

// صورة بديلة تظهر لو صورة المنتج لسه مترفعتش
const PLACEHOLDER = "data:image/svg+xml;utf8," + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect width="400" height="300" fill="#eef3fa"/><g fill="none" stroke="#90a4c4" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"><rect x="130" y="100" width="140" height="90" rx="12"/><circle cx="200" cy="145" r="22"/><path d="M130 215h140"/></g></svg>'
);

// ====== المنتجات ======
// category: "motors" أو "accessories"
// img: ضع صورة المنتج بجانب الملفات بنفس الاسم (أو غيّر الاسم هنا)
const PRODUCTS = [
  // ---- مواتير المياه ----
  {
    category: "motors", name: "Gent - موتور مياه 1 حصان", origin: "Made in Germany 🇩🇪",
    price: 3800, img: "gent.jpg",
    specs: ["موبينة 6 بقطر كبير", "ملفات نحاس 100%", "عمود استانلس ستيل", "مروحة نحاس ووش توجيه زهر", "عزل ضد الصدأ ومعالج حرارياً", "مزود بشيك بلف، يد، وفيشة", "فتحة دخول وخروج 1 بوصة"]
  },
  {
    category: "motors", name: "Carlos - موتور 1 حصان (JET-70)", origin: "Made in Germany 🇩🇪",
    price: 4100, img: "carlos.jpg",
    specs: ["موبينة 7 بقطر كبير", "ملفات نحاس 100%", "عمود استانلس ستيل", "مروحة نحاس ووش توجيه زهر", "عزل ضد الصدأ ومعالج حرارياً", "مزود بشيك بلف، يد، وفيشة", "فتحة دخول وخروج 1 بوصة"]
  },
  {
    category: "motors", name: "Shox - موتور 1 حصان (JET-50)", origin: "Made in Germany 🇩🇪",
    price: 3300, img: "shox.jpg",
    specs: ["موبينة 5 بقطر كبير", "ملفات نحاس 100%", "عمود استانلس ستيل", "مروحة نحاس ووش توجيه زهر", "عزل ضد الصدأ ومعالج حرارياً", "مزود بشيك بلف، يد، وفيشة", "فتحة دخول وخروج 1 بوصة"]
  },
  {
    category: "motors", name: "Stefano - موتور (JET-80G)", origin: "Made in Italy 🇮🇹",
    price: 4500, img: "stefano.jpg",
    specs: ["موبينة 8", "ملفات نحاس 100%", "عمود استانلس ستيل", "مروحة نحاس ووش توجيه زهر", "عزل ضد الصدأ ومعالج حرارياً", "فتحة دخول وخروج 1 بوصة"]
  },
  {
    category: "motors", name: "Sero - موتور (JET MB60)", origin: "Made in China 🇨🇳",
    price: 1750, img: "sero.jpg",
    specs: ["موبينة 5", "تحضير ذاتي", "فتحة دخول وخروج 1 بوصة"]
  },
 {
  category: "motors", name :"Maro 0.5 HP", origin: "Made in Italy 🇮🇹",
  price: 1300, img: "maro05hp.jpg",
  specs: ["نحاس 100٪ ", "تحضير ذاتي", "فتحة دخول وخروج 1 بوصة","ترس نحاس"]
},
  // ---- مرفقات المواتير وقطع الغيار ----
  {
    category: "accessories", name: "STAR - فلوماك شفاف + حماية", origin: "صنع في مصر 🇪🇬",
    price: 750, img: "star-flomac.jpg",
    specs: ["أول مصنع للفلوماك في مصر", "تحمل ضغط حتى 18 بار", "شيك بلف نحاس 100%", "مزود بعداد قياس ضغط"]
  },
  {
    category: "accessories", name: "TOMA - مفتاح ضغط SK-6", origin: "Made in Italy 🇮🇹",
    price: 250, img: "toma.jpg",
    specs: ["الجهد: 220V-240V / 50-60Hz", "أقصى شدة تيار: 12A", "درجة الحماية: IP20", "أقصى درجة حرارة تشغيل: 40°C"]
  },
  {
    category: "accessories", name: "EXTRA YORKA - فلوماك ديجيتال", origin: "Made in Italy 🇮🇹",
    price: 1800, img: "yorka.jpg",
    specs: ["ضغط عالي يصل لـ 22 بار", "شاشة وعرض ديجيتال + عداد ضغط", "بدء تشغيل قابل للتعديل (0.8 - 6 بار)", "230V / 10A / IP54 / 60°C"]
  },
  {
    category: "accessories", name: "RB - بالونة موتور 24 لتر", origin: "صنع في مصر 🇪🇬",
    price: 600, img: "rb-tank.jpg",
    specs: ["السعة: 24 لتر", "استقرار ضغط المياه وتقليل مرات التشغيل", "خامات متينة وضغط عالي"]
  },
  {
    category: "accessories", name: "Mintra Tank - بالونة موتور 8 لتر", origin: "Made in Italy 🇮🇹",
    price: 375, img: "mintra.jpg",
    specs: ["السعة: 8 لتر", "حماية من الصدمات المائية", "مناسبة للمساحات الصغيرة وجودة عالية"]
  }
];

// ====== دوال مساعدة ======
function waLink(text) {
  return "https://wa.me/" + STORE.phone + "?text=" + encodeURIComponent(text);
}

function fmt(n) {
  return n.toLocaleString("en-US");
}

function esc(s) {
  const d = document.createElement("div");
  d.textContent = s;
  return d.innerHTML;
}

function cardHTML(p) {
  const msg = `مرحباً ${STORE.name}، عايز أطلب:\n${p.name}\nالسعر: ${fmt(p.price)} ج.م`;
  return `
    <div class="card">
      <div class="card-img">
        <img src="${esc(p.img)}" alt="${esc(p.name)}" loading="lazy"
             onerror="this.onerror=null;this.src=PLACEHOLDER;">
      </div>
      <div class="card-header">
        <h3 class="card-title">${esc(p.name)}</h3>
        <span class="origin-badge">${esc(p.origin)}</span>
      </div>
      <div class="card-body">
        <ul class="specs-list">${p.specs.map(s => `<li>${esc(s)}</li>`).join("")}</ul>
      </div>
      <div class="card-footer">
        <div class="price"><small>السعر: </small>${fmt(p.price)} ج.م</div>
        <a class="btn btn-whatsapp" href="${waLink(msg)}" target="_blank" rel="noopener">اطلب عبر واتساب</a>
      </div>
    </div>`;
}

// ====== عرض المنتجات في صفحات الأقسام ======
const box = document.getElementById("products");
if (box) {
  const items = PRODUCTS.filter(p => p.category === box.dataset.category);
  const empty = document.getElementById("empty");
  const search = document.getElementById("search");

  function render(list) {
    box.innerHTML = list.map(cardHTML).join("");
    if (empty) empty.style.display = list.length ? "none" : "block";
  }

  render(items);

  if (search) {
    search.addEventListener("input", () => {
      const q = search.value.trim().toLowerCase();
      render(items.filter(p => (p.name + " " + p.specs.join(" ")).toLowerCase().includes(q)));
    });
  }
}

// ====== أزرار الواتساب العامة (data-wa) ======
document.querySelectorAll("[data-wa]").forEach(el => {
  el.href = waLink(`مرحباً ${STORE.name}، عندي استفسار.`);
  el.target = "_blank";
  el.rel = "noopener";
});
