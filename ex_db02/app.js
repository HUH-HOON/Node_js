const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();
const loginRouter = require('./routes/login');
const loginProcessRouter = require('./routes/loginProcess');
const joinRouter = require('./routes/join');
const joinProcessRouter = require('./routes/joinProcess');
const app = express();

// 이미지, css, html 등의 정적 파일 경로 
app.use('/static', express.static(__dirname + '/public/'));

app.set('port', process.env.PORT || 3000);

app.use(morgan('dev')); 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    secure: false,
  },
  name: 'session-cookie',
}));

app.use('/login', loginRouter);
app.use('/loginprocess', loginProcessRouter);
app.use('/join', joinRouter);
app.use('/joinprocess', joinProcessRouter);

app.use((req, res, next) => {
  res.status(404).send('Not Found');
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
});

app.set('view engine','ejs');
app.set('views','./views_ejs');

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});
