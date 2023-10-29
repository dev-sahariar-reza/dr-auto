import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import BookingRow from "../../components/Table/BookingRow/BookingRow";
import Swal from "sweetalert2";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("dr-auto-access-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setBookings(data);
      });
  }, [url]);

  // delete a booking data function
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/bookings/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your booking has been deleted.",
                "success"
              );
            }
            const remaining = bookings.filter((booking) => booking._id !== id);
            setBookings(remaining);
          });
      }
    });
  };
  const handleBookingConfirm = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, confirm it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/bookings/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: "confirm" }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
              const remaining = bookings.filter(
                (booking) => booking._id !== id
              );
              const updated = bookings.find((booking) => booking._id === id);
              updated.status = "Confirm";
              const newBookings = [updated, ...remaining];
              setBookings(newBookings);
              Swal.fire(
                "Updated!",
                "Your booking is confirmed now.",
                "success"
              );
            }
          });
      }
    });
  };

  return (
    <section className="container mx-auto my-12">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Service Image</th>
              <th>Service Title</th>
              <th>Booking Date</th>
              <th>Price</th>
              <th>Booking Confirmation</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <BookingRow
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
                handleBookingConfirm={handleBookingConfirm}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Bookings;
