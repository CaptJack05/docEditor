import React, { useState } from "react";
import { useParams } from "react-router-dom";
import DeclarationForm from "../components/forms/DeclarationForm"; // Correct path
import { generateDeclarationDocx } from "../components/utils/docxUtils"; // Utility import

const FormPage = () => {
  const { docId } = useParams();
  const [formData, setFormData] = useState({ NN: "", CNAME: "", CANO: "" });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDownload = async () => {
    try {
      const blob = await generateDeclarationDocx(formData);
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${docId}_form.docx`;
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error generating document:", error);
    }
  };

  const renderForm = () => {
    switch (docId) {
      case "Declaration":
        return (
          <DeclarationForm formData={formData} onInputChange={handleInputChange} />
        );
      default:
        return <p>Form not found</p>;
    }
  };

  return (
    <div>
      <h1>Fill Details for {docId}</h1>
      {renderForm()}
      <button type="button" onClick={handleDownload}>
        Download Document
      </button>
    </div>
  );
};

export default FormPage;
