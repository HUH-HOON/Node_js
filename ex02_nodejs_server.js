const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.write('<h1>Hello Node!</h1>');
  res.end('<p>Hello Server!</p>');
});
server.listen(8080);  // 8080 포트로 대기 (listen)

server.on('listening', () => {  // listening을 시작하면 실행되는 이벤트헨들러 
  console.log('8080번 포트에서 서버 대기 중입니다!');
});
server.on('error', (error) => { // error가 발생하면 실행되는 이벤트헨들러 
  console.error(error);
});
