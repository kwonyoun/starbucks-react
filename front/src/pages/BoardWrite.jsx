import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BoardForm from "../components/board/BoardForm";
import { createBoard } from "../api/BoardApi";

function BoardWrite() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [writer, setWriter] = useState("");

  const navigate = useNavigate();

  const submit = async () => {
    await createBoard({ title, content, writer });
    alert("작성 완료");
    navigate("/boards");
  };

  return (
    <BoardForm
      title={title}
      content={content}
      writer={writer}
      onChangeTitle={setTitle}
      onChangeContent={setContent}
      onChangeWriter={setWriter}
      onSubmit={submit}
      onCancel={() => navigate("/boards")}
    />
  );
}

export default BoardWrite;
