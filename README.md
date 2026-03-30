# Peabody Productions

Official portfolio website for **Peabody Productions** — a media company based in Dallas, Texas offering video production, photography, post-production, and branded content services.

---

## 🗂 Project Structure

```
peabody-productions/
├── index.html          ← Main entry point (all pages live here)
├── assets/
│   └── logo.jpg        ← Brand logo (flaming sandwich mascot)
├── css/
│   ├── style.css       ← Global styles: nav, footer, cursor, resets
│   ├── about.css       ← About / hero page styles
│   ├── media.css       ← Media / portfolio page styles
│   ├── shop.css        ← Shop page styles
│   └── contact.css     ← Contact page & form styles
├── js/
│   └── main.js         ← Navigation, cursor, form handling
└── pages/              ← Standalone page partials (reference copies)
    ├── about.html
    ├── media.html
    ├── shop.html
    └── contact.html
```

---

## 🚀 Hosting on GitHub Pages

1. Push this entire folder to a GitHub repository
2. Go to **Settings → Pages**
3. Set source to `main` branch, root `/`
4. Your site will be live at `https://yourusername.github.io/peabody-productions/`

### Custom Domain
To use `peabodyproductions.com`:
1. Add a `CNAME` file to the repo root containing your domain:
   ```
   peabodyproductions.com
   ```
2. Point your domain registrar's DNS to GitHub Pages IPs:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```

---

## ✏️ Editing Guide

### Update text content
All page text lives in `index.html`. Each section is clearly labeled:
- `id="page-about"` → About/hero section
- `id="page-media"` → Portfolio grid
- `id="page-shop"` → Products and packages
- `id="page-contact"` → Contact info and form

### Update colors
Open `css/style.css` and edit the CSS variables at the top:
```css
:root {
  --black:  #0a0a0a;
  --white:  #f8f8f6;
  --mid:    #b0aba3;
  --accent: #e8e2d8;
  --rule:   #d4cfc8;
}
```

### Replace the logo
Swap out `assets/logo.jpg` with your file. Keep the same filename, or update all `src="assets/logo.jpg"` references in `index.html`.

### Add real media (photos/videos)
In `index.html`, find the `.media-item` blocks and replace the emoji placeholders:
```html
<!-- Before -->
<div class="media-placeholder" style="background:...">
  <span class="media-placeholder-icon">📷</span>
</div>

<!-- After -->
<img src="assets/your-photo.jpg" alt="Project name" style="width:100%;height:100%;object-fit:cover;">
```

### Add real products to shop
Edit or duplicate the `.product-card` blocks. Replace the emoji placeholder with an `<img>` tag pointing to your product image.

### Wire up the contact form
The form currently shows a success message on submit (client-side only). To actually send emails, connect it to a service like:
- **Formspree**: change `<form>` action to `https://formspree.io/f/YOUR_ID`
- **Netlify Forms**: add `netlify` attribute to `<form>`
- **EmailJS**: add their SDK and hook into the submit handler in `js/main.js`

---

## 🛠 Tech Stack

- Pure HTML5, CSS3, Vanilla JavaScript — zero dependencies
- Google Fonts: Bebas Neue, Barlow, Barlow Condensed
- Hosted as a static site (GitHub Pages, Netlify, Cloudflare Pages all supported)

---

## 📬 Contact

**Peabody Productions**  
Dallas, Texas  
hello@peabodyproductions.com

---

*Est. 2026*
