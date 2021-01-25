import { prop, modelOptions} from '@typegoose/typegoose';

@modelOptions({ schemaOptions: { collection: 'rscript'}, options: { automaticName: true}})
class Rscript {
  @prop()
  public name: string;

  @prop()
  public script: string;
}

export default Rscript;