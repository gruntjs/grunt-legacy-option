/*!
 * grunt-legacy-option <https://github.com/gruntjs/grunt-legacy-option>
 *
 * Copyright (c) 2015 "Cowboy" Ben Alman.
 * Licensed under the MIT license.
 */

'use strict';

/* deps: mocha */
var assert = require('assert');
var should = require('should');
var option = require('./');

describe('option', function () {
  before(function(done) {
    option.init();
    done();
  });
  after(function(done) {
    option.init();
    done();
  });

  it('option.init', function() {
    var expected = {foo:'bar', bool:true, 'bar':{foo:'bar'}};
    option.init(expected).should.eql(expected);
  });

  it('option', function() {
    option('foo', 'bar').should.equal(option('foo'));

    option('foo', {foo:'bar'});
    option('foo').should.eql({foo:'bar'});
    option('no-there').should.be.false;

    option('there', false);
    option('no-there').should.be.true;
  });

  it('option.flags', function() {
    option.init({
      foo: 'bar',
      there: true,
      obj: {foo: 'bar'},
      arr: []
    });
    option.flags().should.eql(['--foo=bar', '--there', '--obj=[object Object]']);
  });
});


