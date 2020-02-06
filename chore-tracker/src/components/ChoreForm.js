import React, { useState } from "react";
// import { withFormik, Form, Field } from "formik";
// import * as Yup from "yup";
import axios from "axios";
import styled from "styled-components";

const ChoreFormForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: gray;
  border: 1px solid black;
  border-radius: 7px;
  width: 50%;
  margin: 2%;
  opacity: 0.9;
`;

const ChoreFormLabel = styled.label`
  margin: 2%;
`;

const ChoreFormButton = styled.button`
  margin: 2%;
`;

function ChoreForm() {
  const [chore, setChore] = useState({
    name: "",
    description: "",
    points: "",
    dueDate: ""
  });

  const handleChange = e => {
    setChore({ ...chore, [e.target.id]: e.target.value });
  };

  const submitForm = e => {
    e.preventDefault();
    axios
      .post("https://chore-tracker-build.herokuapp.com/api/chores")
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <ChoreFormForm onSubmit={submitForm}>
      <ChoreFormLabel htmlFor="name">
        <input
          id="name"
          type="text"
          name="name"
          onChange={handleChange}
          value={chore.name}
          placeholder="Name of chore"
        />
      </ChoreFormLabel>
      <ChoreFormLabel htmlFor="description">
        <textarea
          id="description"
          type="text"
          name="description"
          onChange={handleChange}
          value={chore.description}
          placeholder="Description of chore"
          rows="5"
          cols="50"
        />
      </ChoreFormLabel>
      <ChoreFormLabel htmlFor="points">
        <input
          id="points"
          type="text"
          name="points"
          onChange={handleChange}
          value={chore.points}
          placeholder="Point for chore"
        />
      </ChoreFormLabel>
      <ChoreFormLabel htmlFor="dueDate">
        <input
          id="dueDate"
          type="text"
          name="dueDate"
          onChange={handleChange}
          value={chore.dueDate}
          placeholder="Due date (MM-DD-YYYY)"
        />
      </ChoreFormLabel>
      <ChoreFormButton type="submit" onClick={submitForm}>
        Submit Chore
      </ChoreFormButton>
    </ChoreFormForm>
  );
}

export default ChoreForm;

// function ChoreForm({ values, errors, touched }) {
//   return (
//     <div>
//       <Form>
//         <label htmlFor="name">
//           <Field id="name" type="text" name="name" placeholder="Chore Name" />
//           {touched.name && errors.name && (
//             <p classname="errors">{errors.name}</p>
//           )}
//         </label>
//         <label htmlFor="description">
//           <Field
//             as="textarea"
//             id="description"
//             type="text"
//             name="description"
//             placeholder="Chore Description"
//           />
//           {touched.description && errors.description && (
//             <p classname="errors">{errors.description}</p>
//           )}
//         </label>
//         <label htmlFor="points">
//           <Field
//             id="points"
//             type="text"
//             name="description"
//             placeholder="Chore Point Value"
//           />
//           {touched.points && errors.points && (
//             <p classname="errors">{errors.points}</p>
//           )}
//         </label>
//         <label htmlFor="dueDate">
//           <Field
//             id="dueDate"
//             type="text"
//             name="dueDate"
//             placeholder="Due Date (MM-DD-YYYY)"
//           />
//           {touched.dueDate && errors.dueDate && (
//             <p classname="errors">{errors.dueDate}</p>
//           )}
//         </label>
//         <button type="submit">Submit</button>
//       </Form>
//     </div>
//   );
// }

// const FormikChoreForm = withFormik({
//   mapPropsToValues(props) {
//     console.log(props);
//     return { name: "", description: "", points: "", dueDate: "" };
//   },

//   validationSchema: Yup.opbject.shape({
//     name: Yup.string().required("Must include chore name"),
//     description: Yup.string().required("Must include chore description"),
//     points: Yup.string().required("Must include chore point value"),
//     dueDate: Yup.string().required("Must include due date")
//   }),

//   handleSubmit(values, { setStatus, resetForm }) {
//     axios
//       .post()
//       .then(response => {
//         console.log("response", response);
//         setStatus(response.data);
//         resetForm();
//       })
//       .catch(err => console.log(err));
//   }
// })(ChoreForm);

// export default FormikChoreForm;
