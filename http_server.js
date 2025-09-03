// httpモジュールを読み込み
const http = require('http');

// サーバーの設定
const hostname = '127.0.0.1';
const port = 3000;

// サーバーを作成
const server = http.createServer((req, res) => {
  // リクエストのURLとメソッドを取得
  const { url, method } = req;
  
  // レスポンスヘッダーの設定
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  
  // URLに基づいてルーティング
  if (url === '/') {
    // ホームページ
    res.statusCode = 200;
    res.end(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Node.js HTTPサーバー</title>
          <style>
            body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
            h1 { color: #333; }
            .nav { margin: 20px 0; }
            .nav a { margin-right: 15px; }
          </style>
        </head>
        <body>
          <h1>Node.js HTTPサーバーへようこそ！</h1>
          <p>これはNode.jsで作成されたシンプルなHTTPサーバーです。</p>
          <div class="nav">
            <a href="/">ホーム</a>
            <a href="/about">サーバーについて</a>
            <a href="/api">API</a>
          </div>
        </body>
      </html>
    `);
  } else if (url === '/about') {
    // Aboutページ
    res.statusCode = 200;
    res.end(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>サーバーについて</title>
          <style>
            body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
            h1 { color: #333; }
            .nav { margin: 20px 0; }
            .nav a { margin-right: 15px; }
          </style>
        </head>
        <body>
          <h1>サーバーについて</h1>
          <p>このサーバーはNode.jsのhttpモジュールを使用して作成されています。</p>
          <div class="nav">
            <a href="/">ホーム</a>
            <a href="/about">サーバーについて</a>
            <a href="/api">API</a>
          </div>
        </body>
      </html>
    `);
  } else if (url === '/api') {
    // JSONデータを返すAPIエンドポイント
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      message: 'これはAPIエンドポイントです',
      timestamp: new Date().toISOString(),
      method: method
    }));
  } else {
    // 404 Not Found
    res.statusCode = 404;
    res.end(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>404 - ページが見つかりません</title>
          <style>
            body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
            h1 { color: #d9534f; }
            .nav { margin: 20px 0; }
            .nav a { margin-right: 15px; }
          </style>
        </head>
        <body>
          <h1>404 - ページが見つかりません</h1>
          <p>お探しのページは存在しません。</p>
          <div class="nav">
            <a href="/">ホームに戻る</a>
          </div>
        </body>
      </html>
    `);
  }
});

// サーバーの起動
server.listen(port, hostname, () => {
  console.log(`サーバーが起動しました: http://${hostname}:${port}/`);
});

// プロセスの終了時にサーバーを正常に終了
process.on('SIGINT', () => {
  console.log('サーバーを終了します...');
  server.close(() => {
    console.log('サーバーが終了しました');
    process.exit(0);
  });
});