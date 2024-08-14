import cn from 'classnames';
import { TextareaProps } from './TextareaProps';
import styles from './Textarea.module.css';

export const Textarea = ({
  className,
  ...props
}: TextareaProps): JSX.Element => {
  return <textarea className={cn(className, styles.textarea)} {...props} />;
};
