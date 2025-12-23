const BASE_URL = "http://localhost:8080/api/boards";

export const fetchBoards = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export const fetchBoardById = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`);
  return res.json();
};

export const createBoard = async (board) => {
  await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(board),
  });
};

export const updateBoard = async (board) => {
  await fetch(`${BASE_URL}/edit`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(board),
  });
};

export const deleteBoard = async (id) => {
  await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
};
