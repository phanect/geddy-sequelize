(function() {
  "use strict";

  export.init = function(callback) {
    var dbconfig = geddy.config.db.sequelize;

    global.Sequelize = require("sequelize");
    global.sequelize = new Sequelize(
      dbconfig.dbname,
      dbconfig.username,
      dbconfig.password,
      {
        host: dbconfig.host ? dbconfig.host : "localhost",
        dialect: dbconfig.adapter,
        port: dbconfig.port
      }
    );

    sequelize
    .authenticate()
    .complete(function(err) {
      callback(err);
    });
  };
}());
