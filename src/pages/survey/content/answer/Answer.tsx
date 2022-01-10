import { FC, useEffect, useState } from 'react';
import IMediator from '../../../IMediator';
import TextArea from '../../uiControl/TextArea';

interface IAnswer {
  IMediatorKey: number;
  questionName: string;
  questionPlaceHolder: string;
  mediator: IMediator
}

const Answer: FC<IAnswer> = ({ IMediatorKey, questionName, questionPlaceHolder, mediator }) => {
  const [dataText, setDataText] = useState('');
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    mediator.setOnDisable(IMediatorKey, (targetKey: number, value: boolean) => {
      if (IMediatorKey === 3 && targetKey === 1) {
        setDisable(!value)
      }
    })
  })

  const handleSetData = (value: string) => {
    setDataText(value);
  }

  return (
    <>
      <p>
        {IMediatorKey}. {questionName}
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