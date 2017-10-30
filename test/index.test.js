const test = require('ava');
const path = require('path');
const shortid = require('shortid');
const SIMPLE_APP = path.join(__dirname, 'simple-app');

const app = require(path.join(SIMPLE_APP, 'server/server.js'));
const Widget = app.models.Widget;

test(async t => {
  const widget = await Widget.create({name: 'foo', type: 'bar'});
  console.log(widget);
  t.true(shortid.isValid(widget.id));
});