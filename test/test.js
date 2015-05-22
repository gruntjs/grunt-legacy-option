/*!
 * grunt <http://gruntjs.com/>
 *
 * Copyright (c) 2013-2015 "Cowboy" Ben Alman.
 * Licensed under the MIT license.
 */

'use strict';

var assert = require('assert');
var legacyOption = require('../');
var option;

describe('option', function () {
  before(function(done) {
    option = legacyOption.create();
    done();
  });

  it('option.init', function() {
    var expected = {foo:'bar', bool:true, 'bar':{foo:'bar'}};
    assert.deepEqual(option.init(expected), expected);
  });

  it('option', function() {
    assert.equal(option('foo', 'bar'), option('foo'));

    option('foo', {foo:'bar'});
    assert.deepEqual(option('foo'), {foo:'bar'});
    assert.equal(option('no-there'), false);

    option('there', false);
    assert.equal(option('no-there'), true);
  });

  it('option.flags', function() {
    option.init({
      foo: 'bar',
      there: true,
      obj: {foo: 'bar'},
      arr: []
    });
    assert.deepEqual(option.flags(), ['--foo=bar', '--there', '--obj=[object Object]']);
  });
});


