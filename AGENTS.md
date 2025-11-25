# Repository Guidelines

Astro 5 + TypeScript の個人サイト。Node 18 以上、npm 10 前後を想定しています。

## プロジェクト構成
- `src/pages`: ルーティング。トップは `index.astro`、プロフィールは `about.astro`。記事は `posts/` 配下の `.md` で frontmatter（`layout`, `author`, `date`）必須。
- `src/layouts`: 共通レイアウト。`Layout.astro` が全体枠、`Post.astro` が記事テンプレート。
- `src/components`: UI 部品（例: `Header.astro`, `Card.astro`）。追加時は PascalCase で配置。
- `src/styles`: 共通スタイル。ページ専用スタイルは可能なら各 `.astro` の `<style>` 内に閉じ込め、共有が必要になればここに昇格。
- `public`: 静的アセットと `favicon.svg`。ビルド時に `dist` へコピーされます。

## セットアップ / 実行
- 初回セットアップ: `npm ci`（lockfile あり）。pnpm 派は `pnpm i` でも可。
- 開発サーバー: `npm run dev` → http://localhost:4321 でホットリロード。
- ビルド/型検証: `npm run build`（`astro check` 実行後に `astro build`）。型だけ確認したい場合は `npx astro check`。
- 静的確認: `npm run preview` で `dist` をローカル配信。

## コーディング規約
- 2 スペースインデント、ESM（`type: module`）。`.astro`/TypeScript を基本に記述。
- コンポーネント・レイアウトは PascalCase、ページは kebab-case、ブログは作成日やテーマが分かる slug を推奨。
- 記事は frontmatter の `author`, `date` を必ず設定。日付は `YYYY-MM-DD` 形式。
- 不要なグローバル CSS を避け、共通化が必要なものは `src/styles` へ。テーマ切替は `Header.astro` の `data-theme` 属性に従う。

## テスト方針
- 自動テストは未導入。PR 前に最低 `npm run build` を実行し型・ビルドの失敗がないことを確認。
- UI 変更時はダーク/ライト両テーマで目視確認し、可能ならスクリーンショットを添付。
- 将来テストを追加する場合は `src/__tests__/` またはコンポーネント隣接に配置し、Jest/Playwright などを選定する方針で問題ありません。

## コミット / PR
- 既存履歴は短い英語（例: `fix`, `add ...`）が多め。今後は `feat: ...`, `fix: ...`, `chore: ...` など命令形の短文で統一すると読みやすいです。
- 1 コミット 1 トピックを意識し、生成物（`dist/` など）は含めない。
- PR では目的、主要変更、確認手順を箇条書きで記載し、関連 Issue やスクリーンショットをリンク。`npm run build` 結果を添えるとレビューがスムーズです。

## デプロイのメモ
- `npm run build` で `dist/` が生成され、GitHub Pages（ユーザーページ `aidyak.github.io`）で公開される想定。Pages 設定を変更する場合はビルド出力先を合わせてください。
