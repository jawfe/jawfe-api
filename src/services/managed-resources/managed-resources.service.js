// Initializes the `managed-resources` service on path `/managed-resources`
const { ManagedResources } = require('./managed-resources.class');
const createModel = require('../../models/managed-resources.model');
const hooks = require('./managed-resources.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/managed-resources', new ManagedResources(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('managed-resources');

  service.hooks(hooks);
};
