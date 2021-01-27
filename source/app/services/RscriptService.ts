import IResponse, { NotFoundResponse, SuccessResponse, ValidationResponse } from "../utils/response";
import ElasticsearchService from "./ElasticsearchService";
import Rscript from "../models/rscript/RscriptFactory";

class RscriptService {
  private readonly R_SCRIPTS_INDEX = 'rscript';

  constructor() {
  }

  async createOrUpdate(name: string, script: string) : Promise<IResponse>{
    if(!name){
      return new ValidationResponse({ message: 'Missing name field.' });
    }
    try {
      await ElasticsearchService.getClient().update({
        index: this.R_SCRIPTS_INDEX,
        id: name,
        refresh: true,
        body: {
          doc: (new Rscript(name, script)).toJsonObject(),
          doc_as_upsert: true
        }
      });
      return new SuccessResponse();
    }
    catch (err) {
      return new NotFoundResponse();
    }
  }

  async get(name: string) : Promise<IResponse>{
    try {
      const { body } = await ElasticsearchService.getClient().search({
        index: this.R_SCRIPTS_INDEX,
        type: '_doc',
        body: {
          query: {
            match: {
              _id: name
            }
          }
        }
      });
      return new SuccessResponse(body.hits.hits[0]._source);
    }
    catch (err){
      return new NotFoundResponse(err);
    }
  }

  async delete(name: string) : Promise<IResponse>{
    try {
      await ElasticsearchService.getClient().delete({
        index: this.R_SCRIPTS_INDEX,
        id: name,
        refresh: true
      });
      return new SuccessResponse();
    }
    catch (err) {
      return new NotFoundResponse(err);
    }
  }

}

export default new RscriptService();