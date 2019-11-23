// Initializes the `action-types` service on path `/action-types`
const { ActionTypes } = require('./action-types.class');
const createModel = require('../../models/action-types.model');
const hooks = require('./action-types.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/action-types', new ActionTypes(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('action-types');

  service.hooks(hooks);
};
