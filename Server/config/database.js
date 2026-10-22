// DB 접속 정보는 환경변수로 주입합니다. (DB_HOST, DB_USER, DB_PASSWORD, DB_NAME)
module.exports = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME || 'Crescendor',
}
