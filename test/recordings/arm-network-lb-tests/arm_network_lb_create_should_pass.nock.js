// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    name: 'CollaberaInteropTest',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGCreateLb?api-version=2016-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatTestGCreateLb' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14925',
  'x-ms-request-id': '42c57073-f610-40de-8118-8d96c56730ee',
  'x-ms-correlation-request-id': '42c57073-f610-40de-8118-8d96c56730ee',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T111442Z:42c57073-f610-40de-8118-8d96c56730ee',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 29 Dec 2015 11:14:41 GMT',
  connection: 'close',
  'content-length': '110' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGCreateLb?api-version=2016-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatTestGCreateLb' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14925',
  'x-ms-request-id': '42c57073-f610-40de-8118-8d96c56730ee',
  'x-ms-correlation-request-id': '42c57073-f610-40de-8118-8d96c56730ee',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T111442Z:42c57073-f610-40de-8118-8d96c56730ee',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 29 Dec 2015 11:14:41 GMT',
  connection: 'close',
  'content-length': '110' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGCreateLb?api-version=2016-09-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLb\",\"name\":\"xplatTestGCreateLb\",\"location\":\"eastus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '199',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1175',
  'x-ms-request-id': '9c0d7d9f-0bed-4fbc-ada9-c4fe128d4b33',
  'x-ms-correlation-request-id': '9c0d7d9f-0bed-4fbc-ada9-c4fe128d4b33',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T111445Z:9c0d7d9f-0bed-4fbc-ada9-c4fe128d4b33',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 29 Dec 2015 11:14:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGCreateLb?api-version=2016-09-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLb\",\"name\":\"xplatTestGCreateLb\",\"location\":\"eastus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '199',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1175',
  'x-ms-request-id': '9c0d7d9f-0bed-4fbc-ada9-c4fe128d4b33',
  'x-ms-correlation-request-id': '9c0d7d9f-0bed-4fbc-ada9-c4fe128d4b33',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T111445Z:9c0d7d9f-0bed-4fbc-ada9-c4fe128d4b33',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 29 Dec 2015 11:14:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLb/providers/Microsoft.Network/loadBalancers/xplattestlb?api-version=2015-06-15')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/loadBalancers/xplattestlb' under resource group 'xplatTestGCreateLb' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'ec8fd478-d788-4b21-b8bf-b3c697fb7707',
  'x-ms-correlation-request-id': 'ec8fd478-d788-4b21-b8bf-b3c697fb7707',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T111447Z:ec8fd478-d788-4b21-b8bf-b3c697fb7707',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 29 Dec 2015 11:14:46 GMT',
  connection: 'close',
  'content-length': '165' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLb/providers/Microsoft.Network/loadBalancers/xplattestlb?api-version=2015-06-15')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/loadBalancers/xplattestlb' under resource group 'xplatTestGCreateLb' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'ec8fd478-d788-4b21-b8bf-b3c697fb7707',
  'x-ms-correlation-request-id': 'ec8fd478-d788-4b21-b8bf-b3c697fb7707',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T111447Z:ec8fd478-d788-4b21-b8bf-b3c697fb7707',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 29 Dec 2015 11:14:46 GMT',
  connection: 'close',
  'content-length': '165' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLb/providers/Microsoft.Network/loadBalancers/xplattestlb?api-version=2015-06-15', '*')
  .reply(201, "{\r\n  \"name\": \"xplattestlb\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLb/providers/Microsoft.Network/loadBalancers/xplattestlb\",\r\n  \"etag\": \"W/\\\"ed66f259-be59-41b4-b7b0-701a9f2c1a8e\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag\": \"\",\r\n    \"tag2\": \"val\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"adaaba2b-1d28-4263-b3c1-c7d22befa08b\",\r\n    \"frontendIPConfigurations\": [],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '691',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'db4690a3-e38e-451a-aea3-aeef4d75441f',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/db4690a3-e38e-451a-aea3-aeef4d75441f?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1167',
  'x-ms-correlation-request-id': '772ebffd-db2f-43cb-adea-1265269f0caf',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T111454Z:772ebffd-db2f-43cb-adea-1265269f0caf',
  date: 'Tue, 29 Dec 2015 11:14:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLb/providers/Microsoft.Network/loadBalancers/xplattestlb?api-version=2015-06-15', '*')
  .reply(201, "{\r\n  \"name\": \"xplattestlb\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLb/providers/Microsoft.Network/loadBalancers/xplattestlb\",\r\n  \"etag\": \"W/\\\"ed66f259-be59-41b4-b7b0-701a9f2c1a8e\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag\": \"\",\r\n    \"tag2\": \"val\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"adaaba2b-1d28-4263-b3c1-c7d22befa08b\",\r\n    \"frontendIPConfigurations\": [],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '691',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'db4690a3-e38e-451a-aea3-aeef4d75441f',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/db4690a3-e38e-451a-aea3-aeef4d75441f?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1167',
  'x-ms-correlation-request-id': '772ebffd-db2f-43cb-adea-1265269f0caf',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T111454Z:772ebffd-db2f-43cb-adea-1265269f0caf',
  date: 'Tue, 29 Dec 2015 11:14:54 GMT',
  connection: 'close' });
 return result; }]];
