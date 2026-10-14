/* ==========================================
   Shared Navigation — v0.1
   Static fallback: a failure here must never prevent page content.
   The project list is a generated snapshot of projects.yaml.
========================================== */
(() => {
  const entries = [
    ['総合ポータル','https://kojikomatsuzaki.github.io/'],
    ['日立市天気相談所 観測データ','https://kojikomatsuzaki.github.io/hitachi-weather-data/'],
    ['茨城県の気象データ','https://kojikomatsuzaki.github.io/ibaraki-weather-data/'],
    ['新荘音頭 デジタルアーカイブ','https://kojikomatsuzaki.github.io/shinso-ondo/'],
    ['茨城県 風景印地図','https://kojikomatsuzaki.github.io/ibaraki-fukeiin-map/'],
    ['那珂市刊行物目次データ','https://kojikomatsuzaki.github.io/naka-city-publications/'],
    ['オープン二次データ','https://kojikomatsuzaki.github.io/open-secondary-data/'],
    ['Interval Timer','https://kojikomatsuzaki.github.io/interval-timer/'],
    ['Screenshot Stitcher','https://kojikomatsuzaki.github.io/screenshot-stitcher/'],
    ['DIY Tea','https://kojikomatsuzaki.github.io/diytea/'],
    ['English Slot','https://kojikomatsuzaki.github.io/english-slot/'],
    ['Grants for Primary Education','https://github.com/kojikomatsuzaki/grants-for-primary-education'],
    ['Exercises','https://github.com/kojikomatsuzaki/exercises']
  ];
  const mount = document.getElementById('shared-navigation');
  if (!mount) return;
  const details = document.createElement('details');
  details.className = 'shared-nav';
  const summary = document.createElement('summary');
  summary.textContent = '≡ プロジェクト一覧';
  const list = document.createElement('ul');
  entries.forEach(([name,url]) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = url;
    a.textContent = name;
    if (location.href.replace(/index\\.html$/, '').replace(/\\/$/,'') === url.replace(/\\/$/,'')) a.setAttribute('aria-current','page');
    li.append(a);
    list.append(li);
  });
  details.append(summary,list);
  mount.append(details);
})();
