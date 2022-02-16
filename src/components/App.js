import React, { useEffect } from "react";
import { getUsers } from "../redux/actions/adminActions";
import store from "../redux/store/store";
import Dashboard from "./Dashboard.jsx";

const App = () => {
  useEffect(() => {
    store.dispatch(getUsers());
  }, []);
  return <Dashboard />;
};

export default App;
