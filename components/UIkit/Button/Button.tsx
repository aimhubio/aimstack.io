import { FC, ButtonHTMLAttributes, ReactNode, forwardRef } from 'react';
import { ButtonStyle } from './Button.style';
import { CSS } from '@stitches/react';

type ButtonPropsBasics = {
  outlined?: boolean;
  children?: ReactNode;
  className?: string;
};

type ButtonProps = ButtonPropsBasics &
  CSS &
  (
    | (JSX.IntrinsicElements['a'] & { as?: 'a' })
    | (JSX.IntrinsicElements['button'] & { as: 'button' })
  );

const Button = forwardRef<HTMLAnchorElement | HTMLButtonElement, ButtonProps>(
  ({ children, ...rest }, ref) => {
    return (
      <ButtonStyle ref={ref as any} {...rest}>
        {children}
      </ButtonStyle>
    );
  }
);
Button.displayName = 'Button';
export default Button;
