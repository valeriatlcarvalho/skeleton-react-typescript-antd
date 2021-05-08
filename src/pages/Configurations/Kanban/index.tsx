import { Container } from 'agrodata-ui';
import { Button, Col, Form, Input, PageHeader, Row, Typography } from 'antd';
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { kanbanModule } from '../../../api/configurations';

const { Title, Paragraph } = Typography;

export const KanbanPage: React.FC = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm();

  const handleSubmitForm = useCallback(() => {
    form
      .validateFields()
      .then(() => {
        const values = form.getFieldsValue();
        console.log(values);

        kanbanModule
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
        <Title>{t('configurations.kanban_page.title')}</Title>
        <Paragraph>{t('configurations.kanban_page.subtitle')}</Paragraph>
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

        <Row gutter={[16, 0]} align="middle" justify="end">
          <Col span={6}>
            <Button
              type="primary"
              shape="round"
              ghost
              block
              htmlType="button"
              onClick={() => {
                window.location.pathname = `/configurations/kanban/${1}/column`;
              }}
            >
              {`${t('geral.actions.to_add')} ${t(
                'configurations.column_page.module',
              )}`}
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};
