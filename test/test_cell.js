var assert = require('assert');
const local_testing = require('../local_testinbg/dev');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe('my_function', function() {
  it('should print anything it is given', function(done) {
    let result = local_testing.my_function('A');
    expect.result.
    });
  });
