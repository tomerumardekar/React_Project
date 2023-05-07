import { Container } from "@mui/material";
import React from "react";
import PageHeader from "../../components/PageHeader";
import useForm from "../../forms/hooks/useForm";
import initialLoginForm from "../helpers/initialForms/initialLoginForm";
import loginSchema from "../models/joi-schema/loginSchema";
import ROUTES from "../../routes/routesModel";

import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input";
import { useUser } from "../providers/UserProvider";
import useUsers from "../hooks/useUsers";

export default function LoginPage() {
  const { user } = useUser();
  const { handleLogin } = useUsers();

  const { value, ...rest } = useForm(
    initialLoginForm,
    loginSchema,
    handleLogin
  );

  return (
    <Container>
      <PageHeader
        title="Welcome to Login page"
        subtitle="here you can Log in"
      />
      <Container
        sx={{
          paddingTop: 8,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Form
          title="login"
          styles={{ maxWidth: "450px" }}
          to={ROUTES.CARDS}
          onSubmit={rest.onSubmit}
          onReset={rest.handleReset}
          onChange={rest.validateForm}
        >
          <Input
            label="email"
            name="email"
            type="email"
            error={value.errors.email}
            onChange={rest.handleChange}
            data={value.data}
          />
          <Input
            label="password"
            name="password"
            type="password"
            error={value.errors.password}
            onChange={rest.handleChange}
            data={value.data}
          />
        </Form>
      </Container>
    </Container>
  );
}
