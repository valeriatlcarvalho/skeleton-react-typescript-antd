import { Configurations } from '../pages/Configurations';
import { KanbanPage } from '../pages/Configurations/Kanban';
import { ColumnPage } from '../pages/Configurations/Kanban/Column';
import { RulesPage } from '../pages/Configurations/Kanban/Column/Rules';
import { StatusPage } from '../pages/Configurations/Status';
import { HomePage } from '../pages/Home/Home';
import { RouteProps } from './types';

export const routes: RouteProps[] = [
  {
    path: '/',
    exact: true,
    isPrivate: true,
    permission: null,
    component: HomePage,
    icon: null,
    title: 'geral.menus.home_page',
    id: 'menu-page-home',
    isSubmenu: false,
    showInMenu: true,
  },
  {
    path: '/configurations',
    exact: true,
    isPrivate: true,
    permission: null,
    component: Configurations,
    icon: null,
    title: 'geral.menus.configurations_page',
    id: 'menu-page-configurations',
    isSubmenu: true,
    showInMenu: true,
  },
  {
    path: '/configurations/status',
    exact: true,
    isPrivate: true,
    permission: null,
    component: StatusPage,
    icon: null,
    title: 'geral.menus.configurations_status_page',
    id: 'menu-page-configurations-status',
    submenuOfParentId: 'menu-page-configurations',
    isSubmenu: true,
    showInMenu: true,
  },
  {
    path: '/configurations/kanban',
    exact: true,
    isPrivate: true,
    permission: null,
    component: KanbanPage,
    icon: null,
    title: 'geral.menus.configurations_kanban_page',
    id: 'menu-page-configurations-kanban',
    submenuOfParentId: 'menu-page-configurations',
    isSubmenu: true,
    showInMenu: true,
  },
  {
    path: '/configurations/kanban/:kanbanId/column',
    exact: true,
    isPrivate: true,
    permission: null,
    component: ColumnPage,
    icon: null,
    title: 'geral.menus.configurations_column_page',
    id: 'menu-page-configurations-kanban-column',
    isSubmenu: false,
    showInMenu: false,
  },
  {
    path: '/configurations/kanban/:kanbanId/column/:columnId/rules',
    exact: true,
    isPrivate: true,
    permission: null,
    component: RulesPage,
    icon: null,
    title: 'geral.menus.configurations_rules_page',
    id: 'menu-page-configurations-kanban-column-rules',
    isSubmenu: false,
    showInMenu: false,
  },
];
