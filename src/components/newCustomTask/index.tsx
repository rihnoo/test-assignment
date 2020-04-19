import React, { useState, useRef } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "./style.scss";

const options = ["Good enterprise", "two", "three"];

const NewCustomTask = () => {
  const inputEl = useRef<HTMLInputElement>(null);
  const [tab, setTab] = useState("store");

  const onButtonClick = () => {
    // ⚡️ TypeScript in strict mode will complain here,
    // because inputEl can be null!
    if (inputEl && inputEl.current) {
      inputEl.current.click();
    }
  };

  return (
    <div className="container new-custom-task-page">
      <div className="tab-wrapper row">
        <div
          className={`tab ${tab === "store" ? "tab-blue" : "tab-white"} col-6`}
          onClick={() => setTab("store")}
        >
          Create by store
        </div>
        <div
          className={`tab ${
            tab === "cluster" ? "tab-blue" : "tab-white"
          } col-6`}
          onClick={() => setTab("cluster")}
        >
          Create by cluster
        </div>
      </div>
      {tab === "store" && (
        <div>
          <form className="form row">
            <div className="col-12 bg-white">
              <Dropdown
                className="dropdown"
                options={options}
                value={options[0]}
                placeholder="Select an option"
                arrowOpen={
                  <span>
                    <i className="fa fa-angle-up" />
                  </span>
                }
                arrowClosed={
                  <span>
                    <i className="fa fa-angle-down" />
                  </span>
                }
              />
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Title"
                />
              </div>
              <div className="form-group">
                <textarea
                  rows={4}
                  className="form-control"
                  placeholder="Description"
                />
              </div>
              <input
                type="file"
                id="file"
                ref={inputEl}
                style={{ display: "none" }}
              />
              <button
                type="button"
                className="btn-upload"
                onClick={onButtonClick}
              >
                Upload an image
              </button>
            </div>
          </form>
          <div className="row bg-white expire-wrapper">
            <div>
              <label className="label">Due time (Asia/SG)</label>
              <p className="time">27 March, 2020 2:07 PM</p>
            </div>
          </div>
          <button className="btn-submit">Submit</button>
        </div>
      )}
      {tab === "cluster" && <div>Cluster Page</div>}
    </div>
  );
};

export default NewCustomTask;
