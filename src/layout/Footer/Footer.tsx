import { FooterProps } from './FooterProps';
import styles from './Sidebar.module.css';

export const Footer = ({ ...props }: FooterProps): JSX.Element => {
  return <div {...props}>Footer</div>;
};
