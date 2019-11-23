const assert = require('assert');
const app = require('../../src/app');

describe('\'catalog-items\' service', () => {
  it('registered the service', () => {
    const service = app.service('catalog-items');

    assert.ok(service, 'Registered the service');
  });
});
