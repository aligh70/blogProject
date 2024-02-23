import React from "react";
import ReactDOM from "react-dom/client";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import App from "./App.jsx";
import "./index.css";

const client = new ApolloClient({
  uri: "https://api-us-west-2.hygraph.com/v2/clsxgk7y60rc307we3u98v11d/master",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
