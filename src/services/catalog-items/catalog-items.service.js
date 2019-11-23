// Initializes the `catalog-items` service on path `/catalog-items`
const { CatalogItems } = require('./catalog-items.class');
const createModel = require('../../models/catalog-items.model');
const hooks = require('./catalog-items.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/catalog-items', new CatalogItems(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('catalog-items');

  service.hooks(hooks);
};
