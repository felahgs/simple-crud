import { useState } from "react";

import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

import "./style.css";

function NewUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    api.post("/users", {name, email, phone}).then(() => {
      navigate("/");
    });
  }

  return (
    <main className="create-user__container">
      <h1>Criar Novo Usuário</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-input">
          <label htmlFor="name">Nome</label>
          <input value={name} onChange={(e) => setName(e.target.value)} id="name" type="text" />
        </div>

        <div className="form-input">
          <label htmlFor="email">Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} id="email" type="email" />
        </div>
        
        <div className="form-input">
          <label htmlFor="phone">Telefone</label>
          <input value={phone} onChange={(e) => setPhone(e.target.value)} id="phone"type="phone" />
        </div>

        <button disabled={!name || !email || !phone} type="submit">Criar Usuário</button>
      </form>

      <a href="/">voltar para a home</a>
    </main>
  );
}

export default NewUser;