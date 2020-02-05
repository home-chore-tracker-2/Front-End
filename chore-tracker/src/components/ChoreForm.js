import React from "react";
import { withFormik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styled from "styled-components";

function ChoreForm({ values, errors, touched }) {
  return (
    <div>
      <Form>
        <label htmlFor="name">
          <Field id="name" type="text" name="name" placeholder="Chore Name" />
          {touched.name && errors.name && (
            <p classname="errors">{errors.name}</p>
          )}
        </label>
        <label htmlFor="description">
          <Field
            as="textarea"
            id="description"
            type="text"
            name="description"
            placeholder="Chore Description"
          />
          {touched.description && errors.description && (
            <p classname="errors">{errors.description}</p>
          )}
        </label>
        <label htmlFor="points">
          <Field
            id="points"
            type="text"
            name="description"
            placeholder="Chore Point Value"
          />
          {touched.points && errors.points && (
            <p classname="errors">{errors.points}</p>
          )}
        </label>
        <label htmlFor="dueDate">
          <Field
            id="dueDate"
            type="text"
            name="dueDate"
            placeholder="Due Date (MM-DD-YYYY)"
          />
          {touched.dueDate && errors.dueDate && (
            <p classname="errors">{errors.dueDate}</p>
          )}
        </label>
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
}

const FormikChoreForm = withFormik({
  mapPropsToValues(props) {
    console.log(props);
    return { name: "", description: "", points: "", dueDate: "" };
  },

  validationSchema: Yup.opbject.shape({
    name: Yup.string().required("Must include chore name"),
    description: Yup.string().required("Must include chore description"),
    points: Yup.string().required("Must include chore point value"),
    dueDate: Yup.string().required("Must include due date")
  }),

  handleSubmit(values, { setStatus, resetForm }) {
    axios
      .post()
      .then(response => {
        console.log("response", response);
        setStatus(response.data);
        resetForm();
      })
      .catch(err => console.log(err));
  }
})(ChoreForm);

export default FormikChoreForm;
