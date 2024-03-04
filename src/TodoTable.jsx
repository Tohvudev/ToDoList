import React from "react";

const TodoTable = (props) => {
  const handleDelete = (index) => {
    props.onDelete(index);
  };

  return (
    <>
      <table style={{ margin: "0 auto" }}>
        <tbody>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
          {props.todos.map((item, index) => (
            <tr key={index}>
              <td style={{ textAlign: "center" }}>{new Date(item.date).toLocaleDateString()}</td>
              <td style={{ textAlign: "center" }}>{item.description}</td>
              <td style={{ textAlign: "center" }}>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TodoTable;
