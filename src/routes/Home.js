import TodoList from '../component/TodoList';
import styles from './Home.module.css';
import { useEffect, useState } from 'react';

function Home() {
  const [toDo, setToDo] = useState({
    id: '',
    title: '',
    content: '',
    isDone: false,
  }); //todo
  const [toDos, setToDos] = useState([]); //todo list
  const { title, content } = toDo; //구조분해할당
  const change = (e) => {
    const { value, name } = e.target;
    setToDo({
      ...toDo,
      [name]: value,
      id: Date.now(),
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setToDos((pre) => [...pre, toDo]);
    setToDo({
      id: '',
      title: '',
      content: '',
      isDone: false,
    });
  };
  const handleDone = (todo) => {
    const newToDos = toDos.map((item) => {
      if (item.id === todo.id) {
        return { ...item, isDone: !item.isDone };
      }
      return item;
    });
    setToDos(newToDos);
  };

  return (
    <div className={styles.container}>
      <div className={styles.titleWrap}>
        <span className={styles.leftTitle}>My Todo List</span>
        <span className={styles.rightTitle}>React</span>
      </div>
      <div className={styles.inputContainer}>
        <form onSubmit={onSubmit}>
          <div className={styles.inputWrap}>
            <label htmlFor="submitTitle">제목</label>
            <input
              name="title"
              value={title}
              id="submitTitle"
              type="text"
              onChange={change}
              className={styles.titleInput}
            />
            <label htmlFor="submitContent">내용</label>
            <input
              name="content"
              value={content}
              id="submitContent"
              type="text"
              onChange={change}
              className={styles.contentInput}
            />
          </div>
          <button className={styles.btn}>추가하기</button>
        </form>
      </div>
      <div>
        <TodoList toDos={toDos} handleDone={handleDone} />
      </div>
    </div>
  );
}
export default Home;
