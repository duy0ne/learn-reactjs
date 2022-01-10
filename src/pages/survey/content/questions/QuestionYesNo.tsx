import { FC, useState } from 'react';
import IMediator from '../../../IMediator';
import Radio from '../../uiControl/RadioButton';

interface IQuestionYesNo {
  IMediatorKey: number;
  questionName: string;
  mediator: IMediator
}

const QuestionYesNo: FC<IQuestionYesNo> = ({ IMediatorKey, questionName, mediator }) => {
  const [ans, setAns] = useState('');

  const handleAns = (key: string) => {
    mediator.setDisable(IMediatorKey, key === 'No')
    setAns(key);
  }

  return (
    <>
      <p>
        {IMediatorKey}. {questionName}
      </p>
      <div>
        <Radio
          labelText={"Không"}
          keyValue='No'
          data={ans}
          disabled={false}
          setData={handleAns}
        />
      </div>
      <div>
        <Radio labelText={"Có"}
          keyValue='Yes'
          data={ans}
          disabled={false}
          setData={handleAns} />
      </div>
    </>
  );
}

export default QuestionYesNo;