// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./Data/ICN.db3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./Data/migrations"
    },
    seeds: {
      directory: "./Data/seeds"
    }
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: "./Data/migrations"
    },
    seeds: {
      directory: "./Data/seeds"
    }
  }
};