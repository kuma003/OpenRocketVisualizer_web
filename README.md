# OpenRocketVisualizer_web
OpenRocketシミュデータ表示アプリのweb移植版


## セットアップ

1. Repositoryをクローン
```{bash}
git clone https://github.com/kuma003/OpenRocketVisualizer_web.git
cd yOpenRocketVisualizer_web
```
2. ```.env```ファイルをコピー
```{bash}
cp .env.example .env
```
3. Dockerイメージをビルド・起動
```{bash}
docker-compose up --build
```

### URLS
- フロントエンド: http://localhost:3000

- ックエンドAPI: http://localhost:5000
- pgAdmin: http://localhost:8080
    - Email: ```admin@example.com```
    - Passward: ```admin```

note:  
- ```.env```ファイルによってポートやDB情報を変更できます
