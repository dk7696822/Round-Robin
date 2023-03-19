import React from "react";
import { Row, Col } from "react-bootstrap";
function Teams(props) {
  return (
    <>
      <Row className="m-5">
        {props.names.length
          ? props.names.map((el, i) => {
              return el.map((el, i) => {
                return (
                  <Col md={12} key={i} style={{ textAlign: "center" }}>
                    <div
                      className="border border-primary rounded"
                      style={{
                        margin: "0 auto",
                        width: "50%",
                        marginBottom: "10px",
                        backgroundColor: "lightBlue",
                      }}
                    >
                      <h4>
                        {JSON.stringify(el)
                          .replace(",", "  vs  ")
                          .replaceAll('"', "")
                          .replaceAll("[", "")
                          .replaceAll("]", "")
                          .toUpperCase()
                          .replaceAll("VS", " vs ")}
                      </h4>
                    </div>
                  </Col>
                );
              });
            })
          : ""}
      </Row>
    </>
  );
}

export default Teams;
