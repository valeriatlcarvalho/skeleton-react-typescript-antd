import { Breadcrumb } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, withRouter } from 'react-router-dom';
import { routes } from '../routes/routes';

export const BreadcrumbRoutes = withRouter((props) => {
  const { t } = useTranslation();
  const { location } = props;

  const breadcrumbNameMap: {
    [x: string]: string;
  } = {};
  routes.forEach((route) => {
    breadcrumbNameMap[route.path] = route.title;
  });
  console.log('BreadcrumbRoutes', breadcrumbNameMap);

  const pathSnippets = location.pathname.split('/').filter((i) => i);
  console.log('BreadcrumbRoutes', 'pathSnippets', pathSnippets);

  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    console.log('BreadcrumbRoutes', 'url', url);

    const urlSplitted = url.split('/');
    if (
      urlSplitted[urlSplitted.length - 1] ===
      pathSnippets[pathSnippets.length - 1]
    ) {
      return (
        <Breadcrumb.Item key={url}>
          {t(`${breadcrumbNameMap[url]}`)}
        </Breadcrumb.Item>
      );
    }
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{t(`${breadcrumbNameMap[url]}`)}</Link>
      </Breadcrumb.Item>
    );
  });

  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/">{t('geral.menus.home_page')}</Link>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems);

  return <Breadcrumb>{breadcrumbItems}</Breadcrumb>;
});
