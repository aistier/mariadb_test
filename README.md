## configuration 파일 추가

아래의 내용을 참조하여 database.js 파일 추가 후 실행

1. config 폴더 생성

2. database.js 파일 생성

3. database.js 내 데이터베이스 configuration 아래 코드 참조하여 작성 

```javascript

var mariadb = require('mariadb');

var pool = mariadb.createPool({ 
    host: '<localhost or host>', 
    user: '<userName>', 
    port: '<portNumber>',
    password: '<passowrd>', 
    database: '<schema>'
});

pool.getConnection((err, connection) => {
    console.log(err);
    console.log(connection);
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection was closed.')
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Database has too many connections.')
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('Database connection was refused.')
        }
    }
    if (connection) connection.release()
    return
})
module.exports = pool;

```