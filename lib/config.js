// Container for all the environments
var environments = {}

// Staging (default) environment
environments.staging = {
  'httpPort' : 3000,
  'httpsPort': 3001,
  'envName' : 'staging',
  'hashingSecret' : 'thisIsASecret'
}

// Production environment
environments.production = {
  'httpPort' : 5000,
  'httpsPort': 5001,
  'envName' : 'production',
  'hashingSecret' : 'thisIsAlsoASecret'
}

// Determine which environment was passed as a command-line argument
const NODE_ENV = process.env.NODE_ENV
var currentEnvironment = typeof(NODE_ENV) == 'string' ? NODE_ENV : ''

// Check that the current environment is one of the environments above
var environmentToExport = typeof(environments[currentEnvironment]) == 'object' ? environments[currentEnvironment] : environments.staging

// Export the module
module.exports = environmentToExport