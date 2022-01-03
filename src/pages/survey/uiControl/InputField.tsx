import { FC } from 'react';

interface InputField {
  placeholder: string;
  labelText: string;
  data: string;
  setData: Function;
  disabled: boolean;
};

const defaultProps = {
  placeholder: '',
  labelText: '',
  data: '',
  setData: () => { }
};

const Input: FC<InputField> = ({ placeholder, labelText, data, setData, disabled }: InputField) => {
  return (
    <div>
      <label>
        <span className='label-w'>
          {
            labelText
          }
        </span>
        <input
          type="text"
          value={data}
          onChange={e => setData(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
        />
      </label>
    </div>
  );
}

Input.defaultProps = defaultProps;

export default Input;