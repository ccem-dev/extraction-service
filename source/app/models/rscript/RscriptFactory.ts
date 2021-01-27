class RscriptFactory {
  private name: string;
  private script: string;

  constructor(name: string, script: string) {
    this.name = name;
    this.script = script;
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