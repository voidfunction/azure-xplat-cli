// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'ce4a7590-4722-4bcf-a2c6-e473e9f11778',
    name: 'Azure Storage DM Test',
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
  process.env['AZURE_STORAGE_TEST_LOCATION'] = 'East Asia';
  process.env['AZURE_STORAGE_TEST_TYPE'] = 'LRS';
  process.env['AZURE_STORAGE_TEST_KIND'] = 'storage';
  process.env['AZURE_RESOURCE_GROUP_TEST_LOCATION'] = 'East Asia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourcegroups/armclistorageGroup4700?api-version=2016-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'armclistorageGroup4700' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-request-id': 'f713bfa7-714c-4602-9402-399b4f210b9a',
  'x-ms-correlation-request-id': 'f713bfa7-714c-4602-9402-399b4f210b9a',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20170213T093815Z:f713bfa7-714c-4602-9402-399b4f210b9a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 13 Feb 2017 09:38:15 GMT',
  connection: 'close',
  'content-length': '114' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourcegroups/armclistorageGroup4700?api-version=2016-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'armclistorageGroup4700' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-request-id': 'f713bfa7-714c-4602-9402-399b4f210b9a',
  'x-ms-correlation-request-id': 'f713bfa7-714c-4602-9402-399b4f210b9a',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20170213T093815Z:f713bfa7-714c-4602-9402-399b4f210b9a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 13 Feb 2017 09:38:15 GMT',
  connection: 'close',
  'content-length': '114' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourcegroups/armclistorageGroup4700?api-version=2016-09-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/armclistorageGroup4700\",\"name\":\"armclistorageGroup4700\",\"location\":\"eastasia\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '209',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1194',
  'x-ms-request-id': '8e432c4e-9601-482f-b8d7-7d764fea8732',
  'x-ms-correlation-request-id': '8e432c4e-9601-482f-b8d7-7d764fea8732',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20170213T093816Z:8e432c4e-9601-482f-b8d7-7d764fea8732',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 13 Feb 2017 09:38:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourcegroups/armclistorageGroup4700?api-version=2016-09-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/armclistorageGroup4700\",\"name\":\"armclistorageGroup4700\",\"location\":\"eastasia\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '209',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1194',
  'x-ms-request-id': '8e432c4e-9601-482f-b8d7-7d764fea8732',
  'x-ms-correlation-request-id': '8e432c4e-9601-482f-b8d7-7d764fea8732',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20170213T093816Z:8e432c4e-9601-482f-b8d7-7d764fea8732',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 13 Feb 2017 09:38:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.Storage/checkNameAvailability?api-version=2016-12-01', '*')
  .reply(200, "{\"nameAvailable\":true}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '9a93fcaf-01d7-4bb4-ab28-853c88345df1',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': '9a93fcaf-01d7-4bb4-ab28-853c88345df1',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20170213T093817Z:9a93fcaf-01d7-4bb4-ab28-853c88345df1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 13 Feb 2017 09:38:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.Storage/checkNameAvailability?api-version=2016-12-01', '*')
  .reply(200, "{\"nameAvailable\":true}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '9a93fcaf-01d7-4bb4-ab28-853c88345df1',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': '9a93fcaf-01d7-4bb4-ab28-853c88345df1',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20170213T093817Z:9a93fcaf-01d7-4bb4-ab28-853c88345df1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 13 Feb 2017 09:38:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/armclistorageGroup4700/providers/Microsoft.Storage/storageAccounts/armclistorageaccount6646?api-version=2016-12-01', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.Storage/operations/d79ba8c1-785a-45bd-8670-1d78a26b793a?monitor=true&api-version=2016-12-01',
  'retry-after': '17',
  'x-ms-ratelimit-remaining-subscription-writes': '1193',
  'x-ms-request-id': '16fcb113-fba4-41de-8c77-98296e74bbff',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': '16fcb113-fba4-41de-8c77-98296e74bbff',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20170213T093820Z:16fcb113-fba4-41de-8c77-98296e74bbff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 13 Feb 2017 09:38:19 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/armclistorageGroup4700/providers/Microsoft.Storage/storageAccounts/armclistorageaccount6646?api-version=2016-12-01', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.Storage/operations/d79ba8c1-785a-45bd-8670-1d78a26b793a?monitor=true&api-version=2016-12-01',
  'retry-after': '17',
  'x-ms-ratelimit-remaining-subscription-writes': '1193',
  'x-ms-request-id': '16fcb113-fba4-41de-8c77-98296e74bbff',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': '16fcb113-fba4-41de-8c77-98296e74bbff',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20170213T093820Z:16fcb113-fba4-41de-8c77-98296e74bbff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 13 Feb 2017 09:38:19 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.Storage/operations/d79ba8c1-785a-45bd-8670-1d78a26b793a?monitor=true&api-version=2016-12-01')
  .reply(200, "{\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/armclistoragegroup4700/providers/Microsoft.Storage/storageAccounts/armclistorageaccount6646\",\"kind\":\"Storage\",\"location\":\"eastasia\",\"name\":\"armclistorageaccount6646\",\"properties\":{\"creationTime\":\"2017-02-13T09:38:19.7142002Z\",\"encryption\":{\"keySource\":\"Microsoft.Storage\",\"services\":{\"blob\":{\"enabled\":true,\"lastEnabledTime\":\"2017-02-13T09:38:19.7142002Z\"},\"file\":{\"enabled\":true,\"lastEnabledTime\":\"2017-02-13T09:38:19.7142002Z\"}}},\"primaryEndpoints\":{\"blob\":\"https://armclistorageaccount6646.blob.core.windows.net/\",\"file\":\"https://armclistorageaccount6646.file.core.windows.net/\",\"queue\":\"https://armclistorageaccount6646.queue.core.windows.net/\",\"table\":\"https://armclistorageaccount6646.table.core.windows.net/\"},\"primaryLocation\":\"eastasia\",\"provisioningState\":\"Succeeded\",\"statusOfPrimary\":\"available\"},\"sku\":{\"name\":\"Standard_LRS\",\"tier\":\"Standard\"},\"tags\":{},\"type\":\"Microsoft.Storage/storageAccounts\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '985',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'a3a1aa99-5432-4f8c-93b1-e24d55770fee',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': 'a3a1aa99-5432-4f8c-93b1-e24d55770fee',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20170213T093851Z:a3a1aa99-5432-4f8c-93b1-e24d55770fee',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 13 Feb 2017 09:38:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.Storage/operations/d79ba8c1-785a-45bd-8670-1d78a26b793a?monitor=true&api-version=2016-12-01')
  .reply(200, "{\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/armclistoragegroup4700/providers/Microsoft.Storage/storageAccounts/armclistorageaccount6646\",\"kind\":\"Storage\",\"location\":\"eastasia\",\"name\":\"armclistorageaccount6646\",\"properties\":{\"creationTime\":\"2017-02-13T09:38:19.7142002Z\",\"encryption\":{\"keySource\":\"Microsoft.Storage\",\"services\":{\"blob\":{\"enabled\":true,\"lastEnabledTime\":\"2017-02-13T09:38:19.7142002Z\"},\"file\":{\"enabled\":true,\"lastEnabledTime\":\"2017-02-13T09:38:19.7142002Z\"}}},\"primaryEndpoints\":{\"blob\":\"https://armclistorageaccount6646.blob.core.windows.net/\",\"file\":\"https://armclistorageaccount6646.file.core.windows.net/\",\"queue\":\"https://armclistorageaccount6646.queue.core.windows.net/\",\"table\":\"https://armclistorageaccount6646.table.core.windows.net/\"},\"primaryLocation\":\"eastasia\",\"provisioningState\":\"Succeeded\",\"statusOfPrimary\":\"available\"},\"sku\":{\"name\":\"Standard_LRS\",\"tier\":\"Standard\"},\"tags\":{},\"type\":\"Microsoft.Storage/storageAccounts\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '985',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'a3a1aa99-5432-4f8c-93b1-e24d55770fee',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': 'a3a1aa99-5432-4f8c-93b1-e24d55770fee',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20170213T093851Z:a3a1aa99-5432-4f8c-93b1-e24d55770fee',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 13 Feb 2017 09:38:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/armclistorageGroup4700/providers/Microsoft.Storage/storageAccounts/armclistorageaccount6646?api-version=2016-12-01')
  .reply(200, "{\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/armclistoragegroup4700/providers/Microsoft.Storage/storageAccounts/armclistorageaccount6646\",\"kind\":\"Storage\",\"location\":\"eastasia\",\"name\":\"armclistorageaccount6646\",\"properties\":{\"creationTime\":\"2017-02-13T09:38:19.7142002Z\",\"encryption\":{\"keySource\":\"Microsoft.Storage\",\"services\":{\"blob\":{\"enabled\":true,\"lastEnabledTime\":\"2017-02-13T09:38:19.7142002Z\"},\"file\":{\"enabled\":true,\"lastEnabledTime\":\"2017-02-13T09:38:19.7142002Z\"}}},\"primaryEndpoints\":{\"blob\":\"https://armclistorageaccount6646.blob.core.windows.net/\",\"file\":\"https://armclistorageaccount6646.file.core.windows.net/\",\"queue\":\"https://armclistorageaccount6646.queue.core.windows.net/\",\"table\":\"https://armclistorageaccount6646.table.core.windows.net/\"},\"primaryLocation\":\"eastasia\",\"provisioningState\":\"Succeeded\",\"statusOfPrimary\":\"available\"},\"sku\":{\"name\":\"Standard_LRS\",\"tier\":\"Standard\"},\"tags\":{},\"type\":\"Microsoft.Storage/storageAccounts\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '985',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'a8a1dedc-42d3-40ee-95ce-dd3b9b94a231',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': 'a8a1dedc-42d3-40ee-95ce-dd3b9b94a231',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20170213T093853Z:a8a1dedc-42d3-40ee-95ce-dd3b9b94a231',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 13 Feb 2017 09:38:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/armclistorageGroup4700/providers/Microsoft.Storage/storageAccounts/armclistorageaccount6646?api-version=2016-12-01')
  .reply(200, "{\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/armclistoragegroup4700/providers/Microsoft.Storage/storageAccounts/armclistorageaccount6646\",\"kind\":\"Storage\",\"location\":\"eastasia\",\"name\":\"armclistorageaccount6646\",\"properties\":{\"creationTime\":\"2017-02-13T09:38:19.7142002Z\",\"encryption\":{\"keySource\":\"Microsoft.Storage\",\"services\":{\"blob\":{\"enabled\":true,\"lastEnabledTime\":\"2017-02-13T09:38:19.7142002Z\"},\"file\":{\"enabled\":true,\"lastEnabledTime\":\"2017-02-13T09:38:19.7142002Z\"}}},\"primaryEndpoints\":{\"blob\":\"https://armclistorageaccount6646.blob.core.windows.net/\",\"file\":\"https://armclistorageaccount6646.file.core.windows.net/\",\"queue\":\"https://armclistorageaccount6646.queue.core.windows.net/\",\"table\":\"https://armclistorageaccount6646.table.core.windows.net/\"},\"primaryLocation\":\"eastasia\",\"provisioningState\":\"Succeeded\",\"statusOfPrimary\":\"available\"},\"sku\":{\"name\":\"Standard_LRS\",\"tier\":\"Standard\"},\"tags\":{},\"type\":\"Microsoft.Storage/storageAccounts\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '985',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'a8a1dedc-42d3-40ee-95ce-dd3b9b94a231',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': 'a8a1dedc-42d3-40ee-95ce-dd3b9b94a231',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20170213T093853Z:a8a1dedc-42d3-40ee-95ce-dd3b9b94a231',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 13 Feb 2017 09:38:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/armclistorageGroup4700/providers/Microsoft.Storage/storageAccounts/armclistorageaccount6646?api-version=2016-12-01', '*')
  .reply(200, "{\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/armclistoragegroup4700/providers/Microsoft.Storage/storageAccounts/armclistorageaccount6646\",\"kind\":\"Storage\",\"location\":\"eastasia\",\"name\":\"armclistorageaccount6646\",\"properties\":{\"creationTime\":\"2017-02-13T09:38:19.7142002Z\",\"encryption\":{\"keySource\":\"Microsoft.Storage\",\"services\":{\"blob\":{\"enabled\":true,\"lastEnabledTime\":\"2017-02-13T09:38:19.7142002Z\"}}},\"primaryEndpoints\":{\"blob\":\"https://armclistorageaccount6646.blob.core.windows.net/\",\"file\":\"https://armclistorageaccount6646.file.core.windows.net/\",\"queue\":\"https://armclistorageaccount6646.queue.core.windows.net/\",\"table\":\"https://armclistorageaccount6646.table.core.windows.net/\"},\"primaryLocation\":\"eastasia\",\"provisioningState\":\"Succeeded\",\"statusOfPrimary\":\"available\"},\"sku\":{\"name\":\"Standard_LRS\",\"tier\":\"Standard\"},\"tags\":{},\"type\":\"Microsoft.Storage/storageAccounts\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '912',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'fc6770c5-4b1b-401a-bf10-942e528c98ca',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'fc6770c5-4b1b-401a-bf10-942e528c98ca',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20170213T093855Z:fc6770c5-4b1b-401a-bf10-942e528c98ca',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 13 Feb 2017 09:38:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/armclistorageGroup4700/providers/Microsoft.Storage/storageAccounts/armclistorageaccount6646?api-version=2016-12-01', '*')
  .reply(200, "{\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/armclistoragegroup4700/providers/Microsoft.Storage/storageAccounts/armclistorageaccount6646\",\"kind\":\"Storage\",\"location\":\"eastasia\",\"name\":\"armclistorageaccount6646\",\"properties\":{\"creationTime\":\"2017-02-13T09:38:19.7142002Z\",\"encryption\":{\"keySource\":\"Microsoft.Storage\",\"services\":{\"blob\":{\"enabled\":true,\"lastEnabledTime\":\"2017-02-13T09:38:19.7142002Z\"}}},\"primaryEndpoints\":{\"blob\":\"https://armclistorageaccount6646.blob.core.windows.net/\",\"file\":\"https://armclistorageaccount6646.file.core.windows.net/\",\"queue\":\"https://armclistorageaccount6646.queue.core.windows.net/\",\"table\":\"https://armclistorageaccount6646.table.core.windows.net/\"},\"primaryLocation\":\"eastasia\",\"provisioningState\":\"Succeeded\",\"statusOfPrimary\":\"available\"},\"sku\":{\"name\":\"Standard_LRS\",\"tier\":\"Standard\"},\"tags\":{},\"type\":\"Microsoft.Storage/storageAccounts\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '912',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'fc6770c5-4b1b-401a-bf10-942e528c98ca',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'fc6770c5-4b1b-401a-bf10-942e528c98ca',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20170213T093855Z:fc6770c5-4b1b-401a-bf10-942e528c98ca',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 13 Feb 2017 09:38:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/armclistorageGroup4700/providers/Microsoft.Storage/storageAccounts/armclistorageaccount6646?api-version=2016-12-01')
  .reply(200, "{\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/armclistoragegroup4700/providers/Microsoft.Storage/storageAccounts/armclistorageaccount6646\",\"kind\":\"Storage\",\"location\":\"eastasia\",\"name\":\"armclistorageaccount6646\",\"properties\":{\"creationTime\":\"2017-02-13T09:38:19.7142002Z\",\"encryption\":{\"keySource\":\"Microsoft.Storage\",\"services\":{\"blob\":{\"enabled\":true,\"lastEnabledTime\":\"2017-02-13T09:38:19.7142002Z\"}}},\"primaryEndpoints\":{\"blob\":\"https://armclistorageaccount6646.blob.core.windows.net/\",\"file\":\"https://armclistorageaccount6646.file.core.windows.net/\",\"queue\":\"https://armclistorageaccount6646.queue.core.windows.net/\",\"table\":\"https://armclistorageaccount6646.table.core.windows.net/\"},\"primaryLocation\":\"eastasia\",\"provisioningState\":\"Succeeded\",\"statusOfPrimary\":\"available\"},\"sku\":{\"name\":\"Standard_LRS\",\"tier\":\"Standard\"},\"tags\":{},\"type\":\"Microsoft.Storage/storageAccounts\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '912',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'c3234bf9-698a-4ae7-a5b4-8add5215c253',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': 'c3234bf9-698a-4ae7-a5b4-8add5215c253',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20170213T093857Z:c3234bf9-698a-4ae7-a5b4-8add5215c253',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 13 Feb 2017 09:38:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/armclistorageGroup4700/providers/Microsoft.Storage/storageAccounts/armclistorageaccount6646?api-version=2016-12-01')
  .reply(200, "{\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/armclistoragegroup4700/providers/Microsoft.Storage/storageAccounts/armclistorageaccount6646\",\"kind\":\"Storage\",\"location\":\"eastasia\",\"name\":\"armclistorageaccount6646\",\"properties\":{\"creationTime\":\"2017-02-13T09:38:19.7142002Z\",\"encryption\":{\"keySource\":\"Microsoft.Storage\",\"services\":{\"blob\":{\"enabled\":true,\"lastEnabledTime\":\"2017-02-13T09:38:19.7142002Z\"}}},\"primaryEndpoints\":{\"blob\":\"https://armclistorageaccount6646.blob.core.windows.net/\",\"file\":\"https://armclistorageaccount6646.file.core.windows.net/\",\"queue\":\"https://armclistorageaccount6646.queue.core.windows.net/\",\"table\":\"https://armclistorageaccount6646.table.core.windows.net/\"},\"primaryLocation\":\"eastasia\",\"provisioningState\":\"Succeeded\",\"statusOfPrimary\":\"available\"},\"sku\":{\"name\":\"Standard_LRS\",\"tier\":\"Standard\"},\"tags\":{},\"type\":\"Microsoft.Storage/storageAccounts\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '912',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'c3234bf9-698a-4ae7-a5b4-8add5215c253',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': 'c3234bf9-698a-4ae7-a5b4-8add5215c253',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20170213T093857Z:c3234bf9-698a-4ae7-a5b4-8add5215c253',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 13 Feb 2017 09:38:56 GMT',
  connection: 'close' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['armclistorageaccount6646','armclistorageGroup4700'];};