// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '045c28ea-c686-462f-9081-33c34e871ba3',
    name: 'MDInsightsPROD1_10759063',
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
  process.env['AZURE_ARM_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/045c28ea-c686-462f-9081-33c34e871ba3/providers/Microsoft.DataLakeStore/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"datainsights.azuredatalakestore.net\",\"accountId\":\"50af8adb-6f7e-4ba9-8cd6-5417d5969d9e\",\"creationTime\":\"2015-06-25T00:54:58.4601816\",\"lastModifiedTime\":\"2015-06-25T00:54:58.4601816\"},\"location\":\"East US 2\",\"tags\":null,\"id\":\"/subscriptions/045c28ea-c686-462f-9081-33c34e871ba3/resourceGroups/InsightServices/providers/Microsoft.DataLakeStore/accounts/datainsights\",\"name\":\"datainsights\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"datainsightsadhoc.azuredatalakestore.net\",\"accountId\":\"07b5e431-0ff2-492e-8752-eef8ecd23541\",\"creationTime\":\"2015-08-18T23:14:30.6024852\",\"lastModifiedTime\":\"2015-08-18T23:14:30.6024852\"},\"location\":\"East US 2\",\"tags\":null,\"id\":\"/subscriptions/045c28ea-c686-462f-9081-33c34e871ba3/resourceGroups/InsightServices/providers/Microsoft.DataLakeStore/accounts/datainsightsadhoc\",\"name\":\"datainsightsadhoc\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"datainsightsbn.azuredatalakestore.net\",\"accountId\":\"6b97f81b-26f5-473e-8464-183ce8de24db\",\"creationTime\":\"2016-05-26T01:38:05.5563289Z\",\"lastModifiedTime\":\"2016-05-26T01:38:05.5563289Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/045c28ea-c686-462f-9081-33c34e871ba3/resourceGroups/InsightServices/providers/Microsoft.DataLakeStore/accounts/datainsightsbn\",\"name\":\"datainsightsbn\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"datainsightsbntest.azuredatalakestore.net\",\"accountId\":\"5ca708f5-b284-4c06-9c17-c89b017db199\",\"creationTime\":\"2016-07-05T21:20:32.0733444Z\",\"lastModifiedTime\":\"2016-07-05T21:20:32.0733444Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/045c28ea-c686-462f-9081-33c34e871ba3/resourceGroups/InsightServices/providers/Microsoft.DataLakeStore/accounts/datainsightsbntest\",\"name\":\"datainsightsbntest\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls8296.azuredatalakestore.net\",\"accountId\":\"b61424b4-2bd9-4593-8e8a-b5bff1854bab\",\"creationTime\":\"2016-07-07T02:02:09.312704Z\",\"lastModifiedTime\":\"2016-07-07T02:02:44.4780689Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/045c28ea-c686-462f-9081-33c34e871ba3/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls8296\",\"name\":\"xplattestadls8296\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls844.azuredatalakestore.net\",\"accountId\":\"88fa7d6c-71fc-4a42-b45b-5ac60aa83fb9\",\"creationTime\":\"2016-07-07T02:01:35.3176549Z\",\"lastModifiedTime\":\"2016-07-07T02:01:35.3176549Z\"},\"location\":\"eastus2\",\"tags\":{},\"id\":\"/subscriptions/045c28ea-c686-462f-9081-33c34e871ba3/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls844\",\"name\":\"xplattestadls844\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"datainsightsdb.azuredatalakestore.net\",\"accountId\":\"0a07cd40-90a4-4ec6-937d-c0000385dc0e\",\"creationTime\":\"2016-03-24T21:35:41.1581907Z\",\"lastModifiedTime\":\"2016-03-24T21:35:41.1581907Z\"},\"location\":\"northeurope\",\"tags\":null,\"id\":\"/subscriptions/045c28ea-c686-462f-9081-33c34e871ba3/resourceGroups/InsightServices/providers/Microsoft.DataLakeStore/accounts/datainsightsdb\",\"name\":\"datainsightsdb\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"datainsightsdbadhoc.azuredatalakestore.net\",\"accountId\":\"7bcb12df-3d5b-45e4-bbdb-70baaad00913\",\"creationTime\":\"2016-03-26T00:58:05.5806298Z\",\"lastModifiedTime\":\"2016-03-26T00:58:05.5806298Z\"},\"location\":\"northeurope\",\"tags\":null,\"id\":\"/subscriptions/045c28ea-c686-462f-9081-33c34e871ba3/resourceGroups/InsightServices/providers/Microsoft.DataLakeStore/accounts/datainsightsdbadhoc\",\"name\":\"datainsightsdbadhoc\",\"type\":\"Microsoft.DataLakeStore/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-original-request-ids': 'fde3b660-2a7c-41a3-9374-da9670bad88e, c7469416-0a8d-4320-bade-4774c0a0cd84',
  'x-ms-ratelimit-remaining-subscription-reads': '14790',
  'x-ms-request-id': '176b730d-5d99-4c4a-81d1-e4752b936512',
  'x-ms-correlation-request-id': '176b730d-5d99-4c4a-81d1-e4752b936512',
  'x-ms-routing-request-id': 'CENTRALUS:20160707T020246Z:176b730d-5d99-4c4a-81d1-e4752b936512',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 07 Jul 2016 02:02:46 GMT',
  connection: 'close',
  'content-length': '4222' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/045c28ea-c686-462f-9081-33c34e871ba3/providers/Microsoft.DataLakeStore/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"datainsights.azuredatalakestore.net\",\"accountId\":\"50af8adb-6f7e-4ba9-8cd6-5417d5969d9e\",\"creationTime\":\"2015-06-25T00:54:58.4601816\",\"lastModifiedTime\":\"2015-06-25T00:54:58.4601816\"},\"location\":\"East US 2\",\"tags\":null,\"id\":\"/subscriptions/045c28ea-c686-462f-9081-33c34e871ba3/resourceGroups/InsightServices/providers/Microsoft.DataLakeStore/accounts/datainsights\",\"name\":\"datainsights\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"datainsightsadhoc.azuredatalakestore.net\",\"accountId\":\"07b5e431-0ff2-492e-8752-eef8ecd23541\",\"creationTime\":\"2015-08-18T23:14:30.6024852\",\"lastModifiedTime\":\"2015-08-18T23:14:30.6024852\"},\"location\":\"East US 2\",\"tags\":null,\"id\":\"/subscriptions/045c28ea-c686-462f-9081-33c34e871ba3/resourceGroups/InsightServices/providers/Microsoft.DataLakeStore/accounts/datainsightsadhoc\",\"name\":\"datainsightsadhoc\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"datainsightsbn.azuredatalakestore.net\",\"accountId\":\"6b97f81b-26f5-473e-8464-183ce8de24db\",\"creationTime\":\"2016-05-26T01:38:05.5563289Z\",\"lastModifiedTime\":\"2016-05-26T01:38:05.5563289Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/045c28ea-c686-462f-9081-33c34e871ba3/resourceGroups/InsightServices/providers/Microsoft.DataLakeStore/accounts/datainsightsbn\",\"name\":\"datainsightsbn\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"datainsightsbntest.azuredatalakestore.net\",\"accountId\":\"5ca708f5-b284-4c06-9c17-c89b017db199\",\"creationTime\":\"2016-07-05T21:20:32.0733444Z\",\"lastModifiedTime\":\"2016-07-05T21:20:32.0733444Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/045c28ea-c686-462f-9081-33c34e871ba3/resourceGroups/InsightServices/providers/Microsoft.DataLakeStore/accounts/datainsightsbntest\",\"name\":\"datainsightsbntest\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls8296.azuredatalakestore.net\",\"accountId\":\"b61424b4-2bd9-4593-8e8a-b5bff1854bab\",\"creationTime\":\"2016-07-07T02:02:09.312704Z\",\"lastModifiedTime\":\"2016-07-07T02:02:44.4780689Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/045c28ea-c686-462f-9081-33c34e871ba3/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls8296\",\"name\":\"xplattestadls8296\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls844.azuredatalakestore.net\",\"accountId\":\"88fa7d6c-71fc-4a42-b45b-5ac60aa83fb9\",\"creationTime\":\"2016-07-07T02:01:35.3176549Z\",\"lastModifiedTime\":\"2016-07-07T02:01:35.3176549Z\"},\"location\":\"eastus2\",\"tags\":{},\"id\":\"/subscriptions/045c28ea-c686-462f-9081-33c34e871ba3/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls844\",\"name\":\"xplattestadls844\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"datainsightsdb.azuredatalakestore.net\",\"accountId\":\"0a07cd40-90a4-4ec6-937d-c0000385dc0e\",\"creationTime\":\"2016-03-24T21:35:41.1581907Z\",\"lastModifiedTime\":\"2016-03-24T21:35:41.1581907Z\"},\"location\":\"northeurope\",\"tags\":null,\"id\":\"/subscriptions/045c28ea-c686-462f-9081-33c34e871ba3/resourceGroups/InsightServices/providers/Microsoft.DataLakeStore/accounts/datainsightsdb\",\"name\":\"datainsightsdb\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"datainsightsdbadhoc.azuredatalakestore.net\",\"accountId\":\"7bcb12df-3d5b-45e4-bbdb-70baaad00913\",\"creationTime\":\"2016-03-26T00:58:05.5806298Z\",\"lastModifiedTime\":\"2016-03-26T00:58:05.5806298Z\"},\"location\":\"northeurope\",\"tags\":null,\"id\":\"/subscriptions/045c28ea-c686-462f-9081-33c34e871ba3/resourceGroups/InsightServices/providers/Microsoft.DataLakeStore/accounts/datainsightsdbadhoc\",\"name\":\"datainsightsdbadhoc\",\"type\":\"Microsoft.DataLakeStore/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-original-request-ids': 'fde3b660-2a7c-41a3-9374-da9670bad88e, c7469416-0a8d-4320-bade-4774c0a0cd84',
  'x-ms-ratelimit-remaining-subscription-reads': '14790',
  'x-ms-request-id': '176b730d-5d99-4c4a-81d1-e4752b936512',
  'x-ms-correlation-request-id': '176b730d-5d99-4c4a-81d1-e4752b936512',
  'x-ms-routing-request-id': 'CENTRALUS:20160707T020246Z:176b730d-5d99-4c4a-81d1-e4752b936512',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 07 Jul 2016 02:02:46 GMT',
  connection: 'close',
  'content-length': '4222' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/045c28ea-c686-462f-9081-33c34e871ba3/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls8296?api-version=2015-10-01-preview')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'x-ms-request-id': '83cd23c5-be1d-4170-a100-3f61cf013e2f',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'b0651a71-eb7f-45ed-a3ec-799e1a54489c',
  'x-ms-routing-request-id': 'CENTRALUS:20160707T020248Z:b0651a71-eb7f-45ed-a3ec-799e1a54489c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 07 Jul 2016 02:02:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/045c28ea-c686-462f-9081-33c34e871ba3/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls8296?api-version=2015-10-01-preview')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'x-ms-request-id': '83cd23c5-be1d-4170-a100-3f61cf013e2f',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'b0651a71-eb7f-45ed-a3ec-799e1a54489c',
  'x-ms-routing-request-id': 'CENTRALUS:20160707T020248Z:b0651a71-eb7f-45ed-a3ec-799e1a54489c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 07 Jul 2016 02:02:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/045c28ea-c686-462f-9081-33c34e871ba3/providers/Microsoft.DataLakeStore/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"datainsights.azuredatalakestore.net\",\"accountId\":\"50af8adb-6f7e-4ba9-8cd6-5417d5969d9e\",\"creationTime\":\"2015-06-25T00:54:58.4601816\",\"lastModifiedTime\":\"2015-06-25T00:54:58.4601816\"},\"location\":\"East US 2\",\"tags\":null,\"id\":\"/subscriptions/045c28ea-c686-462f-9081-33c34e871ba3/resourceGroups/InsightServices/providers/Microsoft.DataLakeStore/accounts/datainsights\",\"name\":\"datainsights\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"datainsightsadhoc.azuredatalakestore.net\",\"accountId\":\"07b5e431-0ff2-492e-8752-eef8ecd23541\",\"creationTime\":\"2015-08-18T23:14:30.6024852\",\"lastModifiedTime\":\"2015-08-18T23:14:30.6024852\"},\"location\":\"East US 2\",\"tags\":null,\"id\":\"/subscriptions/045c28ea-c686-462f-9081-33c34e871ba3/resourceGroups/InsightServices/providers/Microsoft.DataLakeStore/accounts/datainsightsadhoc\",\"name\":\"datainsightsadhoc\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"datainsightsbn.azuredatalakestore.net\",\"accountId\":\"6b97f81b-26f5-473e-8464-183ce8de24db\",\"creationTime\":\"2016-05-26T01:38:05.5563289Z\",\"lastModifiedTime\":\"2016-05-26T01:38:05.5563289Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/045c28ea-c686-462f-9081-33c34e871ba3/resourceGroups/InsightServices/providers/Microsoft.DataLakeStore/accounts/datainsightsbn\",\"name\":\"datainsightsbn\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"datainsightsbntest.azuredatalakestore.net\",\"accountId\":\"5ca708f5-b284-4c06-9c17-c89b017db199\",\"creationTime\":\"2016-07-05T21:20:32.0733444Z\",\"lastModifiedTime\":\"2016-07-05T21:20:32.0733444Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/045c28ea-c686-462f-9081-33c34e871ba3/resourceGroups/InsightServices/providers/Microsoft.DataLakeStore/accounts/datainsightsbntest\",\"name\":\"datainsightsbntest\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls844.azuredatalakestore.net\",\"accountId\":\"88fa7d6c-71fc-4a42-b45b-5ac60aa83fb9\",\"creationTime\":\"2016-07-07T02:01:35.3176549Z\",\"lastModifiedTime\":\"2016-07-07T02:01:35.3176549Z\"},\"location\":\"eastus2\",\"tags\":{},\"id\":\"/subscriptions/045c28ea-c686-462f-9081-33c34e871ba3/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls844\",\"name\":\"xplattestadls844\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"datainsightsdb.azuredatalakestore.net\",\"accountId\":\"0a07cd40-90a4-4ec6-937d-c0000385dc0e\",\"creationTime\":\"2016-03-24T21:35:41.1581907Z\",\"lastModifiedTime\":\"2016-03-24T21:35:41.1581907Z\"},\"location\":\"northeurope\",\"tags\":null,\"id\":\"/subscriptions/045c28ea-c686-462f-9081-33c34e871ba3/resourceGroups/InsightServices/providers/Microsoft.DataLakeStore/accounts/datainsightsdb\",\"name\":\"datainsightsdb\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"datainsightsdbadhoc.azuredatalakestore.net\",\"accountId\":\"7bcb12df-3d5b-45e4-bbdb-70baaad00913\",\"creationTime\":\"2016-03-26T00:58:05.5806298Z\",\"lastModifiedTime\":\"2016-03-26T00:58:05.5806298Z\"},\"location\":\"northeurope\",\"tags\":null,\"id\":\"/subscriptions/045c28ea-c686-462f-9081-33c34e871ba3/resourceGroups/InsightServices/providers/Microsoft.DataLakeStore/accounts/datainsightsdbadhoc\",\"name\":\"datainsightsdbadhoc\",\"type\":\"Microsoft.DataLakeStore/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-original-request-ids': 'd4ce501e-3bd8-4699-9776-01925b6701e9, c3fde1b7-e30e-47fa-9657-dd0bd75ebed3',
  'x-ms-ratelimit-remaining-subscription-reads': '14907',
  'x-ms-request-id': 'ef971b0f-9767-462a-8666-d14d32bdf314',
  'x-ms-correlation-request-id': 'ef971b0f-9767-462a-8666-d14d32bdf314',
  'x-ms-routing-request-id': 'CENTRALUS:20160707T020249Z:ef971b0f-9767-462a-8666-d14d32bdf314',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 07 Jul 2016 02:02:49 GMT',
  connection: 'close',
  'content-length': '3632' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/045c28ea-c686-462f-9081-33c34e871ba3/providers/Microsoft.DataLakeStore/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"datainsights.azuredatalakestore.net\",\"accountId\":\"50af8adb-6f7e-4ba9-8cd6-5417d5969d9e\",\"creationTime\":\"2015-06-25T00:54:58.4601816\",\"lastModifiedTime\":\"2015-06-25T00:54:58.4601816\"},\"location\":\"East US 2\",\"tags\":null,\"id\":\"/subscriptions/045c28ea-c686-462f-9081-33c34e871ba3/resourceGroups/InsightServices/providers/Microsoft.DataLakeStore/accounts/datainsights\",\"name\":\"datainsights\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"datainsightsadhoc.azuredatalakestore.net\",\"accountId\":\"07b5e431-0ff2-492e-8752-eef8ecd23541\",\"creationTime\":\"2015-08-18T23:14:30.6024852\",\"lastModifiedTime\":\"2015-08-18T23:14:30.6024852\"},\"location\":\"East US 2\",\"tags\":null,\"id\":\"/subscriptions/045c28ea-c686-462f-9081-33c34e871ba3/resourceGroups/InsightServices/providers/Microsoft.DataLakeStore/accounts/datainsightsadhoc\",\"name\":\"datainsightsadhoc\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"datainsightsbn.azuredatalakestore.net\",\"accountId\":\"6b97f81b-26f5-473e-8464-183ce8de24db\",\"creationTime\":\"2016-05-26T01:38:05.5563289Z\",\"lastModifiedTime\":\"2016-05-26T01:38:05.5563289Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/045c28ea-c686-462f-9081-33c34e871ba3/resourceGroups/InsightServices/providers/Microsoft.DataLakeStore/accounts/datainsightsbn\",\"name\":\"datainsightsbn\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"datainsightsbntest.azuredatalakestore.net\",\"accountId\":\"5ca708f5-b284-4c06-9c17-c89b017db199\",\"creationTime\":\"2016-07-05T21:20:32.0733444Z\",\"lastModifiedTime\":\"2016-07-05T21:20:32.0733444Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/045c28ea-c686-462f-9081-33c34e871ba3/resourceGroups/InsightServices/providers/Microsoft.DataLakeStore/accounts/datainsightsbntest\",\"name\":\"datainsightsbntest\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls844.azuredatalakestore.net\",\"accountId\":\"88fa7d6c-71fc-4a42-b45b-5ac60aa83fb9\",\"creationTime\":\"2016-07-07T02:01:35.3176549Z\",\"lastModifiedTime\":\"2016-07-07T02:01:35.3176549Z\"},\"location\":\"eastus2\",\"tags\":{},\"id\":\"/subscriptions/045c28ea-c686-462f-9081-33c34e871ba3/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls844\",\"name\":\"xplattestadls844\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"datainsightsdb.azuredatalakestore.net\",\"accountId\":\"0a07cd40-90a4-4ec6-937d-c0000385dc0e\",\"creationTime\":\"2016-03-24T21:35:41.1581907Z\",\"lastModifiedTime\":\"2016-03-24T21:35:41.1581907Z\"},\"location\":\"northeurope\",\"tags\":null,\"id\":\"/subscriptions/045c28ea-c686-462f-9081-33c34e871ba3/resourceGroups/InsightServices/providers/Microsoft.DataLakeStore/accounts/datainsightsdb\",\"name\":\"datainsightsdb\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"datainsightsdbadhoc.azuredatalakestore.net\",\"accountId\":\"7bcb12df-3d5b-45e4-bbdb-70baaad00913\",\"creationTime\":\"2016-03-26T00:58:05.5806298Z\",\"lastModifiedTime\":\"2016-03-26T00:58:05.5806298Z\"},\"location\":\"northeurope\",\"tags\":null,\"id\":\"/subscriptions/045c28ea-c686-462f-9081-33c34e871ba3/resourceGroups/InsightServices/providers/Microsoft.DataLakeStore/accounts/datainsightsdbadhoc\",\"name\":\"datainsightsdbadhoc\",\"type\":\"Microsoft.DataLakeStore/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-original-request-ids': 'd4ce501e-3bd8-4699-9776-01925b6701e9, c3fde1b7-e30e-47fa-9657-dd0bd75ebed3',
  'x-ms-ratelimit-remaining-subscription-reads': '14907',
  'x-ms-request-id': 'ef971b0f-9767-462a-8666-d14d32bdf314',
  'x-ms-correlation-request-id': 'ef971b0f-9767-462a-8666-d14d32bdf314',
  'x-ms-routing-request-id': 'CENTRALUS:20160707T020249Z:ef971b0f-9767-462a-8666-d14d32bdf314',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 07 Jul 2016 02:02:49 GMT',
  connection: 'close',
  'content-length': '3632' });
 return result; }]];