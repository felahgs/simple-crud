import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Table from "../../components/Table";
import { api } from "../../services/api";

import  "./style.css";

function Home() {
  // State where we are going to save users fetched from the server
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  async function fetchUsers() {
    // Get users from server
    api.get("users").then((response) => {
      console.log("Response from server", response);
      // Save users on our 'users' state
      setUsers(response.data);
    });
  }

  // Use Effect is triggered when te component is renered
  useEffect(() => {
    // Call the get users function to update de list of users.
    fetchUsers();
  }, []);

  // Handle function for deleting users
  const handleDelete = (id) => {
    // Call the request for deleting a user
    api.delete(`users/${id}`).then(() => {
      // After deleting the user update the list to reflect the changes
      fetchUsers();
    });
  };

  const handleEdit = (id) => {
    console.log("id", id);
    console.log("user", users);
    console.log("editing", users.find(user => user.id === id).name);
  };

  // const mockedUsers = [
  //   {id: 1, name: "Jane Smith", email: "jane@example.com", phone: "202-555-0193" },
  //   {id: 2, name: "Tristan Rodrigues Ramones Ramos Barbosa", email: "tristan@mail.com", phone: "202-555-0183" },
  //   {id: 3, name: "Andrea Jones", email: "andrea@mail.com", phone: "202-555-0138" },
  //   {id: 4, name: "Jane Smith", email: "jane@example.com", phone: "202-555-0193" },
  // ];

  return (
    <main className="home__main-container">
      <div className="table-container">
        <h1>Lista de Contatos</h1>
        {/* <Table content={mockedUsers} /> */}
        <Table content={[...users]}  onEdit={handleEdit} onDelete={handleDelete} />
        <button onClick={() => navigate("/create")}>
          Novo Contato
        </button>
      </div>
    </main>
  );
}

export default Home;
