# loopback-shortId-mixin
A mixin to set id to shortid for a loopback Model.

[![Build Status](https://travis-ci.org/FengYuHe/loopback-shortId-mixin.svg?branch=master)](https://travis-ci.org/FengYuHe/loopback-shortId-mixin)
[![Coverage Status](https://coveralls.io/repos/github/FengYuHe/loopback-shortId-mixin/badge.svg?branch=master)](https://coveralls.io/github/FengYuHe/loopback-shortId-mixin?branch=master)

## INSTALL

```sh
npm i --save loopback-shortid-mixin
```

There are 2 ways to enable mixin:

### 1) server.js

In your server/server.js file add the following line before the boot(app, __dirname); line.

```js
...
var app = module.exports = loopback();
...
// Add shortid Mixin to loopback
require('loopback-shortid-mixin')(app);

boot(app, __dirname, function(err) {
  'use strict';
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});
```

2) mixin sources

Add the mixins property to your server/model-config.json like the following:

```json
{
  "_meta": {
    "sources": [
      "loopback/common/models",
      "loopback/server/models",
      "../common/models",
      "./models"
    ],
    "mixins": [
      "loopback/common/mixins",
      "loopback/server/mixins",
      "../node_modules/loopback-shortid-mixin",
      "../common/mixins",
      "./mixins"
    ]
  }
}
```

## config

To use with your Models add the mixins attribute to the definition object of your model config.

```json
{
  "name": "Widget",
  "base": "PersistedModel",
  "idInjection": true,
  "options": {
    "validateUpsert": true
  },
  "properties": {
    "id": {
      "type": "string",
      "id": true
    },
    "name": {
      "type": "string",
      "required": false
    },
    "type": {
      "type": "string",
      "required": false
    }
  },
  "mixins": {
    "ShortId" : true
  }
}

```

## example

```js
const loopback = require('loopback');

const app = loopback();
const Widget = app.models.Widget;
Widget.create({name: 'foo', type: 'bar'});
```
will return

```json
{
  "name": "foo",
  "type": "bar",
  "id": "rJ9ZE74AW"
}
```

## LICENSE

@MIT