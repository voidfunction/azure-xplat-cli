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
  .put('/storageclitest?restype=container&comp=lease')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Wed, 20 Jul 2016 09:57:08 GMT',
  etag: '"0x8D3B0843692560E"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '2206eec5-0001-004a-396d-e2a660000000',
  'x-ms-version': '2015-04-05',
  'x-ms-lease-id': '0e6d1fc6-aa08-4e8a-84d5-6e7080d7d429',
  date: 'Wed, 20 Jul 2016 09:57:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .put('/storageclitest?restype=container&comp=lease')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Wed, 20 Jul 2016 09:57:08 GMT',
  etag: '"0x8D3B0843692560E"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '2206eec5-0001-004a-396d-e2a660000000',
  'x-ms-version': '2015-04-05',
  'x-ms-lease-id': '0e6d1fc6-aa08-4e8a-84d5-6e7080d7d429',
  date: 'Wed, 20 Jul 2016 09:57:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .head('/storageclitest?restype=container')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Wed, 20 Jul 2016 09:57:08 GMT',
  etag: '"0x8D3B0843692560E"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '3ff34ce1-0001-0008-046d-e28d74000000',
  'x-ms-version': '2015-04-05',
  'x-ms-lease-status': 'locked',
  'x-ms-lease-state': 'leased',
  'x-ms-lease-duration': 'fixed',
  date: 'Wed, 20 Jul 2016 09:57:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .head('/storageclitest?restype=container')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Wed, 20 Jul 2016 09:57:08 GMT',
  etag: '"0x8D3B0843692560E"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '3ff34ce1-0001-0008-046d-e28d74000000',
  'x-ms-version': '2015-04-05',
  'x-ms-lease-status': 'locked',
  'x-ms-lease-state': 'leased',
  'x-ms-lease-duration': 'fixed',
  date: 'Wed, 20 Jul 2016 09:57:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .get('/storageclitest?restype=container&comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers><SignedIdentifier><Id>containerpolicy02</Id><AccessPolicy><Start>2014-12-01T00:00:00.0000000Z</Start><Expiry>2099-12-31T00:00:00.0000000Z</Expiry><Permission>rl</Permission></AccessPolicy></SignedIdentifier></SignedIdentifiers>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  'last-modified': 'Wed, 20 Jul 2016 09:57:08 GMT',
  etag: '"0x8D3B0843692560E"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '142b7b2e-0001-0010-146d-e2a0e1000000',
  'x-ms-version': '2015-04-05',
  date: 'Wed, 20 Jul 2016 09:57:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .get('/storageclitest?restype=container&comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers><SignedIdentifier><Id>containerpolicy02</Id><AccessPolicy><Start>2014-12-01T00:00:00.0000000Z</Start><Expiry>2099-12-31T00:00:00.0000000Z</Expiry><Permission>rl</Permission></AccessPolicy></SignedIdentifier></SignedIdentifiers>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  'last-modified': 'Wed, 20 Jul 2016 09:57:08 GMT',
  etag: '"0x8D3B0843692560E"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '142b7b2e-0001-0010-146d-e2a0e1000000',
  'x-ms-version': '2015-04-05',
  date: 'Wed, 20 Jul 2016 09:57:53 GMT',
  connection: 'close' });
 return result; }]];