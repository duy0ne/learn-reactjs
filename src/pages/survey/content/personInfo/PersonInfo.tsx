import { FC, useState } from 'react';
import Input from '../../uiControl/InputField';
import Select from '../../uiControl/Select';

const WORK_TYPES = [
  'Làm việc tại văn phòng (WFO)',
  'Làm việc tại nhà do BP bố trí (WFH)',
  'Nghỉ cách ly có làm việc (Cách ly - WFH)',
  'Nghỉ cách ly không làm việc (Calamity)',
  'Nghỉ Calamity theo Bộ phận bố trí'
];

interface IPersonInfo {

}

const PersonalInfo: FC<IPersonInfo> = () => {
  const [staffGen, setStaffGen] = useState('');
  const [staffFullName, setStaffFullName] = useState('');
  const [staffPhone, setStaffPhone] = useState('');
  const [workType, setWorkType] = useState(0);

  return (
    <>
      <div>
        Công ty (법인):	SVMC
      </div>
      <div>
      </div>
      <Input
        labelText={"Mã nhân viên (사원번호): "}
        placeholder={'12345688'}
        data={staffGen}
        disabled={false}
        setData={setStaffGen}
      />
      <div>
        <Input
          labelText={"Họ và Tên (이름): "}
          placeholder={'Nguyen Van A'}
          data={staffFullName}
          disabled={false}
          setData={setStaffFullName}
        />
      </div>
      <div>
        <Input
          labelText={"Số điện thoại (전화번호): "}
          placeholder={'8499955563'}
          data={staffPhone}
          disabled={false}
          setData={setStaffPhone}
        />
      </div>
      <div>
        <Select
          labelText={"Loại hình làm việc : "}
          values={WORK_TYPES}
          dataIndex={workType}
          disabled={false}
          setDataIndex={setWorkType}
        />
      </div>
    </>
  );
}

export default PersonalInfo;