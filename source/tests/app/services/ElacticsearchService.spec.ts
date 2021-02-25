import ElasticsearchService from '../../../app/services/ElasticsearchService'

describe('ElasticsearchService.ts Tests', function () {

  beforeEach(function () {
    ElasticsearchService.setState(true);
  });

  test('getClient in case state true', async function () {
    const client = ElasticsearchService.getClient();
    expect(client).toBeDefined();
  });

  test('getClient in case state false', async function () {
    ElasticsearchService.setState(false);
    expect(() => ElasticsearchService.getClient()).toThrow();
  });

  test('getClient in case client already exists', async function () {
    const client1 = ElasticsearchService.getClient();
    const client2 = ElasticsearchService.getClient();
    expect(client2).toBe(client1);
  });

  test('getIndices', async function () {
    const indices = ElasticsearchService.getIndicesAPI();
    expect(indices).toBeDefined();
  });

  test('getState', async function () {
    expect(ElasticsearchService.getState()).toBe(true);
  });

  test('isIndexNotFoundError should return true', async function () {
    const err = { meta: { body: { error: {type: "index_not_found_exception" } } } };
    expect(ElasticsearchService.isIndexNotFoundError(err)).toBe(true);
  });

  test('isIndexNotFoundError should return false', async function () {
    const err = { data: {} };
    expect(ElasticsearchService.isIndexNotFoundError(err)).toBe(false);
  });

});
