(function () {
  if (typeof POSTS === "undefined") return;

  const monthDay = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  function formatDate(iso) {
    // Parse as local date, not UTC, so the date shown matches what was typed.
    const [y, m, d] = iso.split("-").map(Number);
    return monthDay.format(new Date(y, m - 1, d)).toUpperCase();
  }

  const indexMount = document.getElementById("post-index");
  const feedMount = document.getElementById("feed");
  if (!indexMount || !feedMount) return;

  if (!POSTS.length) {
    indexMount.style.display = "none";
    feedMount.innerHTML = `<p class="empty">Nothing posted yet.</p>`;
    return;
  }

  // Serial order: oldest first, numbered as they were added.
  const sorted = [...POSTS].sort((a, b) => (a.date > b.date ? 1 : -1));

  indexMount.innerHTML = sorted
    .map((post, i) => {
      const num = String(i + 1).padStart(2, "0");
      const label = post.title || formatDate(post.date);
      return `
        <li>
          <a href="#${post.date}">
            <span class="index-title"><span class="index-num">${num}</span>${label}</span>
            <span class="index-date">${formatDate(post.date)}</span>
          </a>
        </li>
      `;
    })
    .join("");

  feedMount.innerHTML = sorted
    .map((post) => {
      const title = post.title
        ? `<h2 class="entry-title">${post.title}</h2>`
        : "";
      const paragraphs = post.body.map((p) => `<p>${p}</p>`).join("");
      return `
        <article class="entry" id="${post.date}">
          <span class="entry-date">${formatDate(post.date)}</span>
          ${title}
          <div class="entry-body">${paragraphs}</div>
        </article>
      `;
    })
    .join("");
})();
