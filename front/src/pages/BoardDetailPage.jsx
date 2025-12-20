import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchBoardById, deleteBoard } from "../api/BoardApi";

function BoardDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [board, setBoard] = useState(null);

  useEffect(() => {
    fetchBoardById(id).then(setBoard);
  }, [id]);

  if (!board) return <div>로딩중...</div>;

  const onDelete = async () => {
    if (window.confirm("삭제할까요?")) {
      await deleteBoard(id);
      navigate("/boards");
    }
  };

  return (
    <div>
      <h2>{board.boardTitle}</h2>
      <p>{board.boardContent}</p>
      <p>작성자: {board.boardWriter}</p>
      <p>조회수: {board.BoardView}</p>
      <hr />
      <button onClick={() => navigate(`/boards/${id}/edit`)}>수정</button>
      <button onClick={onDelete}>삭제</button>
    </div>
  );
}

export default BoardDetailPage;
