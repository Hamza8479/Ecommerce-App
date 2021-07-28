import "./App.css";
import Layout from "./Layout/Layout";
import Builder from "./container/Builder/Builder";
import Todo from "./components/Todo/Todo";

function App() {
  return (
    <div className="App">
      <Layout>
        <Todo />
        <Builder />
      </Layout>
    </div>
  );
}

export default App;
