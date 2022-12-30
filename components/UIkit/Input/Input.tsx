import { FC, InputHTMLAttributes, ReactNode, forwardRef } from 'react';
import { InputStyle } from './Input.style';
import { CSS } from '@stitches/react';

type InputPropsBasics = {
  outlined?: boolean;
  className?: string;
  errorMessage?: string;
  css?: string;
};

type InputProps = InputHTMLAttributes<HTMLInputElement> &
  CSS &
  InputPropsBasics;

// const Input = forwardRef<HTMLAnchorElement | HTMLButtonElement, ButtonProps>(({children, ...rest}, ref) => {
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, errorMessage, ...rest }, ref) => {
    return (
      <InputStyle className={className} ref={ref as any}>
        <input {...rest} />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </InputStyle>
    );
  }
);
Input.displayName = 'Input';
export default Input;
