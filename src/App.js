import React from "react";
import { Route } from "react-router-dom";
import PostListPage from "./chapter24/pages/PostListPage";
import LoginPage from "./chapter24/pages/LoginPage";
import RegisterPage from "./chapter24/pages/RegisterPage";
import WritePage from "./chapter24/pages/WritePage";
import PostPage from "./chapter24/pages/PostPage";

const App = () => {
  return (
    <>
      <Route path={["/@:username", "/"]} component={PostListPage} exact />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/write" component={WritePage} />
      <Route path="/@:username/:postId" component={PostPage} />
    </>
  );
};

export default App;
