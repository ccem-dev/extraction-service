const SHUTDOWN_TIMEOUT = 10000;

class ShutdownEventService {
  private subscriptions: {};

  constructor(){
    this.subscriptions = {};
    process.on('SIGTERM', this.fireEvent);
    process.on('SIGINT', this.fireEvent);
  }

  subscribe(register: string | number, callback: any) {
    // @ts-ignore
    this.subscriptions[register] = callback;
  }

  fireEvent () {
    console.log('Received kill signal, shutting down gracefully');

    let promises = Object.values(this.subscriptions).map(sub => {
      try {
        // @ts-ignore
        return sub();
      } catch (e) {
        console.error(e);
      }
    });

    Promise.all(promises)
      .then(() => {
        process.exit(0);
      })
      .catch((err) => {
        console.error("Error while shutting down", err);
        process.exit(1);
      });

    setTimeout(() => {
      console.error('Could not finish evey shutting down tasks, forcefully shutting down');
      process.exit(1);
    }, SHUTDOWN_TIMEOUT);
  };
}

export default new ShutdownEventService();