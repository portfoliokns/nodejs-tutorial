//初期設定
const http = require("http");
const PORT = 8000
const html = require("fs").readFileSync("./index.html")

//webサーバーを構築
const server = http.createServer((req,res) => {
  //ブラウザからアクセスがきた時の処理
  res.writeHead(200, {"Content-Type": "text/html"});
  // res.write("<h1>Hello World</h1>");
  res.write(html);
  res.end();

  // HTTPメソッドの種類に応じて、処理を変更することができる
  if (req.method == "GET"){
  }
  if (req.method == "POST"){
  }
});

// ローカル環境での実行
server.listen(PORT, () => {
  console.log('server running')
});