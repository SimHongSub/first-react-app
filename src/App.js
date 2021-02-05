import React from "react";
import { Route } from "react-router-dom";
import Menu from "./chapter20/components/Menu";
import RedPage from "./chapter20/pages/RedPage";
import BluePage from "./chapter20/pages/BluePage";
import UsersPage from "./chapter20/pages/UsersPage";

const App = () => {
  return (
    <div>
      <Menu />
      <hr />
      <Route path="/red" component={RedPage} />
      <Route path="/blue" component={BluePage} />
      <Route path="/users" component={UsersPage} />
    </div>
  );
};

export default App;
