import React from "react";
import Layout from "../components/layout";
import FormContainer from "../components/rsvp/rsvp-form-container";
import NavBar from "../components/navbar";

const rsvp = () => (
  <Layout>
    <NavBar />
    <FormContainer />
  </Layout>
);

export default rsvp;
