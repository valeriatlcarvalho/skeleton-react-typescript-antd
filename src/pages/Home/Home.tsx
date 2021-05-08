import { Container } from 'agrodata-ui';
import { PageHeader } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const HomePage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader>{t('home.wellcome')}</PageHeader>
      <Container>Content</Container>
    </>
  );
};
