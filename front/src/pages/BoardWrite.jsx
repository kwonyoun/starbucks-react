import { createBoard } from "../api/BoardApi";
import BoardForm from "../components/board/BoardForm";
import { useNavigate } from "react-router-dom";


function BoardWrite() {

  const navigate = useNavigate();

  const submit = async (data) => {
    await createBoard(data);
    alert("작성 완료");
    navigate("/boards");
  };

  return <BoardForm onSubmit={submit} />;

}

export default BoardWrite;
