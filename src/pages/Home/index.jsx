import { useState, useEffect } from "react";
import Table from "../../components/Table";
import { api } from "../../services/api";

import  "./Home.css";

function Home() {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    api.get("users").then((response) => {
      console.log("Response from server", response);
      setUsers(response.data);
    });
  }

  useEffect(() => {
    getUsers();
  }, []);

  const mockedUsers = [
    {id: 1, name: "Jane Smith", email: "jane@example.com", phone: "202-555-0193" },
    {id: 2, name: "Tristan Rodrigues Ramones Ramos Barbosa", email: "tristan@mail.com", phone: "202-555-0183" },
    {id: 3, name: "Andrea Jones", email: "andrea@mail.com", phone: "202-555-0138" },
    {id: 4, name: "Jane Smith", email: "jane@example.com", phone: "202-555-0193" },
  ];

  return (
    <main>
      <div className="table-container">
        <h1>Lista de Contatos</h1>
        {/* <Table content={mockedUsers} /> */}
        <Table content={[...users, ...users]} />
        <button onClick={() => alert("go to add")}>
          Novo Contato
        </button>
      </div>
    </main>
  );
}

export default Home;
