// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
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
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/InvalidIPForwardingName?api-version=2017-03-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/networkInterfaces/InvalidIPForwardingName' under resource group 'xplat-test-nic' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '6a2d84bd-e90a-4d78-b32e-d87ba26f79b6',
  'x-ms-correlation-request-id': '6a2d84bd-e90a-4d78-b32e-d87ba26f79b6',
  'x-ms-routing-request-id': 'WESTEUROPE:20170616T134928Z:6a2d84bd-e90a-4d78-b32e-d87ba26f79b6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 16 Jun 2017 13:49:27 GMT',
  connection: 'close',
  'content-length': '177' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/InvalidIPForwardingName?api-version=2017-03-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/networkInterfaces/InvalidIPForwardingName' under resource group 'xplat-test-nic' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '6a2d84bd-e90a-4d78-b32e-d87ba26f79b6',
  'x-ms-correlation-request-id': '6a2d84bd-e90a-4d78-b32e-d87ba26f79b6',
  'x-ms-routing-request-id': 'WESTEUROPE:20170616T134928Z:6a2d84bd-e90a-4d78-b32e-d87ba26f79b6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 16 Jun 2017 13:49:27 GMT',
  connection: 'close',
  'content-length': '177' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"subnetName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\",\r\n  \"etag\": \"W/\\\"7ecd4300-f360-4b28-8798-f7a0ab1100ae\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.0.0/16\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '361',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"7ecd4300-f360-4b28-8798-f7a0ab1100ae"',
  'x-ms-request-id': 'ec20c00b-23fa-4c63-8e17-ea12eeaaf4b7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14986',
  'x-ms-correlation-request-id': '5ae9f829-29a9-48fe-90e2-c6758fd05c4a',
  'x-ms-routing-request-id': 'WESTEUROPE:20170616T134929Z:5ae9f829-29a9-48fe-90e2-c6758fd05c4a',
  date: 'Fri, 16 Jun 2017 13:49:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"subnetName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\",\r\n  \"etag\": \"W/\\\"7ecd4300-f360-4b28-8798-f7a0ab1100ae\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.0.0/16\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '361',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"7ecd4300-f360-4b28-8798-f7a0ab1100ae"',
  'x-ms-request-id': 'ec20c00b-23fa-4c63-8e17-ea12eeaaf4b7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14986',
  'x-ms-correlation-request-id': '5ae9f829-29a9-48fe-90e2-c6758fd05c4a',
  'x-ms-routing-request-id': 'WESTEUROPE:20170616T134929Z:5ae9f829-29a9-48fe-90e2-c6758fd05c4a',
  date: 'Fri, 16 Jun 2017 13:49:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"publicIPAddressName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\",\r\n  \"etag\": \"W/\\\"463b67eb-b281-435d-b3e1-46b5ab70d3ab\\\"\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"f60cc44c-4088-46e2-a62e-eebc0e3b5995\",\r\n    \"publicIPAddressVersion\": \"IPv4\",\r\n    \"publicIPAllocationMethod\": \"Dynamic\",\r\n    \"idleTimeoutInMinutes\": 4\r\n  },\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '568',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"463b67eb-b281-435d-b3e1-46b5ab70d3ab"',
  'x-ms-request-id': 'e897ec40-816b-4db3-97fb-780020a19013',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': '17ddddbd-2e5f-468d-8dbf-f5cc4e5d1524',
  'x-ms-routing-request-id': 'WESTEUROPE:20170616T134930Z:17ddddbd-2e5f-468d-8dbf-f5cc4e5d1524',
  date: 'Fri, 16 Jun 2017 13:49:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"publicIPAddressName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\",\r\n  \"etag\": \"W/\\\"463b67eb-b281-435d-b3e1-46b5ab70d3ab\\\"\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"f60cc44c-4088-46e2-a62e-eebc0e3b5995\",\r\n    \"publicIPAddressVersion\": \"IPv4\",\r\n    \"publicIPAllocationMethod\": \"Dynamic\",\r\n    \"idleTimeoutInMinutes\": 4\r\n  },\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '568',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"463b67eb-b281-435d-b3e1-46b5ab70d3ab"',
  'x-ms-request-id': 'e897ec40-816b-4db3-97fb-780020a19013',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': '17ddddbd-2e5f-468d-8dbf-f5cc4e5d1524',
  'x-ms-routing-request-id': 'WESTEUROPE:20170616T134930Z:17ddddbd-2e5f-468d-8dbf-f5cc4e5d1524',
  date: 'Fri, 16 Jun 2017 13:49:29 GMT',
  connection: 'close' });
 return result; }]];