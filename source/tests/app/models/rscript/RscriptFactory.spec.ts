import RscriptFactory from '../../../../app/models/rscript/RscriptFactory'

describe('RscriptFactory.ts Tests', () => {
  let rscript: RscriptFactory = new RscriptFactory('fulano','scripts')

  it("fromJsonMethod must convert the values ​​to a RscriptFactory", async () => {
    expect(rscript).toBeInstanceOf(RscriptFactory);
  });

  it("toJsonStringMethod must convert the values ​​to a string", async () => {
    let resultRscript: string = rscript.toJsonString();
    expect(resultRscript).toBe(JSON.stringify(rscript));
  });

  it("toJsonObjectMethod must convert the values ​​to a object", async () => {
    let resultRscriptObj: object = rscript.toJsonObject();
    expect(resultRscriptObj).toBeInstanceOf(Object);
  });

  it("getNameMethod should return the values ​​in name", async () => {
    expect(rscript.getName()).toEqual("fulano");
  });

  it("getScriptMethod should return the values ​​in script", async () => {
    expect(rscript.getScript()).toEqual("scripts");
  });

});
