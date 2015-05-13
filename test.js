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
    this.option = option.create();
    done();
  });

  it('option.init', function() {
    var expected = {foo:'bar', bool:true, 'bar':{foo:'bar'}};
    this.option.init(expected).should.eql(expected);
  });

  it('option', function() {
    this.option('foo', 'bar').should.equal(this.option('foo'));

    this.option('foo', {foo:'bar'});
    this.option('foo').should.eql({foo:'bar'});
    this.option('no-there').should.be.false;

    this.option('there', false);
    this.option('no-there').should.be.true;
  });

  it('option.flags', function() {
    this.option.init({
      foo: 'bar',
      there: true,
      obj: {foo: 'bar'},
      arr: []
    });
    this.option.flags().should.eql(['--foo=bar', '--there', '--obj=[object Object]']);
  });
});


