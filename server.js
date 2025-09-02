// httpモジュールを読み込み
const http = require('http');

// サーバーを作成
const server = http.createServer((req, res) => {
  res.statusCode = 200; // ステータスコード
  res.setHeader('Content-Type', 'text/plain'); // ヘッダー設定
  res.end('Hello World\n'); // レスポンス本文
});

// ポート3000で待ち受け
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});