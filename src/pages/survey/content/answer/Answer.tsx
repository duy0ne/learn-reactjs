import { FC, useEffect, useState } from 'react';
import IMediator from '../../../IMediator';
import TextArea from '../../uiControl/TextArea';

interface IAnswer {
  questionNum: number;
  questionName: string;
  questionPlaceHolder: string;
  mediator: IMediator
}

const Answer: FC<IAnswer> = ({ questionNum, questionName, questionPlaceHolder, mediator }) => {
  const [dataText, setDataText] = useState('');
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    mediator.setOnDisable(questionNum, (value: boolean) => {
      setDisable(!value)
    })
  })

  const handleSetData = (value: string) => {
    setDataText(value);
  }

  return (
    <>
      <p>
        {questionNum}. {questionName}
      </p>
      <div>
        <TextArea
          placeholder={questionPlaceHolder}
          data={dataText}
          disabled={disable}
          setData={handleSetData}
        />
      </div>
    </>
  );
}

export default Answer;