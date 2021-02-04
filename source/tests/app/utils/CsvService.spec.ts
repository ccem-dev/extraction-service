import CsvService from "../../../app/utils/CsvService"

describe('CsvService.ts Tests', function () {
  let content: any[] = [
    { test1: 'test1', test2: 'test2' }]

  it('createCsv should create csv', async function () {
    await expect(CsvService.createCsv(content)).resolves.toEqual({ "header": ["test1", "test2",], "values": [["test1", "test2"]]})
  });

  it('createCsvFromString should create csv from string', async function () {
    await expect(CsvService.createCsvFromString(JSON.stringify(content))).resolves.toEqual({ "header": [""], "values": [["[{\"test1\":\"test1\",\"test2\":\"test2\"}]"]] })
  });

});
