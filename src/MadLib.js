import React, { useState } from "react";
import useField from "./hooks/useFormField";
import "./MadLib.css";

const MadLib = () => {
  const [showForm, setShowForm] = useState(true);
  const [formData, handleChange, resetFormData] = useField({
    noun: "",
    noun2: "",
    adjective: "",
    color: "",
  });
  const handleSubmit = (evt) => {
    evt.preventDefault();
    setShowForm((showForm) => !showForm);
  };
  const handleShow = () => {
    resetFormData();

    setShowForm((showForm) => !showForm);
  };
  return (
    <div className="">
      {showForm ? (
        <form onSubmit={handleSubmit} className="MadLib-form">
          <label htmlFor="noun"> Noun</label>
          <input
            type="text"
            name="noun"
            value={formData.noun}
            placeholder="Noun"
            onChange={handleChange}
          />
          <br />
          <label htmlFor=""> Noun2</label>
          <input
            type="text"
            name="noun2"
            value={formData.noun2}
            placeholder="Noun2"
            onChange={handleChange}
          />
          <br />

          <label htmlFor="adjective">Adjective </label>
          <input
            type="text"
            name="adjective"
            value={formData.adjective}
            placeholder="Adjective"
            onChange={handleChange}
          />
          <br />

          <label htmlFor="color"> Color</label>
          <input
            type="text"
            name="color"
            value={formData.color}
            placeholder="Color"
            onChange={handleChange}
          />
          <br />

          <button> Get the Story</button>
        </form>
      ) : (
        <>
          <h1>
            hello {formData.noun} this is {formData.noun2} and we are very{" "}
            {formData.adjective} for the {formData.color} Ocean
          </h1>
          <button onClick={handleShow}> Replay </button>
        </>
      )}
    </div>
  );
};

export default MadLib;
