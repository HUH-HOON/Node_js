const http = require('http');
const fs = require('fs').promises;

http.createServer(async (req, res) => { //async  : 비동기로 처리된다는 의미 
  try {         // await는 async 함수 안에서만 동작합니다. 
                // await 다음 작업이 끝날 때까지 기다린다는 의미  
                // 단,async 함수이므로 기다리는 동안엔 엔진이 다른 일을 할 수 있기 때문에 
                // CPU 리소스가 낭비되지 않음.
    const data = await fs.readFile('./index01.html'); 
                // index01.html 읽기 
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(data);
  } catch (err) {
    console.error(err);
    res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(err.message);
  }
})
  .listen(8081, () => {
    console.log('8081번 포트에서 서버 대기 중입니다!');
  });
