import IResponse, { NotFoundResponse, SuccessResponse, AlreadyExistsResponse, ValidationResponse } from "../utils/response";
import ElasticsearchService from "./ElasticsearchService";
import Rscript from "../model/rscript/RscriptFactory";

const R_SCRIPTS_INDEX = 'rscript';

class RscriptService {
  constructor() {
  }

  async create(name: string, script: string) : Promise<IResponse>{
    try {
      await getRscript(name);
      return new AlreadyExistsResponse();
    }
    catch (err) {
      return this.update(name, script);
    }
  }

  async createDefault(script: string) : Promise<IResponse>{
    return this.create(Rscript.getDefaultName(), script);
  }

  async get(name: string) : Promise<IResponse>{
    try {
      return new SuccessResponse(await getRscript(name));
    }
    catch (err){
      console.log(err);
      return new NotFoundResponse(err);
    }
  }

  async getDefault() : Promise<IResponse>{
    return this.get(Rscript.getDefaultName());
  }

  async update(name: string, script: string) : Promise<IResponse>{
    if(!name){
      return getNameMissingResponse();
    }
    try {
      await ElasticsearchService.getClient().update({
        index: R_SCRIPTS_INDEX,
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
      console.log(err);
      return new NotFoundResponse();
    }
  }

  async updateDefault(script: string) : Promise<IResponse>{
    return this.update(Rscript.getDefaultName(), script);
  }

  async delete(name: string) : Promise<IResponse>{
    if(!name){
      return getNameMissingResponse();
    }
    try {
      await ElasticsearchService.getClient().delete({
        index: R_SCRIPTS_INDEX,
        id: name,
        refresh: true
      });
      return new SuccessResponse();
    }
    catch (err) {
      console.log(err);
      return new NotFoundResponse(err);
    }
  }

}

async function getRscript(name: string){
  const { body } = await ElasticsearchService.getClient().search({
    index: R_SCRIPTS_INDEX,
    type: '_doc',
    body: {
      query: {
        match: {
          _id: name
        }
      }
    }
  });
  console.log('get', body.hits.hits[0]._source)
  return body.hits.hits[0]._source;
}

function getNameMissingResponse(){
  return new ValidationResponse({ message: 'Missing name field.' });
}

export default new RscriptService();