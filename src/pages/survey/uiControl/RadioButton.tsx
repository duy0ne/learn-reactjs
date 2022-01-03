import { FC } from 'react';

interface IRadioProps {
  labelText: string;
  keyValue: string;
  data: string;
  setData: Function;
  disabled: boolean;
}

const defaultProps = {
  labelText: '',
  keyValue: '',
  data: '',
  setData: () => { }
}

const Radio: FC<IRadioProps> = ({ labelText, keyValue, data, setData, disabled }: IRadioProps) => {
  return (
    <label>
      <input
        type="radio"
        checked={keyValue === data}
        onChange={e => setData(keyValue)}
        disabled={disabled}
        style={{ marginRight: '5px' }}
      />
      {labelText}
    </label>
  )
}

Radio.defaultProps = defaultProps;

export default Radio;
