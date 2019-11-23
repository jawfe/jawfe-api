const assert = require('assert');
const app = require('../../src/app');

describe('\'action-types\' service', () => {
  it('registered the service', () => {
    const service = app.service('action-types');

    assert.ok(service, 'Registered the service');
  });
});
