const mdbConn = require('./mariaDBConn.js') // "mariaDBConn.js" 파일을 불러옴. 

const express = require('express');
const path = require('path');
const router = express.Router();

// POST 방식 요청이면  /loginProcess 라우터  
router.post('/', (req, res) => {  
  let  id  = req.body['id'] // POST 방식 요청이면  req.body[".."] 로 
  let  pw  = req.body['pw'] // POST 방식 요청이면  req.body[".."] 로 
  let  name  = req.body['name'] // POST 방식 요청이면  req.body[".."] 로 
 
  mdbConn.addUser( id, pw, name ).then((result)=>{ 
         res.send("회원가입 성공하였습니다. <a href=/login > 로그인하세요.</a>")
     }
   );
});

module.exports = router;