// Container for all the environments
var environments = {}

// Staging (default) environment
environments.staging = {
  port : 3000,
  'envName' : 'staging'
}

// Production environment
environments.production = {
  'port' : 5000,
  'envName' : 'production'

}

// Determine which environment was passed as a command-line argument
const NODE_ENV = process.env.NODE_ENV
var currentEnvironment = typeof(NODE_ENV) == 'string' ? NODE_ENV : ''

// Check that the current environment is one of the environments above
var environmentToExport = typeof(environments[currentEnvironment]) == 'object' ? environments[currentEnvironment] : environments.staging

// Export the module
module.exports = environmentToExport