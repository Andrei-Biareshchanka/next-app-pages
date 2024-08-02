import React from 'react';
import ArrowIcom from './arrow.svg';
import cn from 'classnames';
import { ButtonProps } from './Button.props';
import styles from './Button.module.css';

export const Buutton = ({
  appearance,
  arrow = 'none',
  children,
  className,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearance == 'primary',
        [styles.ghost]: appearance == 'ghost',
      })}
      {...props}
    >
      {children}
      {arrow != 'none' && (
        <span
          className={cn(styles.arrow, {
            [styles.down]: arrow == 'down',
          })}
        >
          <ArrowIcom />
        </span>
      )}
    </button>
  );
};
