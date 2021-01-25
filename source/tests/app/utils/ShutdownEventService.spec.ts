import ShutdownEventService from "../../../app/utils/ShutdownEventService"

describe('ShutdownEventService.ts Tests', function () {

  beforeEach(function () {
     jest.spyOn(process, 'exit').mockImplementation()
  });

  it('subscribe', async function () {
    let obj = {
      callbackSuccess: function(){ return Promise.resolve({})},
      callbackError: function(){ return Promise.reject({})}
    };
    jest.spyOn(obj, 'callbackSuccess');
    jest.spyOn(obj, 'callbackError');

    ShutdownEventService.subscribe('key1', obj.callbackSuccess);
    ShutdownEventService.subscribe('key2', obj.callbackError);
    await ShutdownEventService.fireEvent();

    expect(obj.callbackSuccess).toHaveBeenCalledTimes(1);
    expect(obj.callbackError).toHaveBeenCalledTimes(1);
  });

});
