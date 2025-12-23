import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchStoreById } from "../api/StoreApi";

function StoreDetailPage() {
  const { id } = useParams();
  const [store, setStore] = useState(null);

  useEffect(() => {
    fetchStoreById(id).then(setStore);
  }, [id]);

  if (!store) return <div>로딩중...</div>;

  return (
    <div>
      <h2>{store.storeName}</h2>
      <p>{store.storeAddr}</p>
    </div>
  );
}

export default StoreDetailPage;
