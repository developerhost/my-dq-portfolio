# my-dq-portfolio

ドラゴンクエストをテーマにしたインタラクティブなポートフォリオWebサイト

## プロジェクト概要

このプロジェクトは、RPGゲーム「ドラゴンクエスト」シリーズの世界観を取り入れた、ユニークでインタラクティブなポートフォリオWebサイトです。ゲーム要素とプロフェッショナルなポートフォリオ機能を融合させることで、訪問者に印象的な体験を提供します。

## 技術スタック

### コア技術

- **React 18.3.1** - UIライブラリ
- **TypeScript 5.5.3** - 型安全性
- **Vite 5.4.14** - ビルドツール・開発サーバー
- **TanStack Router 1.12.0** - ファイルベースルーティング
- **TanStack Query 5.59.19** - データフェッチング・キャッシング

### スタイリング

- **Tailwind CSS 3.4.9** - ユーティリティファーストCSS
- **Framer Motion 11.3.24** - アニメーション
- **Styled Components 6.1.12** - CSS-in-JS
- **カスタムピクセルフォント** (PixelMplus10, PixelMplus12) - DQテーマ

### UI コンポーネント

- **Radix UI** - ヘッドレスUIプリミティブ
- **shadcn/ui スタイル** - カスタムコンポーネントライブラリ
- **Lucide React** / **React Icons** - アイコン

### コンテンツ管理

- **gray-matter** - Markdown frontmatterパーサー
- **markdown-it** - Markdownパーサー
- **Zenn** ライブラリ - Zenn記事のスタイリング・レンダリング
- **rss-parser** - RSSフィード解析

### ゲームメカニクス

- **react-howler** - BGMオーディオプレイヤー
- **react-use** - キーボードコントロール用フック
- カスタムゲームコントローラー実装

## プロジェクト構造

```
my-dq-portfolio/
├── src/
│   ├── routes/              # ファイルベースルーティング（メインページ）
│   │   ├── __root.tsx      # ルートレイアウト（ヘッダー）
│   │   ├── index.lazy.tsx  # ホームページ
│   │   ├── room/           # インタラクティブRPGルーム
│   │   ├── profile/        # プロフィールページ
│   │   ├── portfolio/      # ポートフォリオ展示
│   │   ├── developer/      # 開発者情報
│   │   ├── blog/           # ブログシステム
│   │   └── sns/            # SNSリンク・記事集約
│   ├── components/         # 再利用可能UIコンポーネント
│   │   ├── ui/            # UIプリミティブ
│   │   ├── header/        # ヘッダー・ナビゲーション
│   │   ├── pokemon/       # ポケモンカードコンポーネント
│   │   ├── GameController.tsx  # 仮想ゲームコントローラー
│   │   ├── BgmPlayer.tsx       # BGMプレイヤー
│   │   └── ChatMessage.tsx     # RPGスタイルメッセージ表示
│   ├── hooks/             # カスタムReactフック
│   ├── assets/            # 静的アセット（画像、フォント、アイコン）
│   ├── _posts/            # ブログMarkdownファイル
│   ├── rss/               # RSSフィードデータ・パーサー
│   ├── lib/               # ユーティリティ関数
│   ├── types.ts           # TypeScript型定義
│   ├── constants.ts       # アプリケーション定数
│   └── main.tsx           # アプリケーションエントリーポイント
├── public/                # 公開静的ファイル
├── .github/workflows/     # CI/CD自動化
└── 設定ファイル群
```

## 主要機能

### 1. インタラクティブRPGルーム (`/room`)

- 9x9タイルベースのグリッド移動システム
- キャラクター操作:
  - キーボード（矢印キー）
  - 仮想ゲームコントローラー（モバイル）
  - 長押しサポート（連続移動）
- インタラクティブなNPCとオブジェクト:
  - 村人、猫、兵士、モンスター
  - 宝箱（3種類）
- 衝突検知と移動検証
- メッセージシステム
- 宝箱収集の状態管理

### 2. ポートフォリオショーケース (`/portfolio`)

- ポケモンカード風フリップアニメーション
- プロジェクトスライドショー（画像ギャラリー）
- 折りたたみ可能なセクション
- Zenn記事統合

### 3. プロフィールページ (`/profile`)

- 生年月日からの動的年齢計算
- スキル表示
- 実績テーブル
- 学歴
- 趣味・興味（ゲーム、アニメ、音楽、書籍、YouTubeチャンネル）

### 4. 開発者ページ (`/developer`)

- 開発哲学・価値観
- 技術的能力とプラクティス
- 連絡先情報（Twitter DM）

### 5. ブログシステム (`/blog`)

- Markdownベースのブログ投稿（`/src/_posts`）
- Frontmatterメタデータ（タイトル、日付、抜粋）
- 動的ルート生成（`/blog/$slug`）
- Zennスタイルのマークダウンレンダリング:
  - コードシンタックスハイライト
  - 数式表示
  - 埋め込みコンテンツ

### 6. SNS統合 (`/sns`)

- ソーシャルメディアリンク（アイコン付き）
- キーボードナビゲーション（矢印キー + Enter）
- RSSフィード集約:
  - Zenn
  - Qiita
  - Note
- 記事リスト（サムネイル・日付付き）
- GitHub Actionsによる自動RSS更新

## コンテンツ管理アプローチ

### 静的コンテンツ

- **Markdownファイル** (`/src/_posts/*.md`) - フロントマター付きブログコンテンツ
- **TypeScript定数** - プロフィールデータ、ゲームマップ、ポケモンカード、ポートフォリオサイト
- **JSONデータ** - RSSフィードキャッシュ

