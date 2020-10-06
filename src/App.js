import React from "react";
import formField from "./components/formField.js";
import Navbar from "./components/navbar.js";
import FormField from "./components/formField.js";

const App = () => {
  return (
    <div>
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
    </div>
  );
};

export default App;
