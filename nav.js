// Injects the top bar (dropdown menu + elephant mark) into every page.
// To edit the site name or nav links, do it here — once — rather than
// in each HTML file.

(function () {
  const SITE_NAME = "Supta";
  const currentPage = document.body.getAttribute("data-page") || "";

  const elephantMark = `
    <svg class="brand-mark" viewBox="0 0 240 180" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g fill="none" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">
        <path d="M 75 26 C 110 16, 155 18, 190 40 C 205 50, 210 65, 205 78 C 202 88, 200 94, 196 99 C 160 108, 110 108, 85 99 C 68 93, 55 84, 46 72 C 42 68, 40 65, 40 62 C 42 54, 48 46, 56 40 C 62 34, 68 30, 75 26 Z" />
        <path d="M 76 38 C 63 36, 50 43, 47 55 C 44 67, 50 79, 62 81 C 72 83, 80 77, 82 67 C 84 57, 81 44, 76 38 Z" />
        <path d="M 44 71 C 34 82, 27 96, 27 112 C 27 128, 33 141, 45 149 C 51 153, 56 149, 53 143" />
        <path d="M 199 96 C 210 105, 217 116, 216 128 M 216 128 L 210 132 M 216 128 L 220 134" />
        <circle cx="68" cy="58" r="4.5" fill="currentColor" stroke="none" />
        <path d="M 68 96 L 66 158 Q 76 166, 86 158 L 85 97" />
        <path d="M 101 100 L 99 158 Q 109 166, 119 158 L 118 101" />
        <path d="M 159 101 L 157 158 Q 167 166, 177 158 L 177 100" />
        <path d="M 183 100 L 182 158 Q 192 166, 202 158 L 200 97" />
      </g>
    </svg>`;

  const links = [
    { href: "index.html", label: "Home", key: "home" },
    { href: "blogs.html", label: "Blogs", key: "blogs" },
  ];

  const linksHtml = links
    .map(
      (l) =>
        `<a href="${l.href}"${l.key === currentPage ? ' class="active"' : ""}>${l.label}</a>`
    )
    .join("");

  const html = `
    <div class="dropdown">
      <button class="dropdown-trigger" id="menuBtn" aria-haspopup="true" aria-expanded="false">
        Menu <span class="dropdown-caret" aria-hidden="true">&#9662;</span>
      </button>
      <div class="dropdown-panel" id="menuPanel">
        ${linksHtml}
      </div>
    </div>
    <a href="index.html" class="brand">
      ${elephantMark}
      <span class="brand-name">${SITE_NAME}</span>
    </a>
  `;

  const mount = document.getElementById("site-nav");
  if (mount) mount.innerHTML = html;

  const btn = document.getElementById("menuBtn");
  const panel = document.getElementById("menuPanel");
  if (!btn || !panel) return;

  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    const isOpen = panel.classList.toggle("open");
    btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  document.addEventListener("click", function (e) {
    if (!panel.contains(e.target) && e.target !== btn) {
      panel.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      panel.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
    }
  });
})();
