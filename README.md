# array-pluck [![Build Status](https://secure.travis-ci.org/frozzare/array-pluck.png?branch=master)](http://travis-ci.org/frozzare/array-pluck)

Extract a list of property values from array with objects

Install the module with: `npm install array-pluck`

## Example

```javascript
var arrayPluck = require('array-pluck');

var peoples = [
      { name: 'Fredrik', age: 22, favorites: { fruit: 'Pineapple' } },
      { name: 'Elli', age: 22, favorites: { fruit: 'Apple' } }
    ]
  , result = arrayPluck(peoples, 'favorites.fruit');
  
console.log(result); // ['Pineapple', 'Apple']
```

## License
Copyright (c) 2014 Fredrik Forsmo  
Licensed under the MIT license.
