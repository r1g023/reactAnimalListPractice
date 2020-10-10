import React, { useState, useEffect } from "react";

import AnimalForm from "./AnimalForm.js";

// import { axiosAuth } from "../utils/axiosWithAuth";
import axios from "axios";

export default function AnimalDashboard() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/animals")

      .then((res) => {
        console.log(res, "res inside get animal req");
        setAnimals(res.data);
      })
      .catch((err) => {
        console.log(err, "error in animals get request");
      });
  }, []);

  // How can get fetch the data from the server when the component mounts?
  // How can we capture and set that data to state?

  return (
    <div className="dash">
      <AnimalForm animals={animals} updateAnimals={setAnimals} />
      TEST
      {animals.map((item) => (
        <div className="card" key={item.id}>
          <h3>
            This is the {item.name} card! {item.sound}
          </h3>
          <h4>{item.name}</h4>
          <h4>{item.species}</h4>
          TEST
        </div>
      ))}
    </div>
  );
}
