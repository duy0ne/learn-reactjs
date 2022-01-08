import IMediator from "./IMediator";

class ConcreateMediator implements IMediator {
  private onDisable: any;

  constructor() {
    this.onDisable = new Map<number, Function>();
  }

  setOnDisable(questionNum: number, cbFn: Function): void {
    switch (questionNum) {
      case 2:
        this.onDisable[questionNum] = cbFn;
        break;

      default:
        break;
    }
  }

  setDisable(questionNum: number, value: boolean): void {
    switch (questionNum) {
      case 1:
        this.onDisable[2] && this.onDisable[2](value);
        break;

      default:
        break;
    }
  }
}

export default ConcreateMediator;