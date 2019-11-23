// Initializes the `deployments` service on path `/deployments`
const { Deployments } = require('./deployments.class');
const createModel = require('../../models/deployments.model');
const hooks = require('./deployments.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/deployments', new Deployments(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('deployments');

  service.hooks(hooks);
};
