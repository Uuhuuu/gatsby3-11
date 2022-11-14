import React from "react";
import { Link } from 'gatsby';

const Homepage = () => {
  return (
    <>
    <title>Strona startowa</title>
      <h1>Default Page - <p>enjoy while you can</p></h1>
      <Link to="/about">To about</Link>    
      <div><Link to="/contact">To contact</Link></div>
      <div><Link to="/testing">To testing</Link></div>
    </>
  );
};

export const Head = () => <title>Index</title>
export default Homepage;
