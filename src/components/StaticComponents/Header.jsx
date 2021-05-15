import React from "react";
// import Reactdom from 'react-dom'
import {Link} from "react-router-dom";

function Header(props) {
  return (
    <div class='nav'>
      <div class='container-fluid'>
        <div className='nav-brand'>Logo</div>

        
          <div className='nav-items'>
            <ul>
              <li>
                <Link to='/faq' className='' activeClassName='selected'>
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
        
      </div>
    </div>
  );
}

export default Header;