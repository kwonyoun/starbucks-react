import { useEffect, useState } from "react";
import { fetchBoardById, updateBoard } from "../api/BoardApi";
import { useParams, useNavigate } from "react-router-dom";
import BoardForm from "../components/board/BoardForm";

function BoardEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [board, setBoard] = useState(null);

  useEffect(() => {
    fetchBoardById(id).then(setBoard);
  }, [id]);

  if (!board) return null;

  const submit = async (data) => {
    await updateBoard({
      boardId: Number(id),
      ...data
    });

    alert("수정 완료");
    navigate(`/boards/${id}`);
  };

  return <BoardForm initialData={board} onSubmit={submit} />;
}

export default BoardEdit;
