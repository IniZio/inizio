const path = require('path');
const { parse: parsePgConnectionString } = require('pg-connection-string')

const postgresConfig = parsePgConnectionString(process.env.DB_URL)

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: postgresConfig.host,
      port: postgresConfig.port,
      database: postgresConfig.database,
      user: postgresConfig.user,
      password: postgresConfig.password,
      schema: 'app_inizio',
      ssl: env('DB_SSL', false)
    },
    useNullAsDefault: true,
  },
});
