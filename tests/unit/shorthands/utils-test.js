import utils from 'ember-cli-mirage/shorthands/utils';
import Db from 'ember-cli-mirage/db';

import {module, test} from 'qunit';

var request;
module('mirage:shorthands#utils', {
  beforeEach: function() {
    request = { params: {id: ''} };
  }
});

test('it returns a number if it\'s a number', function(assert) {
  request.params.id = 2;
  assert.equal(utils.getIdForRequest(request), 2, 'it returns a number');
});

test('it returns a number if it\'s a string represented number', function(assert) {
  request.params.id = "2";
  assert.equal(utils.getIdForRequest(request), 2, 'it returns a number');
});

test('it returns a string it\'s a dasherized number', function(assert) {
  request.params.id = "2-1";
  assert.equal(utils.getIdForRequest(request), "2-1", 'it returns a number');
});

test('it returns a string if it\'s a string', function(assert) {
  request.params.id = "someID";
  assert.equal(utils.getIdForRequest(request), "someID", 'it returns a number');
});

test('url without id returns correct type', function (assert) {
  var noQueryWithSlash = '/api/users/';
  var noQueryWithoutSlash = '/api/users';
  var urlWithSlash = '/api/users/?test=true';
  var urlWithoutSlash = '/api/users?test=true';
  
  assert.equal(utils.getTypeFromUrl(urlWithSlash), 'user', 'with slash returns a singular type');
  assert.equal(utils.getTypeFromUrl(urlWithoutSlash), 'user', 'without slash returns a singular type');
  assert.equal(utils.getTypeFromUrl(noQueryWithSlash), 'user', 'no query with slash returns a singular type');
  assert.equal(utils.getTypeFromUrl(noQueryWithoutSlash), 'user', 'no query without slash returns a singular type');
});
