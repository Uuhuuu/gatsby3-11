import React from "react";
import Layout from "../components/layout";

const TestingPage = () => {
  return (
    <>
    <Layout pageHeading='Testing' pageTitle='Testing Title'>
      Text for Testing Page. Testowanie jest bardzo ważne.
    </Layout>
    </>
  )
};

export const Head = () => <title>Testing Title 2</title>
export default TestingPage;
