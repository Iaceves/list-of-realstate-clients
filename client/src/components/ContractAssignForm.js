import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { useState } from "react";

function ContractAssignForm({ agents }) {
  const [contractForm, setContractForm] = useState({
    name: "",
    address: "",
    phone_number: "",
  });

  function handleSubmitForm(e) {
    e.preventDefault();

    fetch("/sellers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contractForm),
    });
  }

  const agentsForSelect = agents.map((agent) => {
    return (
      <>
        <option value={agent.id}>{agent.name}</option>;
      </>
    );
  });

  function handleFieldChange(e) {
    setContractForm({ ...contractForm, [e.target.name]: e.target.value });
  }
  return (
    <>
      <Form onSubmit={handleSubmitForm}>
        <Form.Text className="text-muted">
          Assign an Agent to a new Client.
        </Form.Text>
        <Form.Select
          name="agent_id"
          onChange={handleFieldChange}
          aria-label="Default select example"
        >
          <option value="agents">Open this select menu</option>
          {agentsForSelect}
        </Form.Select>

        <Form.Group
          name="name"
          onChange={handleFieldChange}
          className="mb-3"
          controlId="formBasicEmail"
        >
          <Form.Label>Home Owner</Form.Label>
          <Form.Control type="text" placeholder="Home Owner" />
        </Form.Group>

        <Form.Group name="price" onChange={handleFieldChange} className="mb-3">
          <Form.Label>Home Contract Price</Form.Label>
          <Form.Control type="text" placeholder="Home Contract Price" />
        </Form.Group>

        <Form.Group
          name="address"
          onChange={handleFieldChange}
          className="mb-3"
          controlId="formBasicEmail"
        >
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Home Address, In Contract here"
          />
        </Form.Group>

        <Form.Group
          name="phone_number"
          onChange={handleFieldChange}
          className="mb-3"
          controlId="formBasicEmail"
        >
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="text" placeholder="Phone Number" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default ContractAssignForm;
