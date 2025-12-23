import { useState } from "react";

function BoardForm({ initialData, onSubmit }) {
  const [boardTitle, setBoardTitle] = useState(initialData?.boardTitle || "");
  const [boardContent, setBoardContent] = useState(initialData?.boardContent || "");
  const [boardWriter, setBoardWriter] = useState(initialData?.boardWriter || "");

  const submit = () => {
    onSubmit({
      boardTitle,
      boardContent,
      boardWriter
    });
  };

  return (
    <div>
      <input
        placeholder="제목"
        value={boardTitle}
        onChange={e => setBoardTitle(e.target.value)}
      />
      <textarea
        placeholder="내용"
        value={boardContent}
        onChange={e => setBoardContent(e.target.value)}
      />
      <input
        placeholder="작성자"
        value={boardWriter}
        onChange={e => setBoardWriter(e.target.value)}
      />
      <button onClick={submit}>저장</button>
    </div>
  );
}

export default BoardForm;
