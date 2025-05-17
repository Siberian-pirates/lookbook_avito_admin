"use client";

import { Button, Form, Input } from "antd";
import styles from "./page.module.scss";

interface FormValues {
  login: string;
  password: string;
}

export default function LoginPage() {
  const [form] = Form.useForm<FormValues>();

  const onFinish = (values: FormValues) => {
    console.log("Received values:", values);
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Войти в аккаунт</h2>
      <Form
        className={styles.form}
        form={form}
        name="login"
        layout="vertical"
        onFinish={onFinish}
        autoComplete="on"
      >
        <Form.Item
          label="Логин"
          name="login"
          rules={[{ required: true, message: "Пожалуйста, введите логин!" }]}
        >
          <Input placeholder="Введите ваш логин" />
        </Form.Item>
        <Form.Item
          label="Пароль"
          name="password"
          rules={[{ required: true, message: "Пожалуйста, введите пароль!" }]}
        >
          <Input.Password placeholder="Введите ваш пароль" />
        </Form.Item>
        <Form.Item>
          <Button className={styles.button} type="primary" htmlType="submit">
            Войти
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
