import { Container, IconWithTooltip } from 'agrodata-ui';
import { Button, Col, Form, Input, PageHeader, Row, Typography } from 'antd';
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { rulesModule } from '../../../../../api/configurations';

const { Title, Paragraph } = Typography;

export const RulesPage: React.FC = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm();

  const handleSubmitForm = useCallback(() => {
    form
      .validateFields()
      .then(() => {
        const values = form.getFieldsValue();
        console.log(values);

        rulesModule
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
        <Title>{t('configurations.rules_page.title')}</Title>
        <Paragraph>{t('configurations.rules_page.subtitle')}</Paragraph>
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

          <Form.Item name="kanban_status_id" hidden>
            <Input />
          </Form.Item>

          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Row gutter={[16, 0]}>
                <Col span={24}>
                  <Title level={4}>
                    {t('configurations.rules_page.status_change_rules_title')}
                  </Title>
                  <Paragraph>
                    {t(
                      'configurations.rules_page.status_change_rules_subtitle',
                    )}
                  </Paragraph>

                  <Form.List name="rules">
                    {(fields, { add, remove }) => (
                      <>
                        <Row gutter={[16, 0]} align="middle" justify="end">
                          <Col span={6}>
                            <Button
                              type="primary"
                              shape="round"
                              ghost
                              block
                              htmlType="button"
                              onClick={() => add()}
                            >
                              {`${t('geral.actions.to_add')} ${t(
                                'configurations.rules_page.module',
                              )}`}
                            </Button>
                          </Col>
                        </Row>

                        {fields.map((field) => (
                          <Row
                            gutter={[16, 0]}
                            align="middle"
                            key={`next-status-${field.name}`}
                          >
                            <Col span={18}>
                              <Form.Item
                                name={[field.name, 'kanban_next_status_id']}
                                label={t(
                                  'configurations.rules_fields.kanban_next_status_id',
                                )}
                                rules={[{ required: true }]}
                              >
                                <Input />
                              </Form.Item>
                            </Col>

                            <Col span={6}>
                              <IconWithTooltip
                                action="destroy"
                                title={t('geral.actions.to_remove')}
                                onClick={() => remove(field.name)}
                              />
                            </Col>
                          </Row>
                        ))}
                      </>
                    )}
                  </Form.List>
                </Col>
              </Row>

              <Row gutter={[16, 0]} align="middle" justify="end">
                <Col span={6}>
                  <Button type="primary" htmlType="submit" block>
                    {t('geral.actions.to_add')}
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
