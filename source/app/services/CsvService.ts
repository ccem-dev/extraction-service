import { json2csvAsync } from 'json-2-csv';

const DELIMITER = ";";
const NEW_LINE = "\n";

class CsvService {
  constructor() {
  }

  async createCsv(content: any[]) : Promise<Object> {
    let csvContent = await json2csvAsync(content, {
      delimiter: {
        field: DELIMITER
      },
      unwindArrays: true
    });
    let firstBreakLineIndex = csvContent.indexOf(NEW_LINE);
    let header = csvContent.substring(0, firstBreakLineIndex).split(DELIMITER);
    let values: any[] = [];
    csvContent.substring(firstBreakLineIndex+1).split(NEW_LINE).forEach(line => {
      values.push(line.split(DELIMITER))
    });
    return {
      header: header,
      values: values
    }
  }

  async createCsvFromString(csvContent: string) : Promise<Object> {
    let firstBreakLineIndex = csvContent.indexOf(NEW_LINE);
    let header = csvContent.substring(0, firstBreakLineIndex).split(DELIMITER);
    let values: any[] = [];
    csvContent.substring(firstBreakLineIndex+1).split(NEW_LINE).forEach(line => {
      values.push(line.split(DELIMITER))
    });
    return {
      header: header,
      values: values
    }
  }
}

export default new CsvService();