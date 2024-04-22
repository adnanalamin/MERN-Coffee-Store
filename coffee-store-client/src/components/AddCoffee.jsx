import Swal from "sweetalert2";

const AddCoffee = () => {
    const handelAddCoffee = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplire = form.supplire.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = {name,quantity,supplire,taste,category,details,photo}
        console.log(newCoffee)
        fetch('http://localhost:5000/coffee',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: "success",
                    text: "COffee add successfully",
                    icon: "success"
                  });
            }
        })
        form.reset()

        
    }
  return (
    <div className="bg-[#F4F3F0] p-24">
      <h2 className="text-3xl font-extrabold">Added Coffee</h2>
      <form onSubmit={handelAddCoffee}>
        <div className="md:flex md:gap-x-20">
          <div className="md:w-1/2">
            <label className="form-control">
              <div className="label">
                <span className="label-text">Coffee Name</span>
              </div>
              <input
                type="text"
                placeholder="Coffee Name"
                name="name"
                className="input input-bordered input-accent w-full  md:w-full"
              />
            </label>
          </div>
          <div className="md:w-1/2">
            <label className="form-control">
              <div className="label">
                <span className="label-text">Available Quantity</span>
              </div>
              <input
                type="text"
                placeholder="Available Quantity"
                name="quantity"
                className="input input-bordered input-accent w-full  md:w-full"
              />
            </label>
          </div>
        </div>
        <div className="md:flex md:gap-x-20 mt-5">
          <div className="md:w-1/2">
            <label className="form-control">
              <div className="label">
                <span className="label-text">Supplire Name</span>
              </div>
              <input
                type="text"
                placeholder="Supplire Name"
                name="supplire"
                className="input input-bordered input-accent w-full  md:w-full"
              />
            </label>
          </div>
          <div className="md:w-1/2">
            <label className="form-control">
              <div className="label">
                <span className="label-text">Taste</span>
              </div>
              <input
                type="text"
                placeholder="Taste"
                name="taste"
                className="input input-bordered input-accent w-full  md:w-full"
              />
            </label>
          </div>
        </div>
        <div className="md:flex md:gap-x-20 mt-5">
          <div className="md:w-1/2">
            <label className="form-control">
              <div className="label">
                <span className="label-text">Category</span>
              </div>
              <input
                type="text"
                placeholder="Category"
                name="category"
                className="input input-bordered input-accent w-full  md:w-full"
              />
            </label>
          </div>
          <div className="md:w-1/2">
            <label className="form-control">
              <div className="label">
                <span className="label-text">Details</span>
              </div>
              <input
                type="text"
                placeholder="Details"
                name="details"
                className="input input-bordered input-accent w-full  md:w-full"
              />
            </label>
          </div>
        </div>
        <div className="mt-5">
          <div className="md:w-full">
            <label className="form-control">
              <div className="label">
                <span className="label-text">Photo URL</span>
              </div>
              <input
                type="text"
                placeholder="Photo URL"
                name="photo"
                className="input input-bordered input-accent w-full"
              />
            </label>
          </div>
        </div>
        <input type="submit" value="Add Coffee" className="btn btn-accent w-full mt-8" />
      </form>
    </div>
  );
};

export default AddCoffee;
