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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/invalidIPAddressName?api-version=2017-03-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/localNetworkGateways/invalidIPAddressName' under resource group 'xplat-test-local-gateway' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'd880de4a-e688-477e-adda-02010084a9a7',
  'x-ms-correlation-request-id': 'd880de4a-e688-477e-adda-02010084a9a7',
  'x-ms-routing-request-id': 'WESTEUROPE:20170602T144233Z:d880de4a-e688-477e-adda-02010084a9a7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 02 Jun 2017 14:42:32 GMT',
  connection: 'close',
  'content-length': '187' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/invalidIPAddressName?api-version=2017-03-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/localNetworkGateways/invalidIPAddressName' under resource group 'xplat-test-local-gateway' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'd880de4a-e688-477e-adda-02010084a9a7',
  'x-ms-correlation-request-id': 'd880de4a-e688-477e-adda-02010084a9a7',
  'x-ms-routing-request-id': 'WESTEUROPE:20170602T144233Z:d880de4a-e688-477e-adda-02010084a9a7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 02 Jun 2017 14:42:32 GMT',
  connection: 'close',
  'content-length': '187' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/invalidIPAddressName?api-version=2017-03-01', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"InvalidIpAddress\",\r\n    \"message\": \"The IP Address 10.0.0.257 is invalid.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '132',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '91c6e1f6-1ae7-4c9d-a17d-7b33e73eb1fc',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-correlation-request-id': '747bb5a5-585f-4952-8f27-d86f3e690da0',
  'x-ms-routing-request-id': 'WESTEUROPE:20170602T144236Z:747bb5a5-585f-4952-8f27-d86f3e690da0',
  date: 'Fri, 02 Jun 2017 14:42:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/invalidIPAddressName?api-version=2017-03-01', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"InvalidIpAddress\",\r\n    \"message\": \"The IP Address 10.0.0.257 is invalid.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '132',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '91c6e1f6-1ae7-4c9d-a17d-7b33e73eb1fc',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-correlation-request-id': '747bb5a5-585f-4952-8f27-d86f3e690da0',
  'x-ms-routing-request-id': 'WESTEUROPE:20170602T144236Z:747bb5a5-585f-4952-8f27-d86f3e690da0',
  date: 'Fri, 02 Jun 2017 14:42:35 GMT',
  connection: 'close' });
 return result; }]];