import React from "react";
import { Container } from "react-bootstrap";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

function App() {
  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">🔥 Firebase CRUD App</h2>
      <UserForm />
      <hr />
      <UserList />
    </Container>
  );
}

export default App;
