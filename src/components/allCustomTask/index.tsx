import React from "react";
import "./style.scss";

const AllCustomTask = () => {
  return (
    <div className="container all-custom-task-page">
      <form className="form row">
        <div className="col-12 form-container">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Title" />
          </div>
          <div className="form-group">
            <textarea
              rows={4}
              className="form-control"
              placeholder="Description"
            />
          </div>
          <div className="form-group">
            <label>Created at</label>
            <input
              type="text"
              className="form-control"
              defaultValue="27 March, 2020 2:07 PM"
              placeholder="Title"
            />
          </div>
          <div className="form-group">
            <label>Due by</label>
            <input
              type="text"
              className="form-control"
              defaultValue="28 March, 2020 2:07 PM"
              placeholder="Title"
            />
          </div>
          <div className="form-group">
            <label>Applicable Location</label>
            <input
              type="text"
              className="form-control"
              defaultValue="Cluster 1"
              placeholder="Title"
            />
          </div>
          <div className="form-group">
            <div className="ml-2">Image</div>
            <img
              className="image"
              alt=""
              src="https://source.unsplash.com/1200x800/?supermarket"
            />
          </div>
        </div>
      </form>
      <button className="btn-delete">Delete</button>
    </div>
  );
};

export default AllCustomTask;
