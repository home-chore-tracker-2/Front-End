import React, { useState, useEffect } from "react";
import axios from "axios";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const Register = ({ errors, touched, status }) => {
  const [ user, setUser] = useState([]);

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

        <button className="PrimaryBtn" type="submit">
          Submit
        </button>
      </Form>
    </div>
  );
};

const RegisterChild = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || "",
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  }),
  handleSubmit(values, { setStatus, resetForm }) {
    axios
      .post(
        "https://chore-tracker-build.herokuapp.com/api/child",
        values
      )
      .then(response => {
        setStatus(response.data);
      })
      .catch(err => console.log(err.response));
    resetForm();
  }
})(Register);

export default RegisterChild;
