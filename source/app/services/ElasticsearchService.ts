import { Client } from '@elastic/elasticsearch';
import ShutdownEventService from '../utils/ShutdownEventService';

class ElasticsearchService {
  private readonly CLIENT_URL = process.env.ELASTICSEARCH_PROTOCOL + '://' + process.env.ELASTICSEARCH_HOSTNAME + ":" + process.env.ELASTICSEARCH_PORT;

  private configReady: boolean;
  private client: Client;

  constructor() {
    this.configReady = true;
    this.client = null;
  }

  getClient() {
    if (!this.configReady) {
      throw "ElasticsearchService initialization error";
    }
    if (!this.client) {
      this.createClient();
    }
    return this.client;
  }

  getIndicesAPI() {
    return this.createClient().indices;
  }

  setState(state: any) {
    this.configReady = !!(state);
  }

  getState() {
    return this.configReady;
  }

  isIndexNotFoundError(err: any){
    return err.meta && err.meta.body.error.type == "index_not_found_exception";
  }

  private createClient() {
    try {
      this.client = new Client({ node: this.CLIENT_URL });
      this.subscribeClientClosing();
      return this.client;
    } catch (e) {
      this.configReady = false;
      throw "ElasticsearchService initialization error - Couldn't connect to URL " + this.CLIENT_URL;
    }
  }

  private subscribeClientClosing() {
    ShutdownEventService.subscribe('ElasticsearchService', this.closeClient);
  }

  private closeClient() {
    if (this.client) {
      this.client.close();
      this.client = null;
    }
  }
}

export default new ElasticsearchService();