// Initializes the `blueprints` service on path `/blueprints`
const { Blueprints } = require('./blueprints.class');
const createModel = require('../../models/blueprints.model');
const hooks = require('./blueprints.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/blueprints', new Blueprints(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('blueprints');

  service.hooks(hooks);
};
