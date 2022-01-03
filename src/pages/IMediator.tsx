interface IMediator {
  setDisable(questionNum: Number, value: boolean): void;
  setOnDisable(questionNum: Number, cbFn: Function): void;
}

export default IMediator;