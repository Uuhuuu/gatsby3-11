import React from "react";
import Layout from "../components/layout";
import { title } from '../components/layout.module.css'
import { text } from '../components/layout.module.css'

const About = () => {
   return (
     <div>
        
        <Layout pageHeading='About' pageTitle='About us'>
          <h1 className={title}>This is the about page</h1>
          <p className={text}>imr for import React from "react"</p>
          <p>rafc for react component</p>
          <strong>Text to About Page. Formatowanie CSS oparte na module.css</strong>
        </Layout>
     </div>
    
   )
 }


export const Head = () => <title>About Me</title>
export default About;