# Node.jsの軽量版イメージを使用
FROM node:20-slim

# コンテナ内の作業ディレクトリ
WORKDIR /app

# パッケージファイルをコピーして依存関係をインストール
COPY package*.json ./
RUN npm install

# ソースコードをコピー
COPY . .

# 環境変数PORTを設定
ENV PORT=5173

# Viteの開発サーバーを起動
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
