const assert = require('assert');
const app = require('../../src/app');

describe('\'intergrations\' service', () => {
  it('registered the service', () => {
    const service = app.service('intergrations');

    assert.ok(service, 'Registered the service');
  });
});
