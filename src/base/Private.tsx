import React, { Suspense } from 'react';

import { Layout, Spin } from 'antd';

import { routes } from '../routes/routes';
import { LayoutMenu } from './Menu/Menu';
import { BreadcrumbRoutes } from './BreadcrumbRoutes';

const { Header, Footer, Sider, Content } = Layout;

export const Private: React.FC = ({ children }) => {
  return (
    <Layout hasSider style={{ height: '100vh' }}>
      <Sider theme="light" style={{ overflowY: 'auto' }}>
        <Suspense fallback={<Spin spinning />}>
          <LayoutMenu routes={routes} />
        </Suspense>
      </Sider>
      <Layout>
        <Suspense fallback={<Spin spinning />}>
          <Header>Header</Header>
          <BreadcrumbRoutes />
          <Content style={{ overflowY: 'auto' }}>{children}</Content>
          <Footer>Agrodata</Footer>
        </Suspense>
      </Layout>
    </Layout>
  );
};
