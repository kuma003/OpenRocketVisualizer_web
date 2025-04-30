# OpenRocketVisualizer_web
OpenRocketシミュデータ表示アプリのweb移植版

外部には公開せず, LANで運用することを想定しています.


## 環境 (サーバー運用者)
- Docker
- Git
- Next.js

## セットアップ (サーバー運用者)

1. Repositoryをクローン
```bash
git clone https://github.com/kuma003/OpenRocketVisualizer_web.git
cd OpenRocketVisualizer_web
```
2. ```.env```ファイルをコピー
```bash
cp .env.example .env
```
3. Dockerイメージをビルド・起動
```bash
docker-compose up --build
```

### URLS
- フロントエンド: http://localhost:5173
- バックエンドAPI: http://localhost:5000
- pgAdmin: http://localhost:8080
    - Email: ```admin@example.com```
    - Passward: ```admin```

#### note:  
- ```.env```ファイルによってポートやDB情報を変更できます
- 基本的にホットリロードが有効化されていますが, 新規にファイルを追加した場合やmoduleをインストールした場合はすぐに反映されないかもしれません.  
そのときは, ビルドしなおします.
```bash
Ctrl + C (停止)
docker-compose up --build
```
- Dockerfileやdocker-compose.ymlなど, docker関連を変更したときはクリーンビルドを忘れずに実行します:
```bash
docker-compose down --rmi all --volumes --remove-orphans
docker-compose build --no-cache
docker-compose up
```