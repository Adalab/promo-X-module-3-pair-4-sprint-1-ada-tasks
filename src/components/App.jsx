import "../scss/App.scss";
import Header from "./Header.jsx";
import Form from "./Forms.jsx";
import Taskslist from "./Taskslist.jsx";
import Section from "./Section.jsx";

function App() {
  return (
    <div>
      <Header />
      <main className="main">
        <Form />
        <Taskslist />
        <Section />
      </main>
    </div>
  );
}

export default App;
