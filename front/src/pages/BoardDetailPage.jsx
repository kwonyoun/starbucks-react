import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchBoardById } from "../api/BoardApi";

function BoardDetailPage() {
  const { id } = useParams();
  const [board, setBoard] = useState(null);

  useEffect(() => {
    fetchBoardById(id).then(setBoard);
  }, [id]);

  if (!board) return <div>로딩중...</div>;

  return (
    <div>
      <h2>{board.boardTitle}</h2>
      <p>{board.boardContent}</p>
      <hr />
      <div>조회수: {board.BoardView}</div>
      <div>작성자: {board.boardWriter}</div>
    </div>
  );
}

export default BoardDetailPage;
