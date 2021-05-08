import { RouteProps } from '../../routes/types';

export interface MenuProps {
  routes: RouteProps[];
}

export interface MenuItemParents {
  [x: string]: RouteProps;
}

export interface MenuItemChildren {
  [x: string]: RouteProps[];
}

export interface MenuItems {
  parents: MenuItemParents;
  children: MenuItemChildren;
}
