const config = {
  development: {
    username: "postgres",
    password: "123456",
    database: "postgres",
    host: "192.168.221.31",
    port: 5432,
    dialect: "postgres",
    define: {
      underscored: true
    },
    dialectOptions: {
      useUTC: false
    }
  },
  test: {
    username: "postgres",
    password: "123456",
    database: "postgres",
    host: "192.168.221.31",
    port: 5432,
    dialect: "postgres",
    define: {
      underscored: true
    },
    dialectOptions: {
      useUTC: false
    }
  },
  beta: {
    username: "postgres",
    password: "123456",
    database: "postgres",
    host: "192.168.221.31",
    port: 5432,
    dialect: "postgres",
    define: {
      underscored: true
    },
    dialectOptions: {
      useUTC: false
    }
  },
  production: {
    username: "postgres",
    password: "123456",
    database: "postgres",
    host: "192.168.221.31",
    port: 5432,
    dialect: "postgres",
    define: {
      underscored: true
    },
    dialectOptions: {
      useUTC: false
    }
  }
}

const env = process.env.NODE_ENV;
const configData = config[env];

export default configData;
