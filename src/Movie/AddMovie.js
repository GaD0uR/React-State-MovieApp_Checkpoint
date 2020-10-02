import React, { useState } from "react";
import Modal from "react-modal";
import Rate from "./Rate";

Modal.setAppElement("#root");

const AddMovie = ({ addNewMovie }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [rating, setRating] = useState("");
  const [image, setImage] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    let newMovie = {
      name,
      date,
      rating,
      image,
      type,
      description,
    };
    addNewMovie(e, newMovie);
    setIsOpen(false);
    setName("");
    setDate("");
    setRating("");
    setImage("");
    setType("");
    setDescription("");
  };

  return (
    <>
      <button className="btn btn-add" onClick={openModal}>
        <i className="fa fa-plus"></i> movie
      </button>
      <Modal
        className="add-modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <h1 className="add-title">Add A Movie</h1>
        <form>
          <div className="form-group row">
            <label className="col-md-4">Movie Name</label>
            <div className="col-md-8">
              <input
                type="text"
                name="name"
                value={name}
                className="form-control"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-md-4">Movie Rate</label>
            <div className="col-md-8 rating">
              <Rate rating={rating} setRatingSearch={setRating} />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-md-4">Movie Release Date</label>
            <div className="col-md-8">
              <input
                type="number"
                name="date"
                value={date}
                className="form-control"
                required
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-md-4">Movie Image</label>
            <div className="col-md-8">
              <input
                type="url"
                name="image"
                value={image}
                className="form-control"
                required
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-md-4">Movie Type</label>
            <div className="col-md-8">
              <input
                type="text"
                name="type"
                value={type}
                className="form-control"
                required
                onChange={(e) => setType(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-md-4">Movie Summary</label>
            <div className="col-md-8">
              <textarea
                type="text"
                name="description"
                value={description}
                className="form-control"
                required
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
        </form>
        <button className="btn btn-add" onClick={handleSubmit}>
          Submit
        </button>
        <button className="btn" onClick={closeModal}>
          close
        </button>
      </Modal>
    </>
  );
};

export default AddMovie;
