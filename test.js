'use strict';

var assert = require('assert')
  , arrayPluck = require('./lib/array-pluck');

it('should get list of names from list', function () {
  var peoples = [
        { name: 'Fredrik', age: 22, favorites: { fruit: 'Pineapple' } },
        { name: 'Elli', age: 22, favorites: { fruit: 'Apple' } }
      ]
    , result = arrayPluck(peoples, 'name');

  assert.equal(result[0], 'Fredrik');
  assert.equal(result[1], 'Elli');
});

it('should get a list of favorite fruit from list', function () {
  var peoples = [
        { name: 'Fredrik', age: 22, favorites: { fruit: 'Pineapple' } },
        { name: 'Elli', age: 22, favorites: { fruit: 'Apple' } }
      ]
    , result = arrayPluck(peoples, 'favorites.fruit');

  assert.equal(result[0], 'Pineapple');
  assert.equal(result[1], 'Apple');
});