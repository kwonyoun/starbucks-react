import { useEffect, useState } from "react";
import { fetchNearestStores } from "../../api/StoreApi";
import StoreCard from "./StoreCard";
import StoreHeader from "./StoreHeader";
import Loading from "../common/Loading";

function StoreList() {
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      // ✅ 성공
      (pos) => {
        fetchNearestStores(
          pos.coords.latitude,
          pos.coords.longitude
        )
          .then(data => {
            setStores(data);
            setLoading(false);
          })
          .catch(err => {
            console.error("API 오류:", err);
            setLoading(false);
          });
      },
      // ✅ 위치 실패
      (err) => {
        console.error("위치 정보 오류:", err);
        setLoading(false);
      }
    );
  }, []);

  if (loading) return <Loading />;

  return (
    <div>
      <StoreHeader />
      {stores.map(store => (
        <StoreCard key={store.id} store={store} />
      ))}
    </div>
  );
}

export default StoreList;
