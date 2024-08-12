import { Menu } from '../Menu/Menu';
import { SidebarProps } from './SidebarProps';

export const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
  return (
    <div {...props}>
      <Menu />
    </div>
  );
};
