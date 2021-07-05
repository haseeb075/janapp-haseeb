import React from "react";
// import Reactdom from 'react-dom'
import {Link} from "react-router-dom";

function Header(props) {
  return (
    <div className='nav'>
      <div className='container-fluid'>
        <div className='nav-brand'>
          <Link to='/'>
          Logo
          </Link>
          </div>

        
          <div className='nav-items'>
            <ul>
              <Link to='/about'>
              <li>About</li>
              </Link>
              
              <Link to='/addcontact'>
              <li>Add Contact</li>
              </Link>
                
              <Link to='/allcontact'>
                <li>All Contact</li>
              </Link>
              <Link to='/usestatehook'>
                <li>UseState Hook</li>
              </Link>
              
            </ul>
          </div>
        
      </div>
    </div>
  );
}

export default Header;