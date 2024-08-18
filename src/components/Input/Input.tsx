import cn from 'classnames';
import { InputProps } from './InputProps';
import styles from './Input.module.css';
import { ForwardedRef, forwardRef } from 'react';

const InputRef = (
  { className, ...props }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
): JSX.Element => {
  return <input ref={ref} className={cn(className, styles.input)} {...props} />;
};

export const Input = forwardRef(InputRef);
