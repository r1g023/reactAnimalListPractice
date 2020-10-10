import React, { useState } from "react";

const AddAnimal = (props) => {
  const [animal, setAnimal] = useState();
  const handleChanges = () => {};

  const handleSubmit = () => {};

  return (
    <div>
      {/* <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          onChange={handleChanges}
          type="text"
          value={animal}
          placeholder="name"
          name="name"
          required
        ></input>
        <label htmlFor="Sound">Sound</label>
        <input
          onChange={handleChanges}
          type="text"
          value={animal}
          placeholder="sound"
          name="sound"
          required
        ></input>
        <label htmlFor="classification">Classification</label>
        <input
          onChange={handleChanges}
          type="text"
          value={animal}
          placeholder="classification"
          required
        ></input>
        <button>Submit</button>
      </form> */}
    </div>
  );
};
export default AddAnimal;
