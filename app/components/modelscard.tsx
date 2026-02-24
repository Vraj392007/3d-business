export default function ModelCard({ title, type, price }) {
  return (
    <div className="card">
      <div className="thumb" />

      <div className="card-body">
        <h3>{title}</h3>
        <p>{type}</p>

        <div className="card-row">
          <span className="price">{price}</span>
          <button className="btn-small">View</button>
        </div>
      </div>
    </div>
  );
}