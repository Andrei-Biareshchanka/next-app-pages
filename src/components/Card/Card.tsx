import cn from 'classnames';
import { CardProps } from './CardProps';
import styles from './Card.module.css';
import { ForwardedRef, forwardRef } from 'react';

const CardRef = (
  { color = 'white', children, className, ...props }: CardProps,
  ref: ForwardedRef<HTMLDivElement>
): JSX.Element => {
  return (
    <div
      className={cn(className, styles.card, {
        [styles.blue]: color == 'blue',
      })}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
};

export const Card = forwardRef(CardRef);
