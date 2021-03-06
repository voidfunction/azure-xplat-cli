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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/networkInterfaceName?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"networkInterfaceName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/networkInterfaceName\",\r\n  \"etag\": \"W/\\\"1c03e63a-9f70-4143-92ac-a646c9361d74\\\"\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"97ae6964-9794-45ef-b974-d8a515e16ccf\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"createipconf\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/networkInterfaceName/ipConfigurations/createipconf\",\r\n        \"etag\": \"W/\\\"1c03e63a-9f70-4143-92ac-a646c9361d74\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.42\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\"\r\n          },\r\n          \"primary\": true,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDnsNameLabel\": \"internal-dns-bar\",\r\n      \"internalFqdn\": \"internal-dns-bar.5dtqlaizrz2u3oigxss00ou0ld.d--x.internal.cloudapp.net\",\r\n      \"internalDomainNameSuffix\": \"5dtqlaizrz2u3oigxss00ou0ld.d--x.internal.cloudapp.net\"\r\n    },\r\n    \"enableAcceleratedNetworking\": true,\r\n    \"enableIPForwarding\": true\r\n  },\r\n  \"type\": \"Microsoft.Network/networkInterfaces\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1887',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"1c03e63a-9f70-4143-92ac-a646c9361d74"',
  'x-ms-request-id': '0481ceff-d9d5-45fb-a852-fac8987bbbda',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': '421c785d-13cc-4a05-b53a-cb5291cf207a',
  'x-ms-routing-request-id': 'WESTEUROPE:20170616T134845Z:421c785d-13cc-4a05-b53a-cb5291cf207a',
  date: 'Fri, 16 Jun 2017 13:48:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/networkInterfaceName?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"networkInterfaceName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/networkInterfaceName\",\r\n  \"etag\": \"W/\\\"1c03e63a-9f70-4143-92ac-a646c9361d74\\\"\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"97ae6964-9794-45ef-b974-d8a515e16ccf\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"createipconf\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/networkInterfaceName/ipConfigurations/createipconf\",\r\n        \"etag\": \"W/\\\"1c03e63a-9f70-4143-92ac-a646c9361d74\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.42\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\"\r\n          },\r\n          \"primary\": true,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDnsNameLabel\": \"internal-dns-bar\",\r\n      \"internalFqdn\": \"internal-dns-bar.5dtqlaizrz2u3oigxss00ou0ld.d--x.internal.cloudapp.net\",\r\n      \"internalDomainNameSuffix\": \"5dtqlaizrz2u3oigxss00ou0ld.d--x.internal.cloudapp.net\"\r\n    },\r\n    \"enableAcceleratedNetworking\": true,\r\n    \"enableIPForwarding\": true\r\n  },\r\n  \"type\": \"Microsoft.Network/networkInterfaces\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1887',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"1c03e63a-9f70-4143-92ac-a646c9361d74"',
  'x-ms-request-id': '0481ceff-d9d5-45fb-a852-fac8987bbbda',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': '421c785d-13cc-4a05-b53a-cb5291cf207a',
  'x-ms-routing-request-id': 'WESTEUROPE:20170616T134845Z:421c785d-13cc-4a05-b53a-cb5291cf207a',
  date: 'Fri, 16 Jun 2017 13:48:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/networkInterfaceName?api-version=2017-03-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operationResults/d74eedff-1717-44cd-a5ed-8ab54a9901af?api-version=2017-03-01',
  'retry-after': '10',
  'x-ms-request-id': 'd74eedff-1717-44cd-a5ed-8ab54a9901af',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/d74eedff-1717-44cd-a5ed-8ab54a9901af?api-version=2017-03-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'c3775a7b-ddcf-4e73-bffd-cb1751ef55f8',
  'x-ms-routing-request-id': 'WESTEUROPE:20170616T134846Z:c3775a7b-ddcf-4e73-bffd-cb1751ef55f8',
  date: 'Fri, 16 Jun 2017 13:48:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/networkInterfaceName?api-version=2017-03-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operationResults/d74eedff-1717-44cd-a5ed-8ab54a9901af?api-version=2017-03-01',
  'retry-after': '10',
  'x-ms-request-id': 'd74eedff-1717-44cd-a5ed-8ab54a9901af',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/d74eedff-1717-44cd-a5ed-8ab54a9901af?api-version=2017-03-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'c3775a7b-ddcf-4e73-bffd-cb1751ef55f8',
  'x-ms-routing-request-id': 'WESTEUROPE:20170616T134846Z:c3775a7b-ddcf-4e73-bffd-cb1751ef55f8',
  date: 'Fri, 16 Jun 2017 13:48:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/d74eedff-1717-44cd-a5ed-8ab54a9901af?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '9fe7ec34-ad5b-4870-8910-76ab01b80151',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '0f34c37a-ed88-405e-84ec-91bcf02fd332',
  'x-ms-routing-request-id': 'WESTEUROPE:20170616T134917Z:0f34c37a-ed88-405e-84ec-91bcf02fd332',
  date: 'Fri, 16 Jun 2017 13:49:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/d74eedff-1717-44cd-a5ed-8ab54a9901af?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '9fe7ec34-ad5b-4870-8910-76ab01b80151',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '0f34c37a-ed88-405e-84ec-91bcf02fd332',
  'x-ms-routing-request-id': 'WESTEUROPE:20170616T134917Z:0f34c37a-ed88-405e-84ec-91bcf02fd332',
  date: 'Fri, 16 Jun 2017 13:49:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/networkInterfaceName?api-version=2017-03-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/networkInterfaces/networkInterfaceName' under resource group 'xplat-test-nic' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '9de20311-5cdd-4a1f-80e4-ccc41d77adf9',
  'x-ms-correlation-request-id': '9de20311-5cdd-4a1f-80e4-ccc41d77adf9',
  'x-ms-routing-request-id': 'WESTEUROPE:20170616T134918Z:9de20311-5cdd-4a1f-80e4-ccc41d77adf9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 16 Jun 2017 13:49:18 GMT',
  connection: 'close',
  'content-length': '174' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/networkInterfaceName?api-version=2017-03-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/networkInterfaces/networkInterfaceName' under resource group 'xplat-test-nic' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '9de20311-5cdd-4a1f-80e4-ccc41d77adf9',
  'x-ms-correlation-request-id': '9de20311-5cdd-4a1f-80e4-ccc41d77adf9',
  'x-ms-routing-request-id': 'WESTEUROPE:20170616T134918Z:9de20311-5cdd-4a1f-80e4-ccc41d77adf9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 16 Jun 2017 13:49:18 GMT',
  connection: 'close',
  'content-length': '174' });
 return result; }]];