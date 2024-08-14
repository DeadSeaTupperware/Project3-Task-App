import { useState } from "react";
import { Link } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";

import Auth from "../utils/auth";

const Landing = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });
      console.log(data);
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <main className="landing-page">
      <div className="form-container">
        <h2 className="heading">Sign Up</h2>
        {data ? (
          <p className="success-message">
            Success! You may now head <Link to="/">back to the homepage.</Link>
          </p>
        ) : (
          <div class="signup-container">
            <form onSubmit={handleFormSubmit} className="signup-form">
              <input
                className="form-input"
                placeholder="Your username"
                name="username"
                type="text"
                value={formState.username}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="Your email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="******"
                name="password"
                type="password"
                value={formState.password}
                onChange={handleChange}
              />
              <button className="btn-submit" type="submit">
                Sign Up
              </button>
            </form>
          </div>
        )}
        {error && <div className="error-message">{error.message}</div>}
      </div>
    </main>
  );
};

export default Landing;
