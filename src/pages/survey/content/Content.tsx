import { FC } from 'react';
import IMediator from '../../IMediator';
import Button from '../uiControl/Button';
import Answer from './answer/Answer';
import Message from './message/Message';
import PersonInfo from './personInfo/PersonInfo';
import QuestionYesNo from './questions/QuestionYesNo';

interface IContent {
  onSubmit: Function
  mediator: IMediator
}

const Content: FC<IContent> = ({ onSubmit, mediator }) => {
  return (
    <div style={{ border: '1px solid black', padding: '20px' }}>
      <PersonInfo></PersonInfo>
      <Message></Message>
      <h2>
        Câu hỏi (질문):
      </h2>
      <QuestionYesNo
        questionNum={1}
        questionName={
          'Hiện tại bạn có bị sốt ( từ 37.5 độ trở lên) hay có một trong các các triệu chứng như ho, đau cơ, đau họng, khó thở, có đờm hay không? (Các bạn nhân viên có triệu chứng sẽ cần chuyển WFH trong vòng ít nhất 1 tuần và cần test PCR để quay lại văn phòng làm việc)'
        }
        mediator={mediator}
      />
      <Answer
        questionNum={2}
        questionName={
          'Nếu câu 1 chọn “Không”, bỏ qua câu 2. Trường hợp có triệu chứng, vui lòng mô tả triệu chứng của bạn.'
        }
        questionPlaceHolder={
          'Tôi đang sốt 38 độ, kèm theo triệu chứng ho và đau đầu'
        }
        mediator={mediator}
      />
      <Button onClick={onSubmit}
        text="Submit"
      />
    </div>
  );
}

export default Content;