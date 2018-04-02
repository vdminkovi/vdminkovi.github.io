class Client {

  constructor() {
    this.eventEmitter = new EventEmitter();
  }


  on(eventName, listener) {
    this.eventEmitter.on(onLinkClick, listener);
  }

  removeEventListener(onLinkClick, listener) {
    this.eventEmitter.removeListener(onLinkClick, listener);
  }


  emit(event, payload, error = false) {
    this.eventEmitter.emit(event, payload, error);
  }


  getEventEmitter() {
    return this.eventEmitter;
  }
}

var client = new Client();
