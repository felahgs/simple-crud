import "./style.css";

function Table ({ content, onEdit, onDelete }) {
  return (
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
