import { useEffect, useState } from "react";
import { fetchBoards } from "../../api/BoardApi";
import BoardItem from "./BoardItem";
import BoardHeader from "./BoardHeader";
import Loading from "../common/Loading";

function BoardList() {
  const [boards, setBoards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBoards()
      .then(data => {
        setBoards(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <Loading />;

  return (
    <div>
      <BoardHeader />
      {boards.map(board => (
        <BoardItem key={board.id} board={board} />
      ))}
    </div>
  );
}

export default BoardList;
