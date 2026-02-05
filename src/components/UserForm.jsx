import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";

function UserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email) {
      alert("Please fill all fields");
      return;
    }

    try {
      await addDoc(collection(db, "users"), { name, email });
      setName("");
      setEmail("");
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  return (
    <Card className="p-3">
      <h5>Add User</h5>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-2">
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Button type="submit">Add User</Button>
      </Form>
    </Card>
  );
}

export default UserForm;
