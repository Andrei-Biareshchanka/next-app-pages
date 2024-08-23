import cn from 'classnames';
import { TextareaProps } from './TextareaProps';
import styles from './Textarea.module.css';
import { ForwardedRef, forwardRef } from 'react';

export const TextareaRef = (
  { className, error, ...props }: TextareaProps,
  ref: ForwardedRef<HTMLTextAreaElement>
): JSX.Element => {
  return (
    <div className={cn(styles.textareaWrapper, className)}>
      <textarea
        ref={ref}
        className={cn(styles.textarea, {
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

export const Textarea = forwardRef(TextareaRef);
