import { FC } from 'react';

interface SelectOption {
  values: Array<string>;
  labelText: string;
  dataIndex: number;
  setDataIndex: Function;
  disabled: boolean;
}
const defaultProps = {
  values: [],
  labelText: '',
  dataIndex: 0,
  setDataIndex: () => { }
}

const Select: FC<SelectOption> = ({ values, labelText, dataIndex, setDataIndex, disabled }: SelectOption) => {
  return (
    <label>
      <span className='label-w'>
        {labelText}
      </span>
      <select
        onChange={e => setDataIndex(e.target.selectedIndex)}
        value={dataIndex}
        disabled={disabled}
      >
        {
          values.map((value, index) => (
            <option key={index}>{value}</option>
          ))
        }
      </select>
    </label>
  )
}

Select.defaultProps = defaultProps;

export default Select;
