import { RouteProps as ReactDOMRouteProps } from 'react-router-dom';

export interface RouteProps {
  path: string;
  exact: boolean;
  isPrivate: boolean;
  permission: string | null;
  component?: React.ComponentType;
  icon: string | null | React.ComponentType;
  title: string;
  id: string;
  isSubmenu: boolean;
  showInMenu: boolean;
  submenuOfParentId?: string | null;
}

export interface RoutesProps extends ReactDOMRouteProps {
  component: React.ComponentType;
  isPrivate?: boolean;
}
