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
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Container>
         <Header as="h2" style={{ color: "white" }} textAlign="center">
          Log-in to your account
        </Header>
        <Form size="large" onSubmit={handleFormSubmit}>
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
              style={{ borderColor: "#008599" }}
            />
            <Button
              fluid
              size="large"
              style={{ backgroundColor: "#d41050", color: "#fff" }}
              type="submit"
              loading={loading}
              disabled={loading}
            >
              {loading ? "Loading..." : "Login"}
            </Button>
          </Segment>
        </Form>
        {error && (
          <Message
            negative
            style={{ backgroundColor: "#008599", color: "#fff", borderColor: "#d41050" }}
          >
            <Message.Header style={{ color: "#fff" }}>Login failed</Message.Header>
            <p>Please check your credentials and try again.</p>
          </Message>
        )}
        <Message style={{ backgroundColor: "#d41050", color: "#fff" }}>
          New to us?{" "}
          <Link to="/Landing" style={{ color: "white" }}>
            Sign Up
          </Link>
        </Message>

    </Container>
     
  );
};

export default Login;
