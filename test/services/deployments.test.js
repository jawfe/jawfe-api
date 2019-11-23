const assert = require('assert');
const app = require('../../src/app');

describe('\'deployments\' service', () => {
  it('registered the service', () => {
    const service = app.service('deployments');

    assert.ok(service, 'Registered the service');
  });
});
