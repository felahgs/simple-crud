import "./style.css";

function Table ({ content, onEdit, onDelete }) {

  // Here we will render our table based on our users props. 
  return (
    // Developers avoid using tables nowdays, since they are not so good to build a customized and dynamic table.
    // For this example we will be using tables since our data structure is very simple and straightforward.
    <table cellSpacing="0">
      <thead>
        <tr>
          <th align="left">ID</th>
          <th align="left">Name</th>
          <th align="left">Email</th>
          <th align="left">Phone</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {content.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td className="table__action-buttons">
              {/* onClick will call our functions onEdit and onDelete, passed as props from the parent component */}
              {/* This functions will be called using the user.id as parameter. These functions were declared on ./pages/Home */}
              <button onClick={() => onEdit(user.id)}>Edit</button>
              <button onClick={() => onDelete(user.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
