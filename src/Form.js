import React, { useState } from "react";

function Form(props) {
  const [formData, setFormData] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    props.grabInput(formData);
  }

  function handleChange(e) {
    setFormData(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Search for receipt by name</span>
        <input value={formData} onChange={handleChange} />
      </label>
      <button>SEARCH</button>
    </form>
  );
}

export default Form;
