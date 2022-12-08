import { useState } from "react";

import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

import "./style.css";

function NewUser() {
  // These states are used on our inputs. We call this a controled input, a very commont approach when deadling with
  // user entered data in react.
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    // e.preventDefault() cancels any common behavior that the browser might have when submitting a form
    // we use it so the chrome won't refresh the page after submitting a form like he normally would do.
    e.preventDefault();
    // here we call our post method on our users endpoint to create a new user.
    api.post("/users", {name, email, phone}).then(() => {
      navigate("/");
    });
  }

  // The onSubmit method on the form element will be called when we click the 'submit' button

  // The onChange event always return an event. On that event, we can get the value of the target, in this case
  //the typed input value as then we call setName to update our name state with the typed value

  // The value on the inputs is defined by our state name, everytime we type on the input we update this value, this is
  //a controlled input

  // This button element has a type set as submit. Since this button is inside a form element, setting as submit
  // will call the form onSubmit method.
  
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

      {/* This is a simple link redirecting us to the home page. It is another way to use navigation withou
      the navigation hook. */}
      <a href="/">voltar para a home</a>
    </main>
  );
}

export default NewUser;