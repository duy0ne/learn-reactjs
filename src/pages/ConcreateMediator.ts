import IMediator from "./IMediator";

class ConcreateMediator implements IMediator {
  private onDisable: Array<Function>;

  constructor() {
    this.onDisable = [];
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