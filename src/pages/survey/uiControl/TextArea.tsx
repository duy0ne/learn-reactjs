import { FC } from 'react';

interface ITextArea {
  placeholder: string;
  data: string;
  setData: Function;
  disabled: boolean;
}

const defaultProps = {
  placeholder: '',
  data: '',
  setData: () => { }
}

const TextArea: FC<ITextArea> = ({ placeholder, data, disabled, setData }) => {
  return (
    <>
      <textarea
        style={{ width: '100%' }}
        placeholder={placeholder}
        value={data}
        disabled={disabled}
        onChange={e => setData(e.target.value)}
      />
    </>
  );
}

TextArea.defaultProps = defaultProps;

export default TextArea;