# ๐ InSplace-BE

## โ๐ป ์๋น์ค ์๊ฐ

InSplace๋ In Seoul Place์ ์ฝ์๋ก,
๋ด/์ธ๊ตญ์ธ์๊ฒ ๋น์ฅ ์ค๋ ๋ญ ํ ์ง, ์ด๋ ๊ฐ์ง์ ๋ํ ๊ณ ๋ฏผ์ ํ์ฌ ์์น์ ๋ ์จ๋ฅผ ๊ธฐ๋ฐ์ผ๋ก ์ฅ์๋ฅผ ์ถ์ฒํด์ฃผ๋ ์๋น์ค์๋๋ค.

## โ๏ธ ํ์ ์๊ฐ

- **Back End**
  - ๋์ข์(ํ์ฅ)([https://github.com/jongwanra](https://github.com/jongwanra))
  - ์ด๋ณ๊ด([https://github.com/fnrkp089](https://github.com/fnrkp089))
  - ๊น๊ธฐํ([https://github.com/TAE6919](https://github.com/TAE6919))
- **Front End**
  - ์์ง์ฑ([https://github.com/jinseoIT](https://github.com/jinseoIT))
  - ์ด๋ฏธ๋ค([https://github.com/dam-lee](https://github.com/dam-lee))
  - ๊ณ ๊ท์([https://github.com/kokyusik91](https://github.com/kokyusik91))
- **Designer**
  - ์ด๋ฏธ์ฃผ
  - ์ด๊ฒฝ๋ฏธ

## โ๏ธ Project Architecture

![Architecture](./readme_images/project_architecture0.2.png)

## ๐  Tech Stack

- Express.js
- MySQL
- Nginx Ingress
- Code Pipeline
- Code Deploy
- Swagger
- Docker
- Kubernetes
- EC2
- S3
- RDS

## ๐ง Library

|       library       |                         description                         |
| :-----------------: | :---------------------------------------------------------: |
|       dotenv        |            ๋ณด์์ ์ผ๋ก ๋ฌธ์ ๊ฐ ์๋ ๋ฐ์ดํฐ ์จ๊ธฐ๊ธฐ             |
|        cors         |            CORS๋ณด์ ์ ์ฑ์ ํด๊ฒฐํ๊ธฐ ์ํ์ฌ ์ฌ์ฉ.            |
|       bcrypt        |         ํด์ํจ์๋ฅผ ์ฌ์ฉํ์ฌ ์ํธํ ํ๊ธฐ ์ํด ์ฌ์ฉ.          |
|         joi         |                    Validate๋ฅผ ์ํด ์ฌ์ฉ.                    |
|   @slack/webhook    |                slack ์ฑํ์ ํ๊ธฐ ์ํด ์ฌ์ฉ.                 |
|     compression     |                ํ์ด์ง๋ฅผ ์์ถํ๊ธฐ ์ํด ์ฌ์ฉ.                 |
|       express       |       ๋น ๋ฅด๊ณ  ๊ฐ๋ฐฉ์ ์ธ ๊ฐ๋ฐ์ ์ํด ์น ํ๋ ์์ํฌ ์ฌ์ฉ.       |
|    jsonwebtoken     |                    JWT Token ์ํด ์ฌ์ฉ.                     |
|  morgan, wingston   |                ์๋ฌ ๋ก๊ทธ ๊ด๋ฆฌํ๊ธฐ ์ํด ์ฌ์ฉ.                |
|       mysql2        |           Node.js์์ MySQL์ ์ฌ์ฉํ๊ธฐ ์ํด ์ฌ์ฉ.           |
|      artillery      |             ์๋ฒ ๋ถํํ์คํธ ํ๊ธฐ ์ํด ์ฌ์ฉํ๋ค.             |
|       multer        |                         ํ์ผ ์๋ก๋                         |
|      multer-s3      |                      S3์ ํ์ผ ์๋ก๋                       |
| multer-s3-transform |           upload์ ์๋์ผ๋ก ํ์ผ์ ๋ณํ์์ผ์ค๋ค.            |
|    swagger-jsdoc    | ์ฃผ์์ Swagger ํ๊ทธ๋ฅผ ์ถ๊ฐํ์ฌ API๋ฅผ ๋ฌธ์ํ ํ๊ธฐ ์ํด ์ฌ์ฉ. |
| swagger-ui-express  |            API ๋ฌธ์๋ฅผ UI ๋ ๋๋ง ํ๊ธฐ ์ํด ์ฌ์ฉ.             |
|       helmet        |            ์๋ฒ ์ดํ๋ฆฌ์ผ์ด์์ ๋ณด์์ ์ํด ์ฌ์ฉ             |

## ๐ API

[Notion API Address](https://humble-impulse-a58.notion.site/API-ea80617bb56e4488807877a15ad2a3c2)

![API-1](readme_images/api-1.png)
![API-2](readme_images/api-2.png)
![API-3](readme_images/api-3.png)

## ๐ ERD

![ERD](./readme_images/erd2.png)

## โ ๋ถํ ํ์คํธ

- **์ฟ ๋ฒ๋คํฐ์ค ์ ์ฉ ์ **

  - ์ํคํ์ณ

![image](https://user-images.githubusercontent.com/86820463/144431984-430266f0-cc39-45f2-97f9-02f0faafb3fc.png)

- ๋ถํ ํ์คํธ ๊ฒฐ๊ณผ

  ![Before-Test-1](readme_images/before-kuber-1.png)
  ![Before-Test-2](readme_images/before-kuber-2.png)

- **์ฟ ๋ฒ๋คํฐ์ค ์ ์ฉ ํ**

  - ์ํคํ์ณ

    ![After-Architecture](./readme_images/test_after.png)

  - ๋ถํ ํ์คํธ ๊ฒฐ๊ณผ
    ![After-Test-1](readme_images/after-kuber-1.png)
    ![After-Test-2](readme_images/after-kuber-2.png)

- **์ด์  ์ด๋ฏธ์ง๋ก๋ฉ vs ์ธ๋ค์ผ ์ ์ฉํ**

  - ์ด์  ์ด๋ฏธ์ง ๋ก๋ฉ

    <img src="https://user-images.githubusercontent.com/44608012/144354535-f6b1614e-1fad-4312-bebe-6a02965d5f40.gif">

  - ์ธ๋ค์ผ

    <img src="https://user-images.githubusercontent.com/44608012/144354579-0c043cea-aec1-4168-88d6-f7497f9a3d47.gif">

  - ์ธ๋ค์ผ ์ ์ฉ ์  ํ ์๋ต ์๋ ์ฐจ์ด

    ![image](https://user-images.githubusercontent.com/86820463/144435084-f3623bd3-e068-4f4b-88de-b7701e72fe2e.png)

    Slow 3G ํ๊ฒฝ์์ ์ฝ 2๋ฐฐ ์ ๋ ์๋๊ฐ์ ์ด ๋์๋ค๋ ๊ฒ์ ์ ์ ์๊ณ  InSplace๋ ์ด๋ฏธ์ง๊ฐ ์ฃผ๋ ์๋น์ค์ด๋ฏ๋ก 2๋ฐฐ ์ด์์ ํจ๊ณผ๋ฅผ ๋ํ๋ผ ๊ฒ์ผ๋ก ๊ธฐ๋ํ๊ณ  ์์ต๋๋ค.

## โ ํฅํ ํ๋ก์ ํธ์ ๋ชฉํ

- **์๋ฌ ๋ก๊ทธ ๊ด๋ฆฌ**

  - ํ์ฌ ๋ฐฑ์๋ ์๋ฌ ๋ก๊ทธ ๊ด๋ฆฌ
    <div style="display:flex"><img src="https://user-images.githubusercontent.com/86820463/144436859-85a6fddb-135b-4565-8c49-f3cbdeb1e1a2.png" style="width:300px"/><img src="https://user-images.githubusercontent.com/86820463/144441481-56bc65a4-a9fc-4ad0-8899-cc2728534b24.png" style="margin-left:20px; width:600px"/></div>

  - ์ ์ฉ ์ํฌ ์๋ฌ ๋ก๊ทธ ๊ด๋ฆฌ(ํค๋ฐ๋)
    <p align="center"><img src="https://user-images.githubusercontent.com/86820463/144443197-7554779c-53e0-4f7d-a450-53cd1d9f584d.png" width="500" height="200"></p>
  - ๊ธฐ์กด ๋ก๊ทธ ๊ด๋ฆฌ๋ฒ๊ณผ ELK์ ์ฐจ์ด์ .
    - ํค๋ฐ๋๋ฅผ ์ฌ์ฉํ๋ฉด ํ์ผ๋ก ๋ก๊ทธ ๊ด๋ฆฌํ๋ ๊ฒ ๋ณด๋ค ์ง๊ด์ ์ด๋ค.
    - Elastic Search ์ฌ์ฉํ๋ฉด ํ์ผ๋ก ๋ก๊ทธ ๊ด๋ฆฌํ๋ ๊ฒ ๋ณด๋ค ํด๋นํ๋ ์๋ฌ๋ฅผ ์ฐพ๊ธฐ๊ฐ ๋ ์ฝ๋ค.

- **ํ์คํธ ์ฝ๋ ์์ฑ**
    <p align="center"><img src="https://user-images.githubusercontent.com/86820463/144460650-409b1351-e12d-4a62-818a-8973590786b3.png" width="500" height="200"></p>
  - ํ์คํธ ์ฝ๋ ์์ฑํ๋ ์ด์ .

  - ์๋ฒ๋ฅผ ์คํํ๋ ๋ฑ์ ์๊ฐ์ ์ ์ฝํ  ์ ์๋ค.
  - ํ์ํ ๋ฐ์ดํฐ๋ฅผ ๋ฏธ๋ฆฌ ๊ธฐ์ํ๊ณ , ํ์คํธ๊ฐ ๋๋๊ณ  ์ ๋ฆฌํ๋ ๋ฑ์ ํ๋์ ํ์ง ์์๋ ๋๋ค.
  - ๋จ์ํ์คํธ์ ๊ฒฝ์ฐ ์์ญ ms ์ด๊ธฐ ๋๋ฌธ์ ํ์คํธ๊ฐ ๋งค์ฐ ๋น ๋ฅด๋ค.
  - ๋ฌธ์๋ก์์ ์ญํ ์ด ๊ฐ๋ฅํ๋ค.
  - ๊น๋ํ ์ธํฐํ์ด์ค๋ฅผ ์ป์ด๋ผ ์ ์๋ค.
