/*!
 * grunt <http://gruntjs.com/>
 *
 * Copyright (c) 2013-2015 "Cowboy" Ben Alman.
 * Licensed under the MIT license.
 */

'use strict';

exports.create = function() {
  // The actual option data.
  var data = {};

  /**
   * Get or set an option value.
   *
   * @param  {String} `key` The option to get or set
   * @param  {_} `value`
   * @return {_} If only the `key` is passed, the value of `key` is returned.
   * @api public
   */
  var option = function(key, value) {
    var no = key.match(/^no-(.+)$/);
    if (arguments.length === 2) {
      return (data[key] = value);
    } else if (no) {
      return data[no[1]] === false;
    } else {
      return data[key];
    }
  };

  /**
   * Initialize option data.
   *
   * @param  {Object} `obj` Optionally pass an object to initialize with, otherwise a default object is used.
   * @return {Object}
   * @api public
   */
  option.init = function(obj) {
    return (data = obj || {});
  };

  /**
   * Returns a list of options as command line flags.
   *
   * @return {Array}
   * @api public
   */
  option.flags = function() {
    return Object.keys(data).filter(function(key) {
      // Don't display empty arrays.
      return !(Array.isArray(data[key]) && data[key].length === 0);
    }).map(function(key) {
      var val = data[key];
      return '--' + (val === false ? 'no-' : '') + key +
        (typeof val === 'boolean' ? '' : '=' + val);
    });
  };

  return option;
};
