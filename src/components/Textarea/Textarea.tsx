import cn from 'classnames';
import { TextareaProps } from './TextareaProps';
import styles from './Textarea.module.css';
import { ForwardedRef, forwardRef } from 'react';

export const TextareaRef = (
  { className, ...props }: TextareaProps,
  ref: ForwardedRef<HTMLTextAreaElement>
): JSX.Element => {
  return (
    <textarea ref={ref} className={cn(className, styles.textarea)} {...props} />
  );
};

export const Textarea = forwardRef(TextareaRef);
