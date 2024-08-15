# 作成手順

## 1. Viteプロジェクトのセットアップ

まず、Viteを使ってReactプロジェクトを作成します。

```bash
npm create vite@latest my-dq-portfolio -- --template react-ts
cd my-dq-portfolio
npm install
```

プロジェクトが作成されたことを確認したら、開発サーバーを起動します。

```bash
npm run dev
```

無事に開発サーバーが起動したら、http://localhost:3000 にアクセスして、デフォルトのページが表示されることを確認します。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/706631/adfefe28-0f7c-b301-4383-aa87144d12b1.png)

無事に表示されました。

## 2. 必要なライブラリをインストール

```bash
npm install @tanstack/react-router styled-components react-icons framer-motion react-howler react-simple-typewriter
```

```bash
npm i -D @tanstack/router-plugin @tanstack/router-devtools
```

今回は、pnpmやyarnを使わずにnpmを使ってライブラリをインストールしました。

shad-cn/uiなどのUIコンポーネントライブラリの仕様も検討しましたが、今回RPG風のデザインにするため、ほとんど用意されているコンポーネントは使用できないと感じたのでtailwindcssでカスタムコンポーネントを作成することにしました。

## 3. gitリポジトリの初期化とgithubへのpush

念の為はじめにgitignoreにenvを追加しておきます。

`.gitignore`

```diff
+ # 環境設定ファイル
+ .env
+ .env.local
```

</details>

設定できたら、以下のコマンドでリポジトリを初期化し、リモートリポジトリにpushします。

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/your-username/my-dq-portfolio.git
git push -u origin main
```

本来はGit flow[^1]を使って開発を進めるべきですが、今回はシンプルにmainブランチで開発を進めます。

[^1]: [推奨されるブランチの運用方法](https://futureys.tokyo/summary-of-recommended-branch-model-on-git/)

## 4. prettierとeslintの設定

プロジェクトのコードスタイルを統一するために、prettierとeslintを導入します。

```bash
npm install -D prettier eslint-config-prettier eslint-plugin-prettier
```

eslintはViteのプロジェクトテンプレートに含まれているので、手動でインストールする必要はありません。

今回eslintは特に設定を変更せず、デフォルトの設定を使用しました。

コードの保存時にはprettierとeslintが自動で適用されるように、VSCodeの設定を変更しています。

`.vscode/settings.json`

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

`.prettierrc.json`と`.prettierignore`を作成して、コードのフォーマットルールと無視するファイルを設定します。

ちなみにprettierは拡張機能でも動作しますが、コマンド実行したかったのでCLIを使えるように設定しています。

<details>
<summary>設定ファイルの内容</summary>

`.prettierrc.json`

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "endOfLine": "lf",
  "arrowParens": "always"
}
```

`.prettierignore`

```
# Ignore artifacts:
build
coverage
dist
node_modules

# Ignore specific file types:
*.min.js
*.map
*.lock

# Ignore specific configuration or environment files:
.env
.env.local
.env.*.local

# Ignore all JavaScript files in a specific directory:
src/legacy/**/*.js

# Ignore specific files:
src/some-large-file.js

# Ignore generated files:
package-lock.json
yarn.lock

# Ignore Prettier configuration files themselves:
.prettierrc
.prettierrc.json
.prettierrc.js
.prettierrc.yml
.prettierignore

```

</details>

## 5. tanstack-routerの設定

tanstack-routerを使ってルーティングを設定します。
ルーティングはファイルベースルーティングを採用し、`src/routes`ディレクトリにページコンポーネントを配置するようにしました。

基本的にはドキュメントの通りに設定すれば問題ないです。

https://tanstack.com/router/latest

まずはvite.config.tsにtanstack-routerのプラグインを設定します。

<details>
<summary>vite.config.ts</summary>

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), TanStackRouterVite(), tsconfigPaths()],
});
```

</details>


次に、`src/main.tsx`にルーティングを設定します。

<details>
<summary>src/main.tsx</summary>

```tsx
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import './index.css';

// Import the generated route tree
import { routeTree } from './routeTree.gen';

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

// Render the app
const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}
```

</details>

これで自動的に`src/routeTree.gen.ts`が生成されるようになります。

## 6. GitHub Actionsの設定

## 7. Vercelへのデプロイ