// Initializes the `intergrations` service on path `/intergrations`
const { Intergrations } = require('./intergrations.class');
const createModel = require('../../models/intergrations.model');
const hooks = require('./intergrations.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/intergrations', new Intergrations(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('intergrations');

  service.hooks(hooks);
};
