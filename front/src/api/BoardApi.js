export const fetchBoards = async () => {
  const res = await fetch("http://localhost:8080/api/boards");
  return res.json();
};

export const fetchBoardById = async (id) => {
  const res = await fetch(`http://localhost:8080/api/boards/${id}`);
  return res.json();
};

export const createBoard = async (board) => {
  await fetch("http://localhost:8080/api/boards", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(board),
  });
};
