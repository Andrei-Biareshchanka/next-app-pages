import cn from 'classnames';
import { InputProps } from './InputProps';
import styles from './Input.module.css';
import { ForwardedRef, forwardRef } from 'react';

const InputRef = (
  { className, error, ...props }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
): JSX.Element => {
  return (
    <div className={cn(className, styles.inputWrapper)}>
      <input
        ref={ref}
        className={cn(styles.input, {
          [styles.error]: error,
        })}
        {...props}
      />
      {error && (
        <span role="alert" className={styles.errorMessage}>
          {error.message}
        </span>
      )}
    </div>
  );
};

export const Input = forwardRef(InputRef);
