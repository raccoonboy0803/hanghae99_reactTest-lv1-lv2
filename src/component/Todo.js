import styles from './Todo.module.css';

function Todo({ todo, title, content, isDone, handleDone }) {
  const onDone = () => {
    handleDone(todo);
  };
  const delBtn = () => {};
  return (
    <div className={styles.todoContainer}>
      <h3 className={styles.todoTitle}>{title}</h3>
      <p className={styles.todoContent}>{content}</p>
      <div className={styles.btnWrap}>
        <button className={styles.delBtn}>삭제하기</button>
        <button onClick={onDone} className={styles.comBtn}>
          {isDone ? '취소' : '완료'}
        </button>
      </div>
    </div>
  );
}
export default Todo;
