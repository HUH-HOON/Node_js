const http = require('http');

// 웹서버 생성 
http.createServer((req, res) => { // req : 클라이언트의 요청에 대한 정보. 
                                  // res : 클라이언트에게 응답을 보내기 위한 정보
  // 클라이언트에게 header 정보 보냄 
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  // 클라이언트에게 보내는 내용 
  res.write('<h1>Hello Node!</h1>');
  // 다음을 클라이언트에게 보내고 연결 끊음
  res.end('<p>Hello Server!</p>');
})
  .listen(8080, () => { // 웹서버 8080를 사용하여 대기 
    console.log('8080번 포트에서 서버 대기 중입니다!');
  });
