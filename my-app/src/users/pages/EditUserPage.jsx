import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { Navigate } from "react-router-dom";
import useForm from "../../forms/hooks/useForm";
import ROUTES from "../../routes/routesModel";
import UserForm from "../components/UserForm";
import initialSignupForm from "../helpers/initialForms/initialSignupForm";
import useUsers from "../hooks/useUsers";
import signupSchema from "../models/joi-schema/signupSchema";
import { useUser } from "../providers/UserProvider";
import mapUserToModel from "../helpers/normalization/mapUserToModel";
import { getUser } from "../../users/services/usersApiService";

export default function EditUserPage() {
  const { handleUpdateUser } = useUsers();
  const [userData, setUserData] = useState();

  const { user } = useUser();
  const { value, ...rest } = useForm(
    initialSignupForm,
    signupSchema,
    handleUpdateUser
  );

  useEffect(() => {
    async function fetchData() {
      if (user) {
        const result = await getUser(user.id);
        const modelUser = mapUserToModel(result);
        rest.setData(modelUser);
      }
    }
    fetchData();
  }, [user]);

  return (
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <UserForm
        onSubmit={rest.onSubmit}
        onReset={rest.handleReset}
        onFormChange={rest.validateForm}
        title="update form"
        errors={value.errors}
        data={value.data}
        onInputChange={rest.handleChange}
        setData={rest.setData}
      />
    </Container>
  );
}
