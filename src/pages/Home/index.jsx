import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Table from "../../components/Table";
import { api } from "../../services/api";

// This imports our style. In this project we are not using any css library or scouped strategy.
// That is not a good idea, it is better to have our styles isolated so they won't be applied on the whole application.
import  "./style.css";

function Home() {
  // State where we are going to save users fetched from the server
  const [users, setUsers] = useState([]);
  // useNavigate is a hook from the react-router-dom library. With that, we can easily navigate to any path that we 
  // declared under our router paths on the main.jsx file.
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
  // the fetchUsers() method Calls the get users function to update de list of users.
  useEffect(() => {
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

  return (
    <main className="home__main-container">
      <div className="table-container">
        <h1>Lista de Contatos</h1>
        {/* <Table content={mockedUsers} /> */}
        {/* Here we render our Table component passing our data from the back-end as a props */}
        <Table content={[...users]}  onEdit={handleEdit} onDelete={handleDelete} />

        {/* here onClick will be calling the navigate() method to the "/create" path that renders the CreateUser component */}
        <button onClick={() => navigate("/create")}>
          Novo Contato
        </button>
      </div>
    </main>
  );
}

export default Home;
