import { Menu } from '../Menu/Menu';
import { SidebarProps } from './SidebarProps';
import cn from 'classnames';
import styles from './Sidebar.module.css';
import Logo from '../logo.svg';
import { Search } from '@/components';

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  return (
    <div className={cn(className, styles.sidebar)} {...props}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <Search />
      <Menu />
    </div>
  );
};
