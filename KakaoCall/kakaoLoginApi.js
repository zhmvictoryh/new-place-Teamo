const axios = require('axios');
const qs = require('qs');

const getKakaoToken = async (code) => {
  const result = await axios({
    method: 'POST',
    url: 'https://kauth.kakao.com/oauth/token',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    },
    data: qs.stringify({
      grant_type: 'authorization_code',
      redirect_uri: 'http://localhost:3000/users/kakao/auth',
      client_id: process.env.KAKAO_REST_KEY, //env파일로
      code,
    }),
  });
  return result;
};

const getKakaoUserInformation = async (token) => {
  const result = await axios({
    method: 'GET',
    url: 'https://kapi.kakao.com/v2/user/me',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return result;
};

module.exports = { getKakaoToken, getKakaoUserInformation };
