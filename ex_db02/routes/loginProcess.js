const mdbConn = require('./mariaDBConn.js') // "mariaDBConn.js" 파일을 불러옴. 

const express = require('express');
const path = require('path');
const router = express.Router();

// POST 방식 요청이면  /loginProcess 라우터  
router.post('/', (req, res) => {  
  let  id  = req.body['id'] // POST 방식 요청이면  req.body[".."] 로 
  let  pw  = req.body['pw'] // POST 방식 요청이면  req.body[".."] 로 
 
  mdbConn.getUser( id ).then((row)=>{
     if (pw == row[0].user_pw ){
         req.session.loginuser = row[0].user_name; 
         res.render("main", {userid : req.session.loginuser})
     }else{ 
         res.send("로그인 실패. 다시 로그인하세요.")
     }
  });
   

}); 

module.exports = router;