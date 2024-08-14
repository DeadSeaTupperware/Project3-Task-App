import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";

import Auth from "../utils/auth";
import {
  Button,
  Form,
  Container,
  Header,
  Message,
  Segment,
} from "semantic-ui-react";

const Login = () => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, loading }] = useMutation(LOGIN_USER);
  const [isLoggedIn, setIsLoggedIn] = useState(Auth.loggedIn());

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
      setIsLoggedIn(true);
    } catch (e) {
      console.error(e);
    }
  };

  const handleLogout = () => {
    Auth.logout();
    setIsLoggedIn(false);
  };

  return (
    <Container>
      <Header as="h2" style={{ color: "white" }} textAlign="center">
        {isLoggedIn ? "Logout from your account" : "Log-in to your account"}
      </Header>
      <Form
        size="large"
        onSubmit={isLoggedIn ? handleLogout : handleFormSubmit}
      >
        <Segment stacked style={{ borderColor: "#d41050" }}>
          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            placeholder="E-mail address"
            name="email"
            type="email"
            value={formState.email}
            onChange={handleChange}
            style={{ borderColor: "#008599", color: "#000000" }}
          />
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            name="password"
            type="password"
            value={formState.password}
            onChange={handleChange}
            style={{ borderColor: "#008599", color: "#000000" }}
          />
          <Button
            fluid
            size="large"
            style={{ backgroundColor: "#08013a", color: "#fff" }}
            type="submit"
            loading={loading}
            disabled={loading}
          >
            {loading ? "Loading..." : isLoggedIn ? "Logout" : "Login"}
          </Button>
        </Segment>
      </Form>
      {error && (
        <Message
          negative
          style={{
            backgroundColor: "#08013a",
            color: "#fff",
            borderColor: "#d41050",
          }}
        >
          <Message.Header style={{ color: "#fff" }}>
            Login failed
          </Message.Header>
          <p>Please check your credentials and try again.</p>
        </Message>
      )}
      <Message style={{ backgroundColor: "#08013a", color: "#fff" }}>
        {isLoggedIn ? "Logged in successfully!" : "New to us? "}
        <Link to="/Landing" style={{ color: "white" }}>
          {isLoggedIn ? "Logout" : "Sign Up"}
        </Link>
      </Message>
    </Container>
  );
};

export default Login;
