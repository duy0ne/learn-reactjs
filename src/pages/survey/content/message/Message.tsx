import { FC, useState } from 'react';
import Radio from '../../uiControl/RadioButton';

interface IMessage {

}
const Message: FC<IMessage> = () => {
  const [staffAgree, setStaffAgree] = useState('degree');


  const handleAgree = (key: string) => {
    setStaffAgree(key);
  }
  return (
    <div>
      <div style={{ border: "2px solid red", padding: "20px", marginTop: "40px", display: "inline-block" }}>
        <h2 style={{ textAlign: "center" }}>
          THÔNG ĐIỆP TỪ CÔNG TY
        </h2>
        <div>
          <ul style={{ listStyle: "none", paddingLeft: "0px" }}>
            <li>
              - Luôn đeo khẩu trang mọi lúc mọi nơi, đặc biệt tại các địa điểm công cộng, nơi tập trung đông người
            </li>
            <li>
              - Không tụ tập đông người.
            </li>
            <li>
              - Không di chuyển đến các khu vực nguy hiểm được cơ quan nhà nước/ Công ty khuyến cáo.
            </li>
            <li>
              - Chủ động khai báo với chính quyền địa phương nếu đi về từ vùng có dịch hoặc vùng thực hiện giãn cách xã hội.
            </li>
            <li>
              - Trong trường hợp được xét nghiệm Covid-19, yêu cầu Bạn khai báo ngay với bộ phận Nhân sự qua số Hotline 0886.550.990 hoặc 0888.990.082
            </li>
          </ul>
        </div>
        <div>
          <Radio
            labelText={"Tôi cam kết tuân thủ các biện pháp phòng chống dịch của Công ty và khai báo trung thực thông tin"}
            keyValue={'agree'}
            data={staffAgree}
            disabled={false}
            setData={handleAgree}
          />
        </div>
      </div>
    </div>
  );
}

export default Message;