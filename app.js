const express = require('express');
const app = express();
const path = require('path');
const logger = require('./config/logger');
const compression = require('compression');
app.use(compression());
//CORS
const cors = require('cors');
console.log('앱이 진짜로 다시 켜졌습니다');
const corsOptions = {
  //cors 설정
  origin: '*', // 전체 허용
  methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
  preflightContinue: false,

  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', require('./routes/index'));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  return res.status(404).send('404 NOT FOUND');
});

// error handler
app.use(function (err, req, res, next) {
  logger.error(`${err.stack}`);
  return res.status(err.status).json({ errMsg: err.message });
});

module.exports = app;
