import { FC } from 'react';

interface IButtonProps {
  text: string;
  onClick: Function
}

const Button: FC<IButtonProps> = ({ text, onClick }: IButtonProps) => {
  return (
    <button onClick={() => onClick()}>{text}</button>
  )
}

Button.defaultProps = {
  text: ''
}

export default Button;