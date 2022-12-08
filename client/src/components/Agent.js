import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

function Agent({ id, name, company, license_number, agents, setAgents }) {
  function deleteAgentOnClick(e) {
    e.preventDefault();

    fetch(`/agents/${id}`, { method: "DELETE" }).then(() => {
      const filterDeletedAgent = agents.filter((agent) => agent.id !== id);
      setAgents(filterDeletedAgent);
    });
  }

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Agent_Name</th>
            <th>Company_Name</th>
            <th>Agent_license</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{company}</td>
            <td>{license_number}</td>
            <td>
              <Button variant="danger" onClick={deleteAgentOnClick}>
                Delete
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default Agent;
