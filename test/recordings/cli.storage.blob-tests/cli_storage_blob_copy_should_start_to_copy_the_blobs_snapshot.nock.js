// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'a0d901ba-9956-4f7d-830c-2d7974c36666',
    name: 'Azure Storage DM Dev',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_STORAGE_CONNECTION_STRING'] = 'DefaultEndpointsProtocol=https;AccountName=xplat;AccountKey=null';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .put('/testblobcopysource/toCopy?comp=snapshot')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Wed, 20 Jul 2016 10:00:04 GMT',
  etag: '"0x8D3B0849F869849"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'a875cc5f-0001-0033-746d-e2cf2a000000',
  'x-ms-version': '2015-04-05',
  'x-ms-snapshot': '2016-07-20T10:00:08.8654280Z',
  date: 'Wed, 20 Jul 2016 10:00:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .put('/testblobcopysource/toCopy?comp=snapshot')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Wed, 20 Jul 2016 10:00:04 GMT',
  etag: '"0x8D3B0849F869849"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'a875cc5f-0001-0033-746d-e2cf2a000000',
  'x-ms-version': '2015-04-05',
  'x-ms-snapshot': '2016-07-20T10:00:08.8654280Z',
  date: 'Wed, 20 Jul 2016 10:00:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .get('/testblobcopysource?restype=container&comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers />", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  'last-modified': 'Wed, 20 Jul 2016 10:00:03 GMT',
  etag: '"0x8D3B0849EAF9098"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '458fcb9e-0001-0040-696d-e2bfe9000000',
  'x-ms-version': '2015-04-05',
  date: 'Wed, 20 Jul 2016 10:00:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .get('/testblobcopysource?restype=container&comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers />", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  'last-modified': 'Wed, 20 Jul 2016 10:00:03 GMT',
  etag: '"0x8D3B0849EAF9098"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '458fcb9e-0001-0040-696d-e2bfe9000000',
  'x-ms-version': '2015-04-05',
  date: 'Wed, 20 Jul 2016 10:00:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .put('/testblobcopydest/toCopy')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Wed, 20 Jul 2016 10:00:10 GMT',
  etag: '"0x8D3B084A2AC0128"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '3218dba6-0001-0011-5e6d-e2a11c000000',
  'x-ms-version': '2015-04-05',
  'x-ms-copy-id': '68ee4471-6e85-46cc-baec-1796c47b10ca',
  'x-ms-copy-status': 'success',
  date: 'Wed, 20 Jul 2016 10:00:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .put('/testblobcopydest/toCopy')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Wed, 20 Jul 2016 10:00:10 GMT',
  etag: '"0x8D3B084A2AC0128"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '3218dba6-0001-0011-5e6d-e2a11c000000',
  'x-ms-version': '2015-04-05',
  'x-ms-copy-id': '68ee4471-6e85-46cc-baec-1796c47b10ca',
  'x-ms-copy-status': 'success',
  date: 'Wed, 20 Jul 2016 10:00:09 GMT',
  connection: 'close' });
 return result; }]];