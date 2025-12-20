function StoreCard({ store }) {
  return (
    <div style={styles.card}>
      <strong>{store.storeName}</strong>
      <div style={styles.addr}>{store.storeAddr}</div>
      <div style={styles.distance}>
        {store.distance.toFixed(2)} km
      </div>
    </div>
  );
}

const styles = {
  card: {
    padding: "12px",
    borderBottom: "1px solid #eee"
  },
  addr: {
    fontSize: "14px",
    color: "#555"
  },
  distance: {
    fontSize: "13px",
    color: "#00704a"
  }
};

export default StoreCard;