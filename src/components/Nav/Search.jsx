import React from "react";
import { Form, Button } from "react-bootstrap";
import { CiSearch } from "react-icons/ci";
import "./nav.css";
export const Search = () => {
  return (
    <Form className="d-flex mx-auto rounded bg-light ps-2 overflow-hidden py-0">
      <CiSearch size={36} />
      <Form.Control
        type="search"
        placeholder="I'm looking for..."
        className="me-2 bg-transparent border-0"
        aria-label="Search"
      />
      <Button variant="primary" className="search-btn rounded-0 py-1 hover:bg-white">
        Search
      </Button>
    </Form>
  );
};
