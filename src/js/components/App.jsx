import React from "react";
import List from "./List.jsx";
import Form from "./Form.jsx";
import Button from '@material-ui/core/Button'


const App = () => (

  <div className="row mt-5">
    <div className="col-md-4 offset-md-1">
      <Form />
    </div>
    <div className="col-md-4 offset-md-1">
      <List />
    </div>
  </div>
);
export default App;
