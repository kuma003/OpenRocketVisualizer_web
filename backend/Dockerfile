# Node.jsの軽量版イメージを使用
FROM node:20-slim

# コンテナ内の作業ディレクトリ
WORKDIR /app

# パッケージファイルをコピーして依存関係をインストール
COPY package*.json ./
RUN npm install

# ソースコードをコピー
COPY . .

# TypeScriptをビルド（必要なら）
RUN npm run build

# 環境変数PORTを設定
ENV PORT=8080

# アプリを起動（開発用）
CMD ["npm", "run", "dev"]
