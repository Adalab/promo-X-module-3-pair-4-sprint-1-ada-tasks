import Task from "./Task.jsx";

function Taskslist() {
  return (
    <>
      <section className="container">
        <form className="task-form">
          <input
            type="text"
            className="task-input js-text-task-filter"
            placeholder="Ejemplo: gim"
          />
          <button className="add-task-btn js-btn-filter">Buscar</button>
        </form>
        <ul className="task-list">
          <Task
            id="1657692730126289"
            taskName="Recoger setas en el campo"
            completed={true}
          />
          <Task
            id="16576927301283248"
            taskName="Comprar pilas"
            completed={true}
          />
          <Task
            id="16576927301315832"
            taskName="Poner una lavadora de blancos"
            completed={true}
          />
          <Task
            id="16576927301332268"
            taskName="Aprender cómo se realizan las peticiones al servidor en JavaScript"
            completed={true}
          />
          <Task
            id="16576927301332392"
            taskName="ir al gimnasio"
            completed={false}
          />
          <Task
            id="16576927301334592"
            taskName="comprar bragas"
            completed={false}
          />
        </ul>
      </section>
    </>
  );
}

export default Taskslist;
