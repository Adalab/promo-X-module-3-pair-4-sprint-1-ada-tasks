function Task(props) {
  return (
    <>
      <li className="tachado">
        <input id={props.id} type="checkbox" />
        {props.taskName}
      </li>
    </>
  );
}

export default Task;
