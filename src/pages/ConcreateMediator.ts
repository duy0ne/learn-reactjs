import IMediator from "./IMediator";

class ConcreateMediator implements IMediator {
  private onDisable: any;

  constructor() {
    this.onDisable = new Map<number, Function>();
  }

  setOnDisable(IMediatorKey: number, cbFn: Function): void {
    this.onDisable.set(IMediatorKey, cbFn);
  }

  setDisable(targetKey: number, value: boolean): void {
    this.onDisable.forEach((cbFn: Function) => {
      cbFn(targetKey, value);
    });
  }
}

export default ConcreateMediator;