export const fetchStores = async (lat, lng) => {
  const res = await fetch(
    `http://localhost:8080/api/stores`
  );

  if (!res.ok) throw new Error("매장 조회 실패");

  return res.json();
};

export const fetchNearestStores = async (lat, lng) => {
  const res = await fetch(
    `http://localhost:8080/api/stores/near?lat=${lat}&lng=${lng}`
  );
  return res.json();
};

export const fetchStoreById = async (id) => {
  const res = await fetch(`http://localhost:8080/api/stores/${id}`);
  return res.json();
};


