const assert = require('assert');
const app = require('../../src/app');

describe('\'blueprints\' service', () => {
  it('registered the service', () => {
    const service = app.service('blueprints');

    assert.ok(service, 'Registered the service');
  });
});
