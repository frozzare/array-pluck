/*
 * array-pluck
 * https://github.com/frozzare/array-pluck
 *
 * Copyright (c) 2014 Fredrik Forsmo
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (arr, prop) {
  if (!(arr instanceof Array) || typeof prop !== 'string') {
    return [];
  }

  var res   = []
    , parts = prop.split('.')
    , obj;

  for (var i = 0, l = arr.length; i < l; i++) {
    obj = arr[i];

    for (var j = 0, k = parts.length; j < k; j++) {
      obj = obj[parts[j].toLowerCase()];
    }

    res.push(obj);
  }

  return res;
};
