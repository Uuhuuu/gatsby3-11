import React from 'react';
import { Link } from 'gatsby';
import { container, heading, navLinks, navLinkItem, navLinkText } from './layout.module.css'



const Layout = ( {pageTitle, pageHeading, children}) => {
  return (
    <main className={container}>
    <title>{pageTitle}</title>
    <h1>Here is global navigation bar. Checking for bootstrap</h1>
    <nav>
        <ul className={navLinks}>
            <li className={navLinkItem}><Link to="/" className={navLinkText}>Index</Link></li>
            <li className={navLinkItem}><Link to="/about" className={navLinkText}>About</Link></li>
            <li className={navLinkItem}><Link to="/contact" className={navLinkText}>Contact</Link></li>
            <li className={navLinkItem}><Link to="/testing" className={navLinkText}>Testing Page</Link></li>
        </ul>
    </nav>
    <h1 className={heading}>{pageHeading}</h1>
    {children}
    </main>
  )
}
 export default Layout