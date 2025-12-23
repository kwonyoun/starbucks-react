import { useNavigate } from "react-router-dom";

function BoardItem({ board }) {
  const navigate = useNavigate();

  return (
    <div
      style={styles.item}
      onClick={() => navigate(`/boards/${board.boardId}`)}
    >
      <strong>{board.boardTitle}</strong>
      <p>{board.boardWriter}</p>
    </div>
  );
}

const styles = {
  item: {
    padding: "12px",
    borderBottom: "1px solid #eee",
    cursor: "pointer"
  }
};

export default BoardItem;
