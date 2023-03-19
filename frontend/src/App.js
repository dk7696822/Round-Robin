import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import Teams from "./Teams";

function App() {
  const [value, setValue] = useState("");
  const [res, setRes] = useState([]);
  function handleChange(e) {
    e.preventDefault();
    setValue(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await axios.post("/robin", { value });
    setRes(res.data);
  }

  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
      >
        <h1>Robin Round Scheduler</h1>
      </div>
      <div style={{ textAlign: "center" }}>
        <p>Please input the teams separated by commas</p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Form onSubmit={handleSubmit}>
          <Form.Control
            size="md"
            type="text"
            value={value}
            onChange={handleChange}
            placeholder={"Enter team name separated by commas"}
            style={{
              width: "400px",
              height: "40px",
              marginTop: "30px",
              marginLeft: "10px",
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <Button type="submit" variant="primary">
              Submit
            </Button>
          </div>
        </Form>
      </div>
      <Teams names={res} />
    </>
  );
}

export default App;
