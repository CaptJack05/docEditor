import React from "react";

const DeclarationForm = ({ formData, onInputChange }) => {
  return (
    <form>
      <label>
        Application Form Number:
        <input name="NN" value={formData.NN} onChange={onInputChange} />
      </label>
      <br />
      <label>
        I/We (company/partnership firm/proprietor):
        <input name="CNAME" value={formData.CNAME} onChange={onInputChange} />
      </label>
      <br />
      <label>
        Electricity Connection CA No:
        <input name="CANO" value={formData.CANO} onChange={onInputChange} />
      </label>
    </form>
  );
};

export default DeclarationForm;
