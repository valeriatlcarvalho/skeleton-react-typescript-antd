import { Container } from 'agrodata-ui';
import { Button, Col, Form, Input, PageHeader, Row, Typography } from 'antd';
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { statusModule } from '../../../api/configurations';

const { Title, Paragraph } = Typography;

export const StatusPage: React.FC = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm();

  const handleSubmitForm = useCallback(() => {
    form
      .validateFields()
      .then(() => {
        const values = form.getFieldsValue();
        console.log(values);

        statusModule
          .store(values)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            console.log('finally');
            form.resetFields();
          });
      })
      .catch(() => {
        window.scrollTo({ top: 100 });
      });
  }, [form]);

  return (
    <>
      <PageHeader>
        <Title>{t('configurations.status_page.title')}</Title>
        <Paragraph>{t('configurations.status_page.subtitle')}</Paragraph>
      </PageHeader>

      <Container>
        <Form
          form={form}
          layout="vertical"
          scrollToFirstError
          onSubmitCapture={handleSubmitForm}
        >
          <Form.Item name="id" hidden>
            <Input />
          </Form.Item>

          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Row gutter={[16, 0]}>
                <Col span={24}>
                  <Form.Item
                    name="name"
                    label="Nome"
                    rules={[{ required: true }]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={[16, 0]} align="middle" justify="end">
                <Col span={6}>
                  <Button type="primary" htmlType="submit" block>
                    Cadastrar
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};
