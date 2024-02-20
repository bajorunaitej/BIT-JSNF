import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import Section from "./components/Section";
// import FormSection from "./components/FormSection";
import Form from "./components/Form";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <FormSection /> */}
    {/* <Section /> */}
    <Form />
  </React.StrictMode>
);
