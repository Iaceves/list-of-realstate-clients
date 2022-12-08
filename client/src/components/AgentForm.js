import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function AgentForm({ agents, setAgents }) {
  let formObject = {
    name: "",
    company: "",
    license_number: "",
  };
  const [agentForm, setAgentForm] = useState(formObject);

  function handleForm(e) {
    e.preventDefault();

    fetch("/agents", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(agentForm),
    })
      .then((r) => r.json())
      .then((data) => setAgents([...agents, data]));

    console.log(e.target.value);
    setAgentForm({
      name: "",
      company: "",
      license_number: "",
    });
  }

  function handleFieldChange(e) {
    setAgentForm({ ...agentForm, [e.target.name]: e.target.value });
  }
  return (
    <>
      <Form onSubmit={handleForm}>
        <Form.Text className="text-muted">Create New Agent Form</Form.Text>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Agent Name</Form.Label>
          <Form.Control
            name="name"
            type="name"
            placeholder="Agent Name Here"
            onChange={handleFieldChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Company Name</Form.Label>
          <Form.Control
            name="company"
            type="company"
            placeholder="Company Name Here"
            onChange={handleFieldChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>License Number</Form.Label>
          <Form.Control
            name="license_number"
            type="license"
            placeholder="Agent License Number Here"
            onChange={handleFieldChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default AgentForm;
