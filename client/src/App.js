import { Route, Switch } from "react-router";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import LoginForm from "./components/LoginForm";
import LogoutForm from "./components/LogoutForm";
import Layout from "./components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useHistory();

  useEffect(() => {
    const session = window.sessionStorage.getItem("currentUserId");

    if (session != null) {
      setLoggedIn(true);
    }
  });

  return (
    <Layout>
      <div className="flexbox-container">
        <Switch>
          <Route exact path="/">
            {loggedIn ? (
              navigate.push("/contracts")
            ) : (
              <LoginForm setLoggedIn={setLoggedIn} />
            )}
          </Route>
          <Route exact path="/contracts">
            {loggedIn ? <Dashboard /> : <LoginForm setLoggedIn={setLoggedIn} />}
          </Route>
        </Switch>
      </div>
    </Layout>
  );
}

export default App;