### 動的コンテンツ

- **RSSフィード** - GitHub Actionsによる自動取得
  - スケジュール実行（cron）
  - `rss-parser.mjs`を実行
  - `data.json`を更新
  - 自動コミット

### コンテンツ戦略

- **コロケーション**: コンポーネントとデータを一緒に配置
- **型安全性**: すべてのデータをTypeScriptで型付け
- **ビルド時生成**: Markdown投稿はビルド時に`import.meta.glob`経由で読み込み
- **RSSキャッシング**: 外部記事をJSON形式でキャッシュして高速読み込み

## 独自の実装詳細

### ドラゴンクエストテーマの実装

1. **ピクセルフォント**: PixelMplus10/12カスタムフォントで本格的なRPG感
2. **グリッドシステム**: 9x9タイルベースマップ、型安全な位置追跡
3. **タイル定数**: 26種類のタイルタイプ（壁、カーペット、キャラクター、宝箱など）
4. **SVGアセット**: すべてのゲーム要素をSVGで実装し、あらゆるサイズで鮮明にレンダリング

### 型安全なルーティング

- 自動生成されるルートツリー（`/src/routeTree.gen.ts`）
- ルート、パラメータ、ナビゲーションの完全なTypeScriptサポート
- コード分割のための遅延読み込み

### 高度なTypeScriptパターン

```typescript
// 型安全な数値範囲生成
type Enumerate<N> - 数値範囲を作成する再帰型
type NumberRange<F, T> - 型安全な数値範囲
```

### ゲームメカニクス

- **移動システム**:
  - `useKey`フックによるキーボード制御
  - 長押しサポート付き仮想コントローラー
  - 壁・オブジェクトとの衝突検知
  - 宝箱収集の状態永続化

### パフォーマンス最適化

- **遅延ルーティング** - すべてのルートで`createLazyFileRoute`使用
- **コード分割** - Viteによる自動分割
- **画像最適化** - ゲーム要素にSVG、写真に最適化PNG/JPG
- **RSSキャッシング** - 記事の事前取得とキャッシュ

### レスポンシブデザイン

- モバイル: サイドバーナビゲーション + ゲームコントローラー
- デスクトップ: PCヘッダー + 従来型ナビゲーション
- ミュートトグル付きBGMプレイヤー
- Tailwindブレークポイントを使用した適応レイアウト

## 開発体験

### CI/CD自動化

- PR時の自動リンティング
- 自動RSS更新（日次/週次スケジュール）
- Huskyプリコミットフック

### コード品質

- 15以上のプラグインを含む包括的なESLint設定
- Prettierによる一貫したフォーマット
- コードのスペルチェック
- インポートの並び替えと未使用インポートの削除

### テスト環境

- Vitest設定
- React Testing Library
- MSWによるAPIモック
- カバレッジレポート

## アナリティクス

- Google Analytics 4統合
- カスタム`useTracking`フック
- ルート変更時の自動ページビュー追跡

## パッケージマネージャー

- pnpm使用を強制（`preinstall`スクリプト）
- npm/yarnでのインストールを防止

## 開発コマンド

```bash
# 開発サーバー起動
pnpm dev

# 本番ビルド
pnpm build

# プレビュー
pnpm preview

# リンティング
pnpm lint

# フォーマット
pnpm format

# テスト
pnpm test

# RSS更新
pnpm update-rss
```

## 環境変数

Google Analytics トラッキングID: `G-FSSXRWL3SD`

## 主要ファイル

### エントリーポイント

- `src/main.tsx` - アプリケーション初期化（QueryClient、Router、ダークモード設定）

### ルートレイアウト

- `src/routes/__root.tsx` - ヘッダー、ページトラッキング、Outlet

### ゲームシステム

- `src/routes/room/-const/map.ts` - 9x9マップ定義
- `src/routes/room/-const/tiles.ts` - タイル定数（26種類）
- `src/hooks/useHeroMovement.ts` - キャラクター移動ロジック
- `src/hooks/moveHero.ts` - 移動検証・衝突検知

### コンテンツデータ

- `src/routes/profile/-data/profileData.ts` - プロフィール情報
- `src/routes/portfolio/-data/portfolioSites.ts` - ポートフォリオプロジェクト
- `src/routes/portfolio/-data/cards.ts` - ポケモンカードデータ
- `src/rss/data.json` - RSSフィードキャッシュ

### ユーティリティ

- `src/hooks/useTracking.ts` - GAトラッキング
- `src/hooks/useArrowNavigation.ts` - キーボードナビゲーション
- `src/hooks/useLongPress.ts` - 長押し検出
- `src/lib/utils.ts` - ユーティリティ関数

## まとめ

このプロジェクトは、以下を組み合わせた高度なポートフォリオサイトです:

- **ゲームの懐かしさ** (ドラゴンクエストの美学)
- **モダンWeb開発** (React、TypeScript、Vite)
- **インタラクティブ機能** (プレイ可能なRPGルーム)
- **コンテンツ集約** (複数プラットフォームからのRSSフィード)
- **プロフェッショナルなプレゼンテーション** (ポートフォリオ、スキル、実績)

型安全性、コード組織化、自動化、開発者体験とユーザー体験の両方への配慮など、優れたソフトウェアエンジニアリングプラクティスを実証しています。ドラゴンクエストテーマは、カスタムフォント、ピクセルアートアセット、本格的なゲームメカニクスによって徹底的に実装されています。
