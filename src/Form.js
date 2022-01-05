import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState("");

  function handleChange(e) {
    setFormData(e.target.value);
  }

  console.log(formData);

  return (
    <form>
      <label>
        <span>Search for receipt by name</span>
        <input value={formData} onChange={handleChange} />
      </label>
      <button>SEARCH</button>
    </form>
  );
}

export default Form;
