import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

//selectors
import { selectCurrentUser } from '../../redux/user/user.selectors';

//actions
import { signOut } from '../../redux/user/user.actions';

//icons
import { ReactComponent as Logo } from '../../assets/WPM.svg';

//styles
import './header.styles.css';

const Header = ({ currentUser, signOut }) => {
  return (
    <div className='header-container'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='options-container'>
        {currentUser ? (
          <React.Fragment>
            <Link className='option-link' to='/history'>
              History
            </Link>
            <div className='option-link' onClick={signOut}>
              Sign Out
            </div>
          </React.Fragment>
        ) : (
          <div className='option-link' to='signin'>
            SIGN IN
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = { signOut };
export default connect(mapStateToProps, mapDispatchToProps)(Header);
