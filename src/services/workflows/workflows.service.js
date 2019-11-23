// Initializes the `workflows` service on path `/workflows`
const { Workflows } = require('./workflows.class');
const createModel = require('../../models/workflows.model');
const hooks = require('./workflows.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/workflows', new Workflows(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('workflows');

  service.hooks(hooks);
};
