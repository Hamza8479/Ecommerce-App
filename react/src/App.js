import "./App.css";
import Layout from "./Layout/Layout";
// import Builder from "./container/Builder/Builder";
import Todo from "./components/Todo/Todo";
import Header from "./components/Header/Header";

import "bootstrap/dist/css/bootstrap.min.css";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Layout>
        <Todo />
        <Builder />
      </Layout> */}
      <Header />
      <Switch>
        <Route exact path="/" component={Todo} />
        <Route exact path="/layout" component={Layout} />
        {/* <Route exact path="/header" component={Header} /> */}
      </Switch>
    </>
  );
}

export default App;
