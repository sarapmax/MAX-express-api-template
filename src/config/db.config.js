require('dotenv-safe').config()

module.exports = {
  development: {
    use_env_variable: 'DATABASE_URL',
    define: {
      underscored: true,
    },
  },
  test: {
    use_env_variable: 'TEST_DATABASE_URL',
    define: {
      underscored: true,
    },
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    define: {
      underscored: true,
    },
  },
}
