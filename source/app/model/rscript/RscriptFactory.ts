const DEFAULT_NAME = 'default';

class RscriptFactory {
  private name: string;
  private script: string;

  constructor(name: string, script: string) {
    this.name = name || DEFAULT_NAME;
    this.script = script;
  }

  public static getDefaultName(){
    return DEFAULT_NAME;
  }

  public toJsonString(){
    return JSON.stringify(this);
  }

  public toJsonObject(){
    return JSON.parse(this.toJsonString());
  }

  public getName(){
    return this.name;
  }

  public getScript(){
    return this.script;
  }
}

export default RscriptFactory;