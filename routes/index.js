const express = require('express');
const router = express.Router();
const userRouter = require('./user');
const postRouter = require('./post');
const searchingRouter = require('./searching');
const adminRouter = require('./admin');
const weatherRotuer = require('./weatherInfo');
const { searchMain } = require('../controllers/index');
const { justCheckAuth } = require('../middlewares/auth');
require('dotenv').config();

//swagger
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

// 배포용 및 로컬용 host 나누기
let host = `localhost:${process.env.PORT}`;
if (process.env.NODE_ENV === 'production') {
  host = process.env.DB_HOST;
}

const swaggerDefinition = {
  info: {
    title: 'Insplace API',
    version: '1.0.0',
    description: `
     In Seoul Place API 명세서
     category -> 1: 여행 / 2: 맛집 / 3: 카페 / 4: 예술 / 5: 액티비티
     gender -> 1: 남자끼리 / 2: 여자끼리 / 3: 혼성
     weather -> 1: 맑음 / 2: 비 / 3: 눈
     member -> 1: 1명 / 2: 2명 / 3: 4명 미만 / 4: 4명 이상
    `,
  },
  host: host,
  basePath: '/',
  securityDefinitions: {
    bearerAuth: {
      type: 'apiKey',
      name: 'Authorization',
      scheme: 'bearer',
      in: 'header',
      bearerFormat: 'JWT',
    },
  },
};

const options = {
  swaggerDefinition,
  apis: ['./swagger/*.js'],
};
const swaggerSpec = swaggerJSDoc(options);
router.get('./swagger.json', (req, res) => {
  res.setHeader('content-Type', 'application/json');
  res.send(swaggerSpec);
});

router.use('/users', userRouter);
router.use('/posts', postRouter);
router.use('/search', searchingRouter);
router.use('/admin', adminRouter);
router.use('/weather', weatherRotuer);
router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/* GET main page. */
router.get('/main', justCheckAuth, searchMain);

module.exports = router;
