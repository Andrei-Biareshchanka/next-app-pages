import { HeaderProps } from './HeaderProps';
import styles from './Sidebar.module.css';

export const Header = ({ ...props }: HeaderProps): JSX.Element => {
  return <div {...props}>Header</div>;
};
