import React, { useState } from "react";
import styled from "styled-components";
import { axiosWithAuth } from '../utils/axiosWithAuth';


const ChoreCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: grey;
  color: white;
  width: 75%;
  border: 1px solid black;
  border-radius: 7px;
  opacity: 0.9;
  margin: 2%;
`;

function ChoreCard(chore) {
  const ChoreList = ({ chores, updateChores }) => {
    console.log(chores);
    const [editing, setEditing] = useState(false);
    const [choreToEdit, setChoreToEdit] = useState();
    
    const editChore = chore => {
      setEditing(true);
      setChoreToEdit(chore);
    };

  const saveEdit = e => {
    e.preventDefault();
    axiosWithAuth()
    .put(`/api/chores/${choreToEdit.id}`, choreToEdit)
    .then(res => {
      updateChores([ ...chores.filter(chore => chore.id !== choreToEdit.id), res.data ]);
      setEditing(false);
    })
    .catch(err => console.log('Edit not saved', err));
  };
  const deleteChore = chore => {
    axiosWithAuth()
			.delete(`/api/chores/${chore.id}`)
			.then(res => updateChores(chore.filter(chore => chore.id !== res.data)))
      .catch(err => console.log('Undeleted', err)); 
    };
  return (
    <ChoreCardDiv>
      <h3>{chore.choreName}</h3>
      <p>Due: {chore.dueDate}</p>
      <p>Description: {chore.description}</p>
      <p>Worth {chore.points} points!</p>
      <div className="chores-wrap">
      <p>chores</p>
      <ul>
        {chores.map(chore => (
          <li key={chore.chore} onClick={() => editChore(chore)}>
            <span>
              <span className="delete" onClick={e => {
                    e.stopPropagation();
                    deleteChore(chore)
                  }
                }>
                  x
              </span>{" "}
              {chore.chore}
            </span>
            <div
              className="chore-box"
              style={{ backgroundChore: chore.code.hex }}
            />
          </li>
        ))}
      </ul>
      {editing && (
        <form onSubmit={saveEdit}>
          <legend>edit chore</legend>
          <label>
            chore name:
            <input
              onChange={e =>
                setChoreToEdit({ ...choreToEdit, chore: e.target.value })
              }
              value={choreToEdit.chore}
            />
          </label>
          <label>
            hex code:
            <input
              onChange={e =>
                setChoreToEdit({
                  ...choreToEdit,
                  code: { hex: e.target.value }
                })
              }
              value={choreToEdit.code.hex}
            />
          </label>
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}
      <div className="spacer" />
      <div className="spacer">    
      </div>
      </div>

    </ChoreCardDiv>
  );
}
};

export default ChoreCard;
