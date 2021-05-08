import React, { Suspense } from 'react';

import { Layout, Spin } from 'antd';

const { Header, Footer, Content } = Layout;

export const Public: React.FC = ({ children }) => {
  return (
    <Layout style={{ height: '100vh' }}>
      <Suspense fallback={<Spin spinning />}>
        <Header>Header</Header>
        <Content style={{ overflowY: 'auto' }}>{children}</Content>
        <Footer>Agrodata</Footer>
      </Suspense>
    </Layout>
  );
};
