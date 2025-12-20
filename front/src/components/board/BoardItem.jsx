import { useNavigate } from "react-router-dom";

function BoardItem({ board }) {
  const navigate = useNavigate();

  return (
    <div
      style={styles.item}
      onClick={() => navigate(`/board/${board.id}`)}
    >
      <strong>{board.title}</strong>
      <p>{board.writer}</p>
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
