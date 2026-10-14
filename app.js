/* ── 01. 表示設定 ─────────────────────────────── */
const projectGrid = document.querySelector('#project-grid');
const projectCount = document.querySelector('#project-count');
const repositoryBaseUrl = 'https://github.com/kojikomatsuzaki/';

/* ── 02. 表示用の文字とリンク ─────────────────── */
function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[character]));
}

function externalLink(url, label) {
  return `<a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)} ↗</a>`;
}

/* ── 03. プロジェクト一覧 ─────────────────────── */
function renderProject(project) {
  const repositoryUrl = repositoryBaseUrl + project.repo;
  const updatedDate = new Intl.DateTimeFormat('ja-JP', {
    timeZone: 'Asia/Tokyo', year: 'numeric', month: '2-digit', day: '2-digit'
  }).format(new Date(project.updated));
  const links = [externalLink(repositoryUrl, 'リポジトリ')];
  if (project.readme) {
    links.push(externalLink(repositoryUrl + '/blob/main/README.md', 'README.md'));
    links.push(externalLink(repositoryUrl + '/commits/main', '更新履歴'));
  }
  if (project.page) links.push(externalLink(project.page, '公開ページ'));
  return `<article class="project-card">
    <h3>${escapeHtml(project.name)}</h3>
    <p class="repo-name">${escapeHtml(project.repo)}</p>
    <p class="caption">${escapeHtml(project.caption)}</p>
    <dl class="meta">
      <div><dt>最終更新</dt><dd><time datetime="${escapeHtml(project.updated)}">${updatedDate}</time></dd></div>
      <div><dt>ライセンス・利用条件</dt><dd>${escapeHtml(project.license)}</dd></div>
    </dl>
    <div class="links">${links.join('')}</div>
  </article>`;
}

projectCount.textContent = `${projects.length}件`;
projectGrid.innerHTML = projects.map(renderProject).join('');

/* 04. 代表的な公開コンテンツへの入口 */
const featuredGrid = document.querySelector('#featured-grid');
if (featuredGrid) {
  featuredGrid.innerHTML = projects.filter(project => project.featured && project.page).map(project => `
    <article class="featured-card">
      <p class="featured-status">${escapeHtml(project.status)}</p>
      <h3>${escapeHtml(project.name)}</h3>
      <p>${escapeHtml(project.caption)}</p>
      <a href="${escapeHtml(project.page)}">公開ページを見る →</a>
    </article>`).join('');
}
