const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  remotes: {
    "menu": "http://localhost:4200/remoteEntry.js",
    "films": "http://localhost:4200/remoteEntry.js",
    "people": "http://localhost:4200/remoteEntry.js",
    "planets": "http://localhost:4200/remoteEntry.js",
    "species": "http://localhost:4200/remoteEntry.js",
    "starships": "http://localhost:4200/remoteEntry.js",
    "vehicles": "http://localhost:4200/remoteEntry.js",    
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
