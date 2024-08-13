import { Route, Routes } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import { Outlet } from "react-router-dom";
import "./App.css";
import 'semantic-ui-css/semantic.min.css'
import Login from "./pages/Login";
import Landing from './pages/Landing';  
import Dashboard from './pages/TaskBoard'

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="">
        <div className="container">
          <Outlet />
          <Routes>
            <Route path="/Landing" element={<Landing />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/TaskBoard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
