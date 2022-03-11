const mysqlDb = require('mysql')
const config = require('../config')
let options = {
  host: config.mysql.db_host, //  --主机名
  user: config.mysql.db_user, // --用户名
  password: config.mysql.db_passwd, //	--用户密码
  database: config.mysql.db_name, //--数据库名
  multipleStatements: true, //--启用多线池
}
var pool = mysqlDb.createPool(options)
exports.query = function (sql, values) {
  return new Promise((resolve, reject) => {
    pool.getConnection(function (err, connection) {
      if (err) {
        reject(err)
        //console.log(err, "数据库连接失败");
        resolve({
          status: 500,
        })
      } else {
        //console.log("数据库连接成功");
        connection.query(sql, values, (err, results) => {
          if (err) {
            reject(err)
            resolve({
              status: 400,
            })
          } else {
            connection.release()
            resolve({
              status: 200,
              results,
            })
            //resolve(rows)
          }
          //connection.release() // 释放连接池
        })
      }
    })
  })
}
