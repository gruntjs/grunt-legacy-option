/*!
 * grunt-legacy-option <https://github.com/gruntjs/grunt-legacy-option>
 *
 * Copyright (c) 2015 "Cowboy" Ben Alman.
 * Licensed under the MIT license.
 */

'use strict';

var assert = require('assert');
var option = require('./');

describe('option', function () {
  before(function(done) {
    this.option = option.create();
    done();
  });

  it('option.init', function() {
    var expected = {foo:'bar', bool:true, 'bar':{foo:'bar'}};
    assert.deepEqual(this.option.init(expected), expected);
  });

  it('option', function() {
    assert.equal(this.option('foo', 'bar'), this.option('foo'));

    this.option('foo', {foo:'bar'});
    assert.deepEqual(this.option('foo'), {foo:'bar'});
    assert.equal(this.option('no-there'), false);

    this.option('there', false);
    assert.equal(this.option('no-there'), true);
  });

  it('option.flags', function() {
    this.option.init({
      foo: 'bar',
      there: true,
      obj: {foo: 'bar'},
      arr: []
    });
    assert.deepEqual(this.option.flags(), ['--foo=bar', '--there', '--obj=[object Object]']);
  });
});


