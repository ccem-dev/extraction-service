import { prop, getModelForClass, modelOptions } from '@typegoose/typegoose';
import { BSONType } from 'mongodb';

@modelOptions({ schemaOptions: { collection: 'pipeline' }, options: { automaticName: true } })
class Pipeline {
  @prop()
  public name?: string;

  @prop()
  public pipeline: Document[];

  @prop()
  public function?: {
    code: string
  };


  // public static async findBySpecies(this: ReturnModelType<typeof KittenClass>, species: string) {
  //   return this.find({ species }).exec();
  // }
  // public function: Document
}

export default getModelForClass(Pipeline);
