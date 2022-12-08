import Table from "react-bootstrap/Table";

function Seller({ id, name, address, phone_number }) {
  function deleteSellerOnClick(e) {
    e.preventDefault();

    fetch(`/sellers/${id}`, { method: "DELETE" }).then(
      (data) =>
        // console.log("deleted succesfully")
        null
    );
  }

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Owner Name</th>
            <th>Address</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{name}</td>
            <td>{address}</td>
            <td>{phone_number}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default Seller;
