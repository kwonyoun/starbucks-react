import { useNavigate } from "react-router-dom";

function BoardHeader() {
  const navigate = useNavigate();

  return (
    <header style={styles.header}>
      <h2>게시판</h2>
      <button onClick={() => navigate("/boards/write")}>
        글쓰기
      </button>
    </header>
  );
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    padding: "16px"
  }
};

export default BoardHeader;
