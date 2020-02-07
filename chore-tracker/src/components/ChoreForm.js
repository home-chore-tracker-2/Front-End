import React, { useState } from "react";
// import { withFormik, Form, Field } from "formik";
// import * as Yup from "yup";
import axiosWithAuth from '../utils/axiosWithAuth';
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
  color: white;
`;

const ChoreFormButton = styled.button`
  margin: 2%;
`;

const ChoreFormH2 = styled.h1`
  color: white;
`;

function ChoreForm() {
  const [chore, setChore, child ] = useState({
    choreName: "",
    child_id:"",
    description: "",
    points: 0,
    dueDate: "",
    completed: false
  });

  const handleChange = e => {
    setChore({ ...chore, [e.target.id]: e.target.value });
  };

  const submitForm = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('/api/chores', chore)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };
  // const createChildSubmit = e =>{
  //   e.preventDefault();
  //   api().post('/auth/register/child', child)
  //   .then(()=>{
  //     alert('child created')
  //     api().get('/api/register/child')
  //     .then(res => updateChild(res.data))
  //     .catch(err => console.log(err))
  //   })
  // };

  return (
    <ChoreFormForm onSubmit={submitForm}>
      <ChoreFormH2>Add a Chore</ChoreFormH2>
      <ChoreFormLabel htmlFor="name">
        Chore Name:
        <input
          required
          id="name"
          type="text"
          name="name"
          onChange={handleChange}
          value={chore.name}
        />
      </ChoreFormLabel>
      <ChoreFormLabel htmlFor="assign">
        Assign To:
        <input
          required
          id="child_id"
          type="integer"
          name="assign"
          onChange={handleChange}
          value={chore.child_id}
        />
      </ChoreFormLabel>
      <ChoreFormLabel htmlFor="description">
        <textarea
          id="description"
          type="text"
          name="description"
          onChange={handleChange}
          value={chore.description}
          placeholder="Chore Description"
          rows="5"
          cols="50"
        />
      </ChoreFormLabel>
      <ChoreFormLabel htmlFor="points">
        Chore point value:
        <input
          required
          id="points"
          type="number"
          name="points"
          onChange={handleChange}
          value={chore.points}
        />
      </ChoreFormLabel>
      <ChoreFormLabel htmlFor="dueDate">
        Chore Due Date:
        <input
          required
          id="dueDate"
          type="date"
          name="dueDate"
          onChange={handleChange}
          value={chore.dueDate}
          placeholder="due date (MM/DD/YYYY)"
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
