import React from 'react';
import './Header.scss'
import { Link } from 'react-router-dom'

const Header = (props) => {
  return (
    <header>
      <div className="logo">
        <Link to={'/'}>Sobvl</Link>
      </div>
      <div className="links">
        <ul>
          

          { props.currentUser ? 
            <>
              <li><Link to={'/xipsolos'}>All Xipsolos</Link></li>
              <li><Link to={'/xipsolos/new'}>Add New Xipsolo</Link></li>
              <li><Link to={'/profile'}>Profile</Link></li>
              <li><a href="/logout" onClick={ props.logout }>Log Out</a></li>
            </>
          :
            <>
              <li><Link to={'/xipsolos'}>All Xipsolos</Link></li>
              <li><Link to={'/register'}>Register</Link></li>
              <li><Link to={'/login'}>Login</Link></li>
            </>
          }
        </ul>
      </div>
    </header>
  );
}

export default Header;