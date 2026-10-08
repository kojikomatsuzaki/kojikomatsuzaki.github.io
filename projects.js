/* 01. プロジェクト正本
 * 名前・説明・リンク・確認済みの更新日と利用条件を管理します。
 * 更新手順は README.md を参照してください。
 */
const projects = [
  { name: '新荘音頭 デジタルアーカイブ', repo: 'shinso-ondo', caption: '新荘音頭の音源、歌詞、楽譜、パンフレット、メタデータを保存・公開するデジタルアーカイブ。', page: 'https://kojikomatsuzaki.github.io/shinso-ondo/', updated: '2026-07-30T04:16:06Z', license: 'CC BY-NC-SA 4.0', readme: true },
  { name: '茨城県 風景印地図', repo: 'ibaraki-fukeiin-map', caption: '茨城県の風景印を地図と検索から探せるWebアプリ。', page: 'https://kojikomatsuzaki.github.io/ibaraki-fukeiin-map/', updated: '2026-10-07T17:01:38Z', license: 'MIT / CC BY 4.0（適用範囲あり）', readme: true },
  { name: '那珂市刊行物目次データ', repo: 'naka-city-publications', caption: '那珂市史などの目次を階層構造のまま整理したデータセット。', page: 'https://kojikomatsuzaki.github.io/naka-city-publications/', updated: '2026-08-31T13:58:38Z', license: '未確定・README参照', readme: true },
  { name: '日立市天気相談所 観測データ', repo: 'hitachi-weather-data', caption: '日立市の気象観測データを機械可読な形式で整理・保存するアーカイブ。', page: 'https://kojikomatsuzaki.github.io/hitachi-weather-data/', updated: '2026-08-31T15:26:02Z', license: '明示なし・再利用条件は要確認', readme: true },
  { name: '茨城県の気象データ', repo: 'ibaraki-weather-data', caption: '茨城県に関する気象データを整理し、再利用しやすい形で公開するプロジェクト。', page: 'https://kojikomatsuzaki.github.io/ibaraki-weather-data/', updated: '2026-10-08T00:57:44Z', license: '明示なし・再利用条件は要確認', readme: true },
  { name: 'オープン二次データ', repo: 'open-secondary-data', caption: '公開情報を出典へたどれる二次データとして整理する基盤。', page: 'https://kojikomatsuzaki.github.io/open-secondary-data/', updated: '2026-09-10T00:47:22Z', license: 'データセット・出典ごとの条件', readme: true },
  { name: 'Screenshot Stitcher', repo: 'screenshot-stitcher', caption: 'ブラウザだけでスクリーンショットをつなぎ、PNGを書き出すツール。', page: 'https://kojikomatsuzaki.github.io/screenshot-stitcher/', updated: '2026-09-12T11:28:19Z', license: '明示なし・再利用条件は要確認', readme: true },
  { name: 'Grants for Primary Education', repo: 'grants-for-primary-education', caption: '初等教育や地域教育活動が活用できるグラント情報を整理・公開。', updated: '2026-09-15T01:54:51Z', license: '明示なし・再利用条件は要確認', readme: true },
  { name: 'DIY Tea', repo: 'diytea', caption: '気軽にお茶をハンドメイドするための記録と資料。', page: 'https://kojikomatsuzaki.github.io/diytea/', updated: '2026-06-07T16:24:21Z', license: 'GPL-3.0', readme: true },
  { name: 'English Slot', repo: 'english-slot', caption: '日本の中学生向けの英語学習スロットマシン。', page: 'https://kojikomatsuzaki.github.io/english-slot/', updated: '2026-07-21T16:15:04Z', license: '明示なし・再利用条件は要確認', readme: true },
  { name: 'Exercises', repo: 'exercises', caption: '練習用のリポジトリ。現在はファイル未登録です。', updated: '2026-02-02T02:41:23Z', license: '明示なし・再利用条件は要確認', readme: false }
];
