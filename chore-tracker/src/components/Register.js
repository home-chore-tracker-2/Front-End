import React, { useState, useEffect } from "react";
import axios from "axios";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const Register = ({ values, errors, touched, status }) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    status && setUser(user => [...user, status]);
  }, [status]);

  return (
    <div className="container">
      <Form className="Form">
        <h2>Registration Form</h2>
        <label className="label" htmlFor="username">
          Username:
        </label>
        <Field className="Input" type="username" name="username" />
        {touched.username && errors.username && (
          <p className="form-error">{errors.username}</p>
        )}
        <label className="label" htmlFor="password">
          Password:
        </label>
        <Field
          className="Input"
          type="password"
          name="password"
          autoComplete="off"
        />
        {touched.password && errors.password && (
          <p className="form-error">{errors.password}</p>
        )}
        <label className="label" htmlFor="roleId">
          Type of User
        </label>
        <Field
          as="select"
          name="role_id"
          type="dropdownlist"
          className="dropdown"
        >
          <option value="role_id">Role ID</option>
          <option value="1">1 Instructor</option>
          <option value="2">2 Client</option>
        </Field>
        {touched.roleId && errors.role_id && (
          <p className="form-error">{errors.role_id}</p>
        )}

        <button className="PrimaryBtn" type="submit">
          Submit
        </button>
        <p>
          {" "}
          Please navigate to Login after Submitting Username, Password, and Role
          ID
        </p>
      </Form>
    </div>
  );
};

const FormikRegister = withFormik({
  mapPropsToValues({ username, password, role_id }) {
    return {
      username: username || "",
      password: password || "",
      role_id: role_id || ""
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required("Required."),
    password: Yup.string().required("Required."),
    role_id: Yup.string()
      .oneOf(["1", "2"])
      .required("Please choose a role")
  }),
  handleSubmit(values, { setStatus, resetForm }) {
    axios
      .post(
        "https://chore-tracker-build.herokuapp.com/api/auth/register",
        values
      )
      .then(response => {
        localStorage.setItem("token", response.data.token);
        setStatus(response.data);
        let isLoggedIn = true;
      })
      .catch(err => console.log(err.response));
    resetForm();
  }
})(Register);

export default FormikRegister;