import Todo from './Todo';

function TodoList({ toDos, handleDone }) {
  return (
    <div>
      <div id="stateWorking">
        <p>Working.. 🔥</p>
        {toDos
          .filter((a) => a.isDone === false)
          .map((a) => {
            return (
              <Todo
                key={a.id}
                title={a.title}
                content={a.content}
                isDone={a.isDone}
                handleDone={handleDone}
                todo={a}
              />
            );
          })}
      </div>
      <div id="stateDone">
        <p>Done..!🎉</p>
        {toDos
          .filter((a) => a.isDone !== false)
          .map((a) => {
            return (
              <Todo
                key={a.id}
                title={a.title}
                content={a.content}
                isDone={a.isDone}
                handleDone={handleDone}
                todo={a}
              />
            );
          })}
      </div>
    </div>
  );
}
export default TodoList;
