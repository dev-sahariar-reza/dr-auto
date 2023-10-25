const FacilityCard = ({ f }) => {
  const { name, details } = f;
  return (
    <div className="card border-2 border-t-red-500 rounded-lg bg-gray-200 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{details}</p>
      </div>
    </div>
  );
};

export default FacilityCard;
