---
layout: ../../layouts/Post.astro 
---
# GitHub Actionsを更新してなくてポートフォリオサイトが更新できなかった話

割ともうそのままの話ですが、ymlを更新してなかったので、GitHub Actionsが動かず、ポートフォリオサイトが更新できていませんでした。
2025年に公開する話でもないかもですが、せっかくなので記録しておきます。

## GitHub Actionsの更新
[公式](https://github.blog/changelog/2024-04-16-deprecation-notice-v3-of-the-artifact-actions/)に詳細が載っています。
2025年1月25日にv3のArtifact Actionsが廃止されるとのことで、それに気づかずpushしても更新されないな？と思っていました。
Astroを使用してこのサイトは運営しているので、ymlをこんな感じで修正して無事デプロイできました。
一部抜粋すると以下のようになっています。

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Install, Build and Upload
        uses: withastro/action@v4

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```
更新は忘れないようにしていきたいです。
