const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {
  const { _id, service, img, price, bookingDate, status } = booking;
  return (
    <tr>
      <th>
        <button
          className="btn btn-circle btn-outline"
          onClick={() => handleDelete(_id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="avatar">
          <div className="mask mask-square w-24 h-24">
            <img src={img} alt="service image" />
          </div>
        </div>
      </td>
      <td>
        <h3 className="font-bold">{service}</h3>
      </td>
      <td>
        <p>{bookingDate}</p>
      </td>
      <td>
        <p>{price}</p>
      </td>
      <th>
        {status === "confirm" ? (
          <button className="btn btn-success">Confirmed</button>
        ) : (
          <button
            className="btn btn-ghost btn-xs"
            onClick={() => handleBookingConfirm(_id)}
          >
            click to confirm
          </button>
        )}
      </th>
    </tr>
  );
};

export default BookingRow;
