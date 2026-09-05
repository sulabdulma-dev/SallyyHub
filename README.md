# SallyyHub — Portfolio Website

Website portfolio ah oo loogu talagalay Suleiman Abdimalik. Halkan waxaad ka heli
doontaa sida website-ka loo dhisay, faylasha kala duwan, iyo meesha aad wax ka
bedeli karto.

## 📁 Folder structure (Qaab-dhismeedka)

```
website/
├── index.html      → Bogga hore (Home)
├── about.html       → Bogga About (sawirka + sharaxaadda adiga ku saabsan)
├── skills.html       → Bogga Skills (xirfadaha)
├── work.html          → Bogga Work (projects-ka)
├── resume.html         → Bogga Resume (CV / experience)
├── contact.html         → Bogga Contact (xogta xiriirka)
│
├── css/
│   └── style.css         → Dhammaan midabada, fonts-ka, iyo layout-ka
│
├── js/
│   └── main.js             → Menu-ga mobile-ka + sanadka footer-ka
│
└── images/
    └── profile-placeholder.svg → Sawir ku-meel-gaar ah (waa in la beddelaa)
```

## ✏️ Meesha wax laga bedelayo (What to edit, and where)

| Waxaad rabto inaad bedesho | Fayl-ka aad furto |
|---|---|
| Qoraalka (text) ee bog kasta | `.html` file-ka boggaas (tusaale: `about.html`) |
| Midabada (colors) | `css/style.css` → qeybta `:root` ee kore (design tokens) |
| Sawirka profile-ka | Ku dar sawirkaaga `images/` folder-ka, magaci `profile.jpg`,
  kadibna ku beddel `about.html` inuu isticmaalo `images/profile.jpg` halkii
  `images/profile-placeholder.svg` |
| Projects-ka | `work.html` → raadi `PROJECT CARD` comments-ka, ku beddel
  title-ga, sharaxaadda, iyo link-ga (`href="#"`) |
| CV/Resume PDF | Ku dar file-ka `resume.pdf` folder-ka guud, wuxuu si otomaatig ah
  u shaqeynayaa "Download CV" button-ka ee `resume.html` |
| Xogta xiriirka (email, phone, LinkedIn) | `contact.html` iyo `footer` ee bog kasta |

## 🎨 Design tokens (midabada iyo fonts)

Kolka aad furto `css/style.css`, marka ugu horeysa ayaad ka heli doontaa
qeyb la yiraahdo `:root { ... }`. Halkaas ayaa ku qoran dhammaan midabada
website-ka (tusaale `--accent` waa buluuga la isticmaalo labels-ka iyo
buttons-ka). Haddii aad bedesho hal xariiq halkaas, wuxuu isbedelayaa meel
kasta oo website-ka ah — ma aha inaad mar walba raadiso file kasta.

## 🌐 Sida loo furo website-ka (local testing)

1. Fur `index.html` browser-kaaga (double-click ayaa ku filan).
2. Si aad u aragto isbedelka fori-fori ah marka aad wax bedeshid, kaydi
   file-ka (`Ctrl+S`) kadibna refresh gareey browser-ka.

## 🚀 Sida loo daabaco (deploy) internet-ka

Website-kani waa static site (HTML/CSS/JS oo fudud), waxaadna ku dhejin
kartaa bilaash meelo sida:
- GitHub Pages
- Netlify
- Vercel

Haddii aad rabto, waan kugu hagi karaa tallaabo-tallaabo marka aad diyaar
u tahay.

## 🤖 Cloud AI (Anthropic Claude)

Hadda website-kani ma leh qod (code) AI ah. Marka aad diyaar u tahay inaad
ku darto qeyb AI ah (tusaale: chatbot ku saabsan portfolio-gaaga, ama qoraal
otomaatig ah), waxaan kugu tusi doonaa sida loo isticmaalo Anthropic API —
sidaas oo dhan si cad ayaan kuu sharixi doonaa marka aan gaadhno halkaas.

---
**Xasuusnaan:** Faylashan oo dhan waa mid la beddeli karo — ha ka cabsan
inaad "jabiso" wax, waayo mar kasta waan kugu jiraa si aan kuu caawino
haddii wax qaldamaan.
