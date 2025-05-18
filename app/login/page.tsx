"use client";

import { Button, Form, Input, message } from "antd";
import styles from "./page.module.scss";
import { AuthService } from "@/services";
import { useState } from "react";

interface FormValues {
  login: string;
  password: string;
}

export default function LoginPage() {
  const [pending, setPending] = useState(false);
  const [form] = Form.useForm<FormValues>();

  const onFinish = async (values: FormValues) => {
    try {
      setPending(true);
      await AuthService.login(values);
      window.location.href = "/products";
    } catch (e) {
      setPending(false);
      message.error("Неверный логин или пароль");
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>Войти в аккаунт</h2>
        <Form
          className={styles.form}
          form={form}
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
            <Button
              className={styles.button}
              type="primary"
              htmlType="submit"
              loading={pending}
              iconPosition="end"
            >
              Войти
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
