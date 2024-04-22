
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  const { _id, name, quantity, supplire, taste, category, details, photo } = coffee;
  const handelDelete = _id => {
    console.log(_id)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`,{
          method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
          if(data.deletedCount > 0){
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
          }
        })
      }
    });
  }
  return (
    <div>
      <div className="card card-side bg-base-100 h-96 shadow-xl">
        <figure>
          <img src={photo} alt="Movie" className="h-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <h2>{quantity}</h2>
          <h2>{supplire}</h2>
          <h2>{category}</h2>
          <div className="card-actions justify-end">
            <div className="join">
              <button className="btn join-item btn-accent">View</button>
              <Link to={`updatecoffee/${_id}`}>
              <button className="btn join-item btn-primary">Edite</button>
              </Link>
              <button onClick={() => handelDelete(_id)} className="btn join-item btn-error">Dlete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
