const assert = require('assert');
const app = require('../../src/app');

describe('\'managed-resources\' service', () => {
  it('registered the service', () => {
    const service = app.service('managed-resources');

    assert.ok(service, 'Registered the service');
  });
});
