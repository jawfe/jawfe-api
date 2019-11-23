// Initializes the `audit-logs` service on path `/audit-logs`
const { AuditLogs } = require('./audit-logs.class');
const createModel = require('../../models/audit-logs.model');
const hooks = require('./audit-logs.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/audit-logs', new AuditLogs(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('audit-logs');

  service.hooks(hooks);
};
