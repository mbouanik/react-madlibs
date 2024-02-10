import React, { useState } from "react";

const useField = (initialState) => {
  const [formData, setFormData] = useState(initialState);
  const handleChange = (evt) => {
    setFormData((formData) => ({
      ...formData,
      [evt.target.name]: evt.target.value,
    }));
  };

  const resetFormData = () => {
    setFormData(initialState);
  };
  return [formData, handleChange, resetFormData];
};

export default useField;
