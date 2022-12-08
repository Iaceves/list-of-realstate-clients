// import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

function ContractAssign({ id, price, seller, agent }) {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Agent Name</th>
            <th>Home Owner</th>
            <th>House Contract Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{agent.name}</td>
            <td>{seller.name}</td>
            <td>{price}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default ContractAssign;
