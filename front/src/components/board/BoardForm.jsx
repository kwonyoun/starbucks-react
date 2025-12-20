function BoardForm({
  title,
  content,
  writer,
  onChangeTitle,
  onChangeContent,
  onChangeWriter,
  onSubmit,
  onCancel,
}) {
  return (
    <div style={styles.form}>
      <h2>글 작성</h2>

      <input
        placeholder="제목"
        value={title}
        onChange={e => onChangeTitle(e.target.value)}
      />

      <textarea
        placeholder="내용"
        value={content}
        onChange={e => onChangeContent(e.target.value)}
      />

      <input
        placeholder="작성자"
        value={writer}
        onChange={e => onChangeWriter(e.target.value)}
      />

      <button onClick={onSubmit}>등록</button>
      <button onClick={onCancel}>취소</button>
    </div>
  );
}

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    padding: "16px",
  },
};

export default BoardForm;
