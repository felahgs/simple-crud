import "./Table.css";

function Table ({ content }) {
  return (
    <table cellSpacing="0">
      <thead>
        <tr>
          <th align="left">Name</th>
          <th align="left">Email</th>
          <th align="left">Phone</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {content.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td className="table__action-buttons">
              <button onClick={() => alert("editing")}>Edit</button>
              <button onClick={() => alert("removint")}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
