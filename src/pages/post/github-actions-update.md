---
layout: ../../layouts/Post.astro
author: "aidyak"
date: "2025-04-27"
---

# GitHub Actions を更新してなくてポートフォリオサイトが更新できなかった話

割ともうそのままの話ですが、yml を更新してなかったので、GitHub Actions が動かず、ポートフォリオサイトが更新できていませんでした。
2025 年に公開する話でもないかもですが、せっかくなので記録しておきます。

## GitHub Actions の更新

[公式](https://github.blog/changelog/2024-04-16-deprecation-notice-v3-of-the-artifact-actions/)に詳細が載っています。
2025 年 1 月 25 日に v3 の Artifact Actions が廃止されるとのことで、それに気づかず push しても更新されないな？と思っていました。
Astro を使用してこのサイトは運営しているので、yml をこんな感じで修正して無事デプロイできました。
一部抜粋すると以下のようになっています。

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
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
