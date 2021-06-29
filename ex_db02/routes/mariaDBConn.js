const mariadb = require('mariadb'); 
const vals = require('./consts.js'); // consts.js 파일을 불러옴 
const pool = mariadb.createPool({ 
    host: vals.DBHost, 
    port:vals.DBPort, 
    user: vals.DBUser, 
    password: vals.DBPass, 
    connectionLimit: 5 });  

async function GetUserList(){ 
    let conn, rows; 
    try{ 
        conn = await pool.getConnection(); 
        conn.query('USE nodejs_test'); 
        rows = await conn.query('SELECT * FROM users'); 
    } catch(err){ 
        throw err; 
    } finally{ 
        if (conn) 
            conn.end(); 
            return rows; 
        } 
    }  

async function addUser(userid, userpw, username){ 
        let conn, rows; 
        try{ 
            conn = await pool.getConnection(); 
            conn.query('USE nodejs_test'); 
            console.log("userid ", userid);
            var result = 
             await conn.query(`insert into users (user_id, user_pw, user_name) values ('${userid}','${userpw}','${username}' )`);

        } catch(err){ 
            throw err; 
        } finally{  
            if (conn) 
                conn.end(); 
                return result; 
            } 
        }  
        async function GetUser(userid){ 
            let conn, rows; 
            try{ 
                conn = await pool.getConnection(); 
                conn.query('USE nodejs_test'); 
                console.log("userid ", userid);
                rows = await conn.query(` SELECT * FROM users where user_id='${userid}'`);
    
            } catch(err){ 
                throw err; 
            } finally{  
                if (conn) 
                    conn.end(); 
                    return rows; 
                } 
            }     
    module.exports = { getUserList: GetUserList,  getUser:GetUser ,  addUser:addUser  } 
    //다른 파일에서 GetUserList 를  getUserList로 불러서 쓸수 있음 

   