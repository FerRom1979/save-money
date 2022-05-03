import React from "react";

const AddBalance = () => {
  return (
    <div>
      <div>
        <h2>introduzca el balance de la cuenta principal</h2>
      </div>
      <div>
        <p>Puede añadir mas cuentas en la seccion cuentas</p>
      </div>
      <div>
        <label htmlFor="currency">ARS</label>
        <input type="number" id="currency" />
      </div>
      <div></div>
    </div>
  );
};

export default AddBalance;
