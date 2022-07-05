import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const MainNavigation = () => {


  const logoutHandler = () => {

  };
  const authUserHandler = () => {
    const enteredEmail = prompt('enter a name...!!!');
   console.log(enteredEmail);
 };
  const isLoggedIn = useSelector(state => state.auth.isAuthenticated)

  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>Pagination</div>
      </Link>
      <nav>
        <ul>
          {!isLoggedIn && (
            <li>
              <button
                type='button'
                className={classes.toggle}
                onClick={authUserHandler}
              >Login</button>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <Link to='/profile'>Profile</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <button onClick={logoutHandler}>logout</button>
            </li>
          )}


        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
