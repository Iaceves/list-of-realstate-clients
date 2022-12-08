import Nav from "react-bootstrap/Nav";

function NavigationBar() {
  return (
    <>
      <Nav
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          {/* if user is logged in show log out button */}
          <Nav.Link eventKey="link-1">Login</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default NavigationBar;
