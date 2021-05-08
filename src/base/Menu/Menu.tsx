import React, { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { Menu } from 'antd';

import { useLocation, NavLink } from 'react-router-dom';
import { MenuItems, MenuProps } from './types';
import { RouteProps } from '../../routes/types';

const { SubMenu } = Menu;

export const LayoutMenu: React.FC<MenuProps> = ({ routes }) => {
  const location = useLocation();
  const { t } = useTranslation();

  const routesAgroupment = useMemo(() => {
    const routesParentsAndChildren: MenuItems = {
      parents: {},
      children: {},
    };

    routes.forEach((parent) => {
      if (!parent.submenuOfParentId && parent.showInMenu) {
        routesParentsAndChildren.parents = {
          ...routesParentsAndChildren.parents,
          [parent.id]: parent,
        };

        const childrenItems: (RouteProps | null)[] = routes.map<RouteProps | null>(
          (child) =>
            child.submenuOfParentId === parent.id && child.showInMenu === true
              ? child
              : null,
        );
        routesParentsAndChildren.children = {
          ...routesParentsAndChildren.children,
          [parent.id]: childrenItems.filter(
            (item) => item !== null,
          ) as RouteProps[],
        };
      }
    });

    return routesParentsAndChildren;
  }, [routes]);

  const renderIcon = useCallback(
    (icon: string | null | React.ComponentType, path: string | null) => {
      if (icon) {
        const Icon = icon;
        if (path) {
          return (
            <NavLink to={path}>
              <Icon />
            </NavLink>
          );
        }
        return <Icon />;
      }
      return null;
    },
    [],
  );

  const renderTitle = useCallback((title: string, path: string | null) => {
    if (path) {
      return <NavLink to={path}>{title}</NavLink>;
    }
    return title;
  }, []);

  const activeSubmenu = useMemo(() => {
    const uri = location.pathname.split('/');

    return uri[1];
  }, [location]);

  return (
    <>
      <Menu
        theme="light"
        mode="inline"
        defaultOpenKeys={[`menu-page-${activeSubmenu}`]}
        selectable={false}
      >
        {Object.values(routesAgroupment.parents).map((parent: RouteProps) => {
          if (routesAgroupment.children[parent.id].length > 0) {
            return (
              <SubMenu
                key={parent.id}
                icon={renderIcon(parent.icon, parent.path)}
                title={t(`${parent.title}`)}
              >
                {routesAgroupment.children[parent.id].map((child) => (
                  <Menu.Item
                    key={child.id}
                    icon={renderIcon(child.icon, child.path)}
                  >
                    {renderTitle(t(`${child.title}`), child.path)}
                  </Menu.Item>
                ))}
              </SubMenu>
            );
          }

          return (
            <Menu.Item
              key={parent.id}
              icon={renderIcon(parent.icon, parent.path)}
            >
              {renderTitle(t(`${parent.title}`), parent.path)}
            </Menu.Item>
          );
        })}
      </Menu>
    </>
  );
};
