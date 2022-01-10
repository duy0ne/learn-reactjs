import React, { useEffect, useState } from 'react';
import IMediator from '../../../IMediator';
import Radio from '../../uiControl/RadioButton';

interface ISingleProps {
  IMediatorKey: number;
  questionName: string;
  questionItems: string[];
  mediator: IMediator;
}

// React.FC means Function component
const SingleQuestion: React.FC<ISingleProps> = ({ IMediatorKey, questionName, questionItems, mediator }: ISingleProps) => {

  const [key, setKey] = useState('');
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    mediator.setOnDisable(IMediatorKey, (targetKey: number, value: boolean) => {
      if (IMediatorKey === 2 && targetKey === 1)
        setDisable(!value);
    });
  });

  const handleSelectKey = (keyValue: string) => {
    setKey(keyValue);
  }

  return (
    <>
      <p>
        {IMediatorKey}. {questionName}
      </p>
      {
        questionItems.map((question, index) => (
          <div key={index}>
            <Radio
              labelText={question}
              keyValue={`${index}`}
              data={key}
              disabled={disable}
              setData={handleSelectKey}
            />
          </div>
        ))
      }
    </>
  )
}

export default SingleQuestion;