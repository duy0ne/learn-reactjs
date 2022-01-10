interface IMediator {
  setDisable(keyIMediator: Number, value: boolean): void;
  setOnDisable(keyIMediator: Number, cbFn: Function): void;
  //setAns
}

export default IMediator;