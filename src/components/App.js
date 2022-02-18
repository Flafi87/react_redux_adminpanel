import React, { useEffect } from "react";
import { getUsers } from "../redux/actions/adminActions";
import Dashboard from "./Dashboard.jsx";
import store from "../redux/store/store.js";

const App = () => {
  useEffect(() => {
    store.dispatch(getUsers());
  }, []);
  return <Dashboard />;
};

export default App;
